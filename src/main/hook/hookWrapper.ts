import { EventEmitter } from 'node:events'
import Process from 'node:process'
import { inspect } from 'node:util'
import type { Wrapper, WrapperPaths, WrapperEventMap, WrapperInterceptors } from './types/wrapper'
import type { NodeIQQNTWrapperSession } from './types/wrapper/NodeIQQNTWrapperSession'
import { WrapperEnum } from '../enum/WrapperEnum'

interface ConfigType {
  /**
   * 是否开启log
   */
  log?: boolean | RegExp
  /**
   * 调整 inspect 模式下的打印深度
   */
  logDepth?: number | null
  /**
   * json 可以完整打印，inspect 格式更好看
   */
  logType?: 'inspect' | 'json'
  /**
   * 需要中断的黑名单事件
   */
  eventBlacklist?: (WrapperPaths | RegExp)[]
  /**
   * 事件拦截器，可以拦截请求参数以及返回值
   */
  eventInterceptors?: WrapperInterceptors
}

// 抱歉，没什么很特别的原因就是很中意这个名字
class StarWand {
  wrapperEmitter = new EventEmitter<WrapperEventMap>()
  constructor(
    public Wrapper?: Wrapper,
    public Session?: NodeIQQNTWrapperSession,
    public config: ConfigType = {}
  ) {}

  /**
   * 用于打印函数调用结果(感觉有点low)
   */
  logFn({ argArray, applyRet, key }: { argArray: unknown[]; applyRet: unknown; key: string }) {
    if (!this.config.log) return
    if (typeof this.config.log !== 'boolean' && !this.config.log.test(key)) return

    const depth = this.config.logDepth

    const logUtils = {
      inspect(params: unknown) {
        return inspect(params, { depth, colors: true })
      },
      json(params: unknown) {
        return JSON.stringify(params, null, 2)
      }
    }

    const log = logUtils[this.config.logType ?? 'inspect']

    console.log('-----------------------------------------------')
    console.log(`${key} 被调用`)
    argArray.length && console.log(`参数: `, log(argArray))

    if (applyRet instanceof Promise) {
      console.log('返回值为 Promise，请观察后续打印内容')
      applyRet.then(
        (res) => {
          console.log(`${key} 返回值: `)
          console.log(log(res))
        },
        (err) => {
          console.log(`${key} 返回值: `)
          console.log(log(err))
        }
      )
    } else {
      console.log(`返回值: `, log(applyRet))

      if (typeof applyRet === 'object' && applyRet) {
        const retPropertyNames = Object.getOwnPropertyNames(applyRet)
        retPropertyNames.length && console.log(`返回值 keys: `, log(retPropertyNames))

        console.log(`原型 keys: `, log(Object.getOwnPropertyNames(Object.getPrototypeOf(applyRet))))
      }
    }
  }

  /**
   * Hook Wrapper 中的实例对象
   */
  hookInstance({ instance, rootKey }: { instance: Record<string, any>; rootKey: string }) {
    return new Proxy(instance, {
      get: (_, p: string, receiver) => {
        const targetProperty = Reflect.get(instance, p, receiver)
        if (typeof targetProperty !== 'function') return targetProperty

        // 先生真乃盖世神医
        // return Reflect.get(target, p, receiver).bind(instance)

        const key = `${rootKey}/${p}`

        return (...args) => {
          // 拦截黑名单事件
          const isReturn = this.config.eventBlacklist?.some((value) => {
            if (typeof value === 'string') {
              return key === value
            } else {
              return value.test(key)
            }
          })
          if (isReturn) return

          // 对于监听器参数也进行hook
          if (key.endsWith('Listener')) {
            args[0] = this.hookInstance({
              instance: args[0],
              rootKey: key
            })
          }

          // hook args
          args = this.config.eventInterceptors?.[key]?.(args) ?? args

          let applyRet = instance[p](...args)

          // hook applyRet
          applyRet = this.config.eventInterceptors?.[`${key}:response`]?.({ applyRet, params: args }) ?? applyRet

          // Service 需额外处理
          if (key.endsWith('Service')) {
            applyRet = this.hookInstance({
              instance: applyRet as Record<string, unknown>,
              rootKey: key
            })
          }

          if (applyRet instanceof Promise) {
            applyRet.then(
              (res) => {
                const emitData = {
                  applyRet: res,
                  params: args
                }
                // @ts-expect-error  - 我都有点看不太懂了
                this.wrapperEmitter.emit(key, emitData)
              },
              (err) => {
                const emitData = {
                  applyRet: err,
                  params: args
                }
                // @ts-expect-error  - 我都有点看不太懂了
                this.wrapperEmitter.emit(key, emitData)
              }
            )
          } else {
            const emitData = {
              applyRet,
              params: args
            }
            // @ts-expect-error  - 我都有点看不太懂了
            this.wrapperEmitter.emit(key, emitData)
          }

          this.logFn({
            argArray: args,
            applyRet: applyRet,
            key: key
          })

          return applyRet
        }
      }
    })
  }
}

export const hookWrapper = (config?: ConfigType) => {
  const { promise, resolve } = Promise.withResolvers<StarWand>()
  starWand = new StarWand(undefined, undefined, config)

  Process.dlopen = new Proxy(Process.dlopen, {
    apply(
      target,
      thisArg,
      argArray: [
        {
          id: number
          loaded: boolean
          exports: unknown
          paths: []
          children: []
        },
        string
      ]
    ) {
      const [, fileName] = argArray
      const applyRet = Reflect.apply(target, thisArg, argArray)

      // hook 所有 wrapper 导出模块
      if (fileName.includes('wrapper.node')) {
        const wrapper = argArray[0].exports as Wrapper
        const hookWrapper = new Proxy(wrapper, {
          get(_, wrapperApiName: keyof Wrapper, receiver) {
            const wrapperApi = Reflect.get(wrapper, wrapperApiName, receiver)
            // 会有一个 __esModule 属性的读取
            if (typeof wrapperApi !== 'function') return wrapperApi

            return new Proxy(
              function () {
                // 由于所有属性都被添加了 configurable ，必须更改父级来实现 proxy
              },
              {
                /**
                 * 拦截 get 和拦截 construct 的意义是一样的，新版QQ均是 xxx.get/xxx.create 进行构造实例
                 * 当然还有 WrapperUtil 的一些静态属性，不过不太重要
                 */
                get(_, p: string, receiver) {
                  const targetProperty: unknown = Reflect.get(wrapperApi, p, receiver)
                  if (typeof targetProperty !== 'function') return targetProperty

                  return new Proxy(targetProperty, {
                    apply(target, thisArg, argArray) {
                      const key = `${wrapperApiName}/${p}`
                      const applyRet = Reflect.apply(target, thisArg, argArray)

                      starWand?.logFn({
                        argArray,
                        applyRet,
                        key
                      })

                      if (typeof applyRet !== 'object') return applyRet

                      const hookApplyRet = starWand?.hookInstance({
                        instance: applyRet,
                        rootKey: key
                      })

                      if (key === 'NodeIQQNTWrapperSession/create') {
                        starWand!.Session = hookApplyRet as NodeIQQNTWrapperSession
                      }

                      return hookApplyRet
                    }
                  })
                },

                // 拦截构造器已无任何意义，观察下来只有 NodeQQNTWrapperUtil 但无任何实例属性，只有静态的
                construct(_, argArray, newTarget) {
                  const instance = Reflect.construct(wrapperApi, argArray, newTarget)

                  starWand?.logFn({
                    key: wrapperApiName,
                    applyRet: instance,
                    argArray
                  })

                  return starWand!.hookInstance({
                    instance: instance,
                    rootKey: wrapperApiName
                  })
                }
              }
            )
          }
        })
        starWand!.Wrapper = argArray[0].exports = hookWrapper
      }

      return applyRet
    }
  })

  // 等待登录
  starWand.wrapperEmitter.once(WrapperEnum.onQRCodeLoginSucceed, () => {
    resolve(starWand!)
  })

  return promise
}

export let starWand: StarWand | undefined

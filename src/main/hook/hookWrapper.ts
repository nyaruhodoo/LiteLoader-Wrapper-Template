import Process from 'node:process'
import type { Wrapper } from '../types/wrapper'
import type { NodeIQQNTWrapperSession } from '../types/wrapper/NodeIQQNTWrapperSession'
import type { ConfigType } from './starWand'
import { StarWand } from './starWand'
import { Utils } from '@/utils'

let needsInit = false

const mergeConfig = (instanceConfig: ConfigType, pluginConfig: ConfigType): ConfigType => {
  return {
    log: instanceConfig.log,
    logDepth: instanceConfig.logDepth,
    logType: instanceConfig.logType,
    eventBlacklist: Array.from(
      new Set([...(instanceConfig.eventBlacklist || []), ...(pluginConfig.eventBlacklist || [])])
    ),
    eventInterceptors: (() => {
      const ret = {
        ...instanceConfig.eventInterceptors
      }

      for (const [key, value] of Object.entries(pluginConfig.eventInterceptors || {})) {
        if (ret[key]) {
          if (Array.isArray(ret[key])) {
            ret[key].push(value)
          } else {
            ret[key] = [ret[key], value]
          }
        } else {
          ret[key] = value
        }
      }

      return ret
    })()
  }
}

export const starWand: StarWand = (() => {
  if (!globalThis.starWand) {
    Object.defineProperty(globalThis, 'starWand', {
      value: new StarWand(),
      writable: false,
      enumerable: false
    })
    needsInit = true
    Utils.log('StarWand 实例已初始化')
  }

  return globalThis.starWand
})()

export const hookWrapper = (config: ConfigType = {}) => {
  const { promise, resolve } = Promise.withResolvers<StarWand>()
  starWand.config = needsInit ? config : mergeConfig(starWand.config, config)

  if (needsInit) {
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

                        const hookApplyRet = starWand.hookInstance({
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

                    return starWand.hookInstance({
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
  }

  /**
   * 新版本经测试发现，登陆成功后并不能直接调用 session 相关 api，有一个延迟存在
   * 或许等 QQ 自己调用是一个比较稳妥的办法
   */
  // @ts-expect-error 类型体操那边忽略了service
  starWand.wrapperEmitter.once('NodeIQQNTWrapperSession/create/getMsgService', () => {
    resolve(starWand)
  })

  return promise
}

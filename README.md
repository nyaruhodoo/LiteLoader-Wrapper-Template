# LiteLoader-NapCatCore-Template

自用插件开发模板，提供的功能如下

- 快速创建插件配置页面
- 默认合并新旧插件配置项，只需要更新 defaultConfig
- 默认 Hook Wrapper ，创建 NTCoreWrapper 实例

## 待办事项

- [ ] 修复 watch 打包
- [ ] 支持更多组件用于丰富配置选项
- [ ] 支持账号独立配置文件
- [ ] 使用其他构建工具替换 Vite，目前所用的这一套还是太笨重了，在很多地方都存在不少问题
- [ ] 集成插件自更新功能
- [ ] 为 NapCatCore API提供更多 TS 类型，~~不靠十雪难道靠我吗？~~

## 使用教程

实际上没什么教程，我只会告诉你需要修改哪些东西

- 修改 `manifest.json` ，代码中依赖了 slug 作为标识符
- 修改 `src/defaultConfig` 和 `src/renderer/configPage/createConfigViewConfig.ts` 你总得有自己的配置文件不是？

当你修改某些配置项时一定要同步修改类型，这样就可以警告你哪里需要修改

## 构建相关

因基于 electron-vite 进行构建，所以功能大差不差，只是做了略微修改  
main、preload、renderer 3个文件都是独立打包，打包后不存在共同引用，但不妨碍你在开发时引用共同的代码，在打包后会分别复制到3个文件中  
node_modules 中的文件也会跟随打包，目的是为了它人使用插件时不需要在安装依赖

**唯一的注意事项是不要在渲染层引用 node 环境下的依赖**

## 静态资源处理

如果你希望简单处理，可以在 import 时添加参数来获取 `raw`、`base64`等格式

```ts
import styleUrl from './index.scss?url'

const linkEl = document.createElement('link')
linkEl.rel = 'stylesheet'
linkEl.href = styleUrl
shadow.append(linkEl)
```

## 类型相关

- 全局注入了 `global.d.ts` 暴露 `LiteLoader` 相关API (类型可能有误)
- 增加了 `contextBridge.d.ts` 用于在 `preload` 与 `renderer` 之间暴露接口时同步类型

## 路径相关

- 增加了常用的 `@` 来引用 `src` 目录
- 增加了 `@/manifest` 来引用 `manifest.json` 文件
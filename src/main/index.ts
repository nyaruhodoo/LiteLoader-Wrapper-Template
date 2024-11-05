import { hookWrapper } from '@/main/hook/hookWrapper'
import { WrapperEnum } from './enum/WrapperEnum'
;(async () => {
  await hookWrapper({
    log: false,
    eventBlacklist: [WrapperEnum.sendLog, /tianshu/i],
    eventInterceptors: {}
  })
})()

// Hook IPC 必须在 onBrowserWindowCreated 中调用
// exports.onBrowserWindowCreated = (window: Electron.CrossProcessExports.BrowserWindow) => {
//   // window 为 Electron 的 BrowserWindow 实例
//   hookIPC(window)
// }

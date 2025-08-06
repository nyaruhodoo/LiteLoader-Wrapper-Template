import { hookWrapper } from '@/main/hook/hookWrapper'
import { WrapperEnum } from './types/WrapperEnum'
;(async () => {
  await hookWrapper({
    log: false,
    logDepth: null,
    eventBlacklist: [WrapperEnum.sendLog, /tianshu/i]
  })
})()

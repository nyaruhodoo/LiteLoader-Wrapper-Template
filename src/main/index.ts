import { hookWrapper } from '@/main/hook/hookWrapper'
import { WrapperEnum } from './enum/WrapperEnum'
;(async () => {
  await hookWrapper({
    log: /Service\//i,
    logDepth: null,
    eventBlacklist: [WrapperEnum.sendLog, /tianshu/i]
  })
})()

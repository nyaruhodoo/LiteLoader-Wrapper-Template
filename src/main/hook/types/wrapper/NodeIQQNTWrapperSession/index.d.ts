import type { NodeIKernelNodeMiscService } from './NodeIKernelNodeMiscService'
import type { NodeIKernelMSFService } from './NodeIKernelMSFService'
import type { NodeIKernelMsgService } from './NodeIKernelMsgService'
import type { NodeIKernelAvatarService } from './NodeIKernelAvatarService'
import type { NodeIKernelUnitedConfigService } from './NodeIKernelUnitedConfigService'
import type { NodeIKernelProfileService } from './NodeIKernelProfileService'
import type { NodeIKernelRobotService } from './NodeIKernelRobotService'
import type { NodeIKernelSettingService } from './NodeIKernelSettingService'
import type { NodeIKernelAVSDKService } from './NodeIKernelAVSDKService'
import type { NodeIKernelConfigMgrService } from './NodeIKernelConfigMgrService'
import type { NodeIQQEmailService } from './NodeIQQEmailService'
import type { NodeIKernelBuddyService } from './NodeIKernelBuddyService'
import type { NodeIKernelTipOffService } from './NodeIKernelTipOffService'
import type { NodeIKernelSkinService } from './NodeIKernelSkinService'
import type { NodeIKernelBaseEmojiService } from './NodeIKernelBaseEmojiService'
import type { NodeIKernelSearchService } from './NodeIKernelSearchService'
import type { NodeIKernelProfileLikeService } from './NodeIKernelProfileLikeService'
import type { NodeIKernelGroupService } from './NodeIKernelGroupService'

export interface NodeIQQNTWrapperSession {
  // 各种服务获取方法
  getQQEmailService(): NodeIQQEmailService
  getShareToWechatService(): any
  getAlbumService(): any
  getTianShuService(): any
  getUnitedConfigService(): NodeIKernelUnitedConfigService
  getTicketService(): any
  getTipOffService(): NodeIKernelTipOffService
  getProfileService(): NodeIKernelProfileService
  getProfileLikeService(): NodeIKernelProfileLikeService
  getBuddyService(): NodeIKernelBuddyService
  getSearchService(): NodeIKernelSearchService
  getGroupService(): NodeIKernelGroupService
  getMsgService(): NodeIKernelMsgService
  getRichMediaService(): any
  getRecentContactService(): any
  getConfigMgrService(): NodeIKernelConfigMgrService
  getDirectSessionService(): any
  getRDeliveryService(): any
  getAvatarService(): NodeIKernelAvatarService
  getFeedChannelService(): any
  getNewFeedChannelService(): any
  getYellowFaceService(): any
  getCollectionService(): any
  getSettingService(): NodeIKernelSettingService
  getStorageCleanService(): any
  getQiDianService(): any
  getFileAssistantService(): any
  getGuildService(): any
  getSkinService(): NodeIKernelSkinService
  getTestPerformanceService(): any
  getQQPlayService(): any
  getDbToolsService(): any
  getUixConvertService(): any
  getWiFiPhotoClientService(): any
  getOnlineStatusService(): any
  getRemotingService(): any
  getRobotService(): NodeIKernelRobotService
  getGroupTabService(): any
  getGroupSchoolService(): any
  getLiteBusinessService(): any
  getBdhUploadService(): any
  getGuildMsgService(): any
  getLockService(): any
  getEmojiService(): any
  getBaseEmojiService(): NodeIKernelBaseEmojiService
  getMSFService(): NodeIKernelMSFService
  getNodeMiscService(): NodeIKernelNodeMiscService
  getGuildHotUpdateService(): any
  getMsgBackupService(): any
  getAVSDKService(): NodeIKernelAVSDKService

  // 会话管理方法
  init(): void // 初始化
  destroy(): void // 销毁
  startNT(): void // 启动 NT
  startGPro(): void // 启动 GPro
  close(): void // 关闭会话
  getSessionId(): string // 获取会话 ID
  updateTicket(ticket: any): void // 更新票据
  onLine(): void // 上线
  offLine(): void // 下线
  offLineSync(): void // 同步下线
  onSendOidbReply(): void // 发送 OIDB 回复
  onSendSSOReply(): void // 发送 SSO 回复
  onNetReply(): void // 网络回复
  onMsfPush(): void // Msf 推送
  setOnMsfStatusChanged(callback: () => void): void // 设置 Msf 状态变化回调
  setOnNetworkChanged(callback: () => void): void // 设置网络变化回调
  setOnWeakNetChanged(callback: () => void): void // 设置弱网变化回调
  switchToFront(): void // 切换到前台
  switchToBackGround(): void // 切换到后台
  getCacheErrLog(): any // 获取缓存错误日志
  getAccountPath(): string // 获取账号路径
  onDispatchRequestReply(): void // 处理请求回复
  onDispatchPush(): void // 处理推送
  onDispatchPushWithJson(data: any): void // 处理 JSON 推送
  onUIConfigUpdate(): void // UI 配置更新
  getShortLinkBlacklist(): any // 获取短链接黑名单
  disableIpDirect(): void // 禁用 IP 直连
}

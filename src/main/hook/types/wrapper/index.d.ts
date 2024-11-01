import type { NodeQQNTWrapperUtil } from './NodeQQNTWrapperUtil'
import type { NodeIQQNTWrapperEngine } from './NodeIQQNTWrapperEngine'
import type { NodeIQQNTWrapperSession } from './NodeIQQNTWrapperSession'
import type { NodeIKernelLoginService } from './NodeIKernelLoginService'
import type { NodeIOPSafePwdEdit } from './NodeIOPSafePwdEdit'
import type { NodeIO3MiscService } from './NodeIO3MiscService'

interface WrapperApi<T = unknown> {
  new (...args: unknown[]): T
  get?(): T
  create?(): T
}

export interface Wrapper {
  NodeIKernelECDHService: WrapperApi
  NodeIQQNTWrapperEngine: WrapperApi<NodeIQQNTWrapperEngine>
  NodeIKernelLoginService: WrapperApi<NodeIKernelLoginService>
  NodeIOPSafePwdEdit: WrapperApi<NodeIOPSafePwdEdit>
  NodeIQQNTWrapperSession: WrapperApi<NodeIQQNTWrapperSession>
  NodeIQQEmailService: WrapperApi
  NodeIKernelBaseEmojiService: WrapperApi
  NodeIKernelEmojiService: WrapperApi
  NodeIShareToWechatService: WrapperApi
  NodeIKernelLockService: WrapperApi
  NodeIKernelGuildMsgService: WrapperApi
  NodeIKernelBdhUploadService: WrapperApi
  NodeIKernelAlbumService: WrapperApi
  NodeIKernelProfileLikeService: WrapperApi
  NodeIKernelNearbyProService: WrapperApi
  NodeIKernelLiteBusinessService: WrapperApi
  NodeIKernelGroupSchoolService: WrapperApi
  NodeIKernelGroupTabService: WrapperApi
  NodeIKernelRobotService: WrapperApi
  NodeIO3MiscService: WrapperApi<NodeIO3MiscService>
  NodeIKernelOnlineStatusService: WrapperApi
  NodeIKernelTianShuService: WrapperApi
  NodeIKernelQQPlayService: WrapperApi
  NodeIKernelUnitedConfigService: WrapperApi
  NodeIKernelWiFiPhotoHostService: WrapperApi
  NodeIKernelWiFiPhotoGetAlbumListCallback: WrapperApi
  NodeIKernelWiFiPhotoGetAllPhotoSimpleInfoCallback: WrapperApi
  NodeIKernelWiFiPhotoGetPhotoInfoBatchCallback: WrapperApi
  NodeIKernelWiFiPhotoGetPhotoCallback: WrapperApi
  NodeIKernelWiFiPhotoDeletePhotoBatchCallback: WrapperApi
  NodeIKernelWiFiPhotoClientService: WrapperApi
  NodeIKernelUixConvertService: WrapperApi
  NodeIKernelDbToolsService: WrapperApi
  NodeIKernelTestPerformanceService: WrapperApi
  NodeIKernelSkinService: WrapperApi
  NodeIKernelTicketService: WrapperApi
  NodeIKernelCollectionService: WrapperApi
  NodeISpan: WrapperApi
  NodeQQNTWrapperUtil: NodeQQNTWrapperUtil
  NodeIQQNTWrapperNetwork: WrapperApi
  NodeIKernelGuildService: WrapperApi
  NodeIKernelTipOffService: WrapperApi
  NodeIKernelFileAssistantService: WrapperApi
  NodeIKernelQiDianService: WrapperApi
  NodeIKernelStorageCleanService: WrapperApi
  NodeIKernelSettingService: WrapperApi
  NodeIKernelYellowFaceForManagerService: WrapperApi
  NodeIKernelYellowFaceService: WrapperApi
  NodeIKernelNewFeedService: WrapperApi
  NodeIKernelFeedService: WrapperApi
  NodeIKernelRichMediaService: WrapperApi
  NodeIKernelAvatarService: WrapperApi
  NodeIKernelRDeliveryService: WrapperApi
  NodeIKernelDirectSessionService: WrapperApi
  NodeIKernelConfigMgrService: WrapperApi
  NodeIKernelRecentContactService: WrapperApi
  NodeIKernelProfileService: WrapperApi
  NodeIKernelMsgService: WrapperApi
  NodeIKernelGroupService: WrapperApi
  NodeIKernelSearchService: WrapperApi
  NodeIKernelBuddyService: WrapperApi
  NodeIKernelMSFService: WrapperApi
  NodeIKernelNodeMiscService: WrapperApi
  NodeIGuildHotUpdateService: WrapperApi
  NodeIKernelMsgBackupService: WrapperApi
  NodeIKernelRemotingService: WrapperApi
  NodeIKernelAVSDKService: WrapperApi
}

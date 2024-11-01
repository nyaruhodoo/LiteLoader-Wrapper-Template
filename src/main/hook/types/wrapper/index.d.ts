import type { NodeQQNTWrapperUtil } from './NodeQQNTWrapperUtil'
import type { NodeIQQNTWrapperEngine } from './NodeIQQNTWrapperEngine'
import type { NodeIQQNTWrapperSession } from './NodeIQQNTWrapperSession'
import type { NodeIKernelLoginService } from './NodeIKernelLoginService'
import type { NodeIOPSafePwdEdit } from './NodeIOPSafePwdEdit'
import type { NodeIO3MiscService } from './NodeIO3MiscService'

export interface Wrapper {
  NodeIKernelECDHService: () => void
  NodeIQQNTWrapperEngine: NodeIQQNTWrapperEngine
  NodeIKernelLoginService: NodeIKernelLoginService
  NodeIOPSafePwdEdit: NodeIOPSafePwdEdit
  NodeIQQNTWrapperSession: NodeIQQNTWrapperSession
  NodeIQQEmailService: () => void
  NodeIKernelBaseEmojiService: () => void
  NodeIKernelEmojiService: () => void
  NodeIShareToWechatService: () => void
  NodeIKernelLockService: () => void
  NodeIKernelGuildMsgService: () => void
  NodeIKernelBdhUploadService: () => void
  NodeIKernelAlbumService: () => void
  NodeIKernelProfileLikeService: () => void
  NodeIKernelNearbyProService: () => void
  NodeIKernelLiteBusinessService: () => void
  NodeIKernelGroupSchoolService: () => void
  NodeIKernelGroupTabService: () => void
  NodeIKernelRobotService: () => void
  NodeIO3MiscService: NodeIO3MiscService
  NodeIKernelOnlineStatusService: () => void
  NodeIKernelTianShuService: () => void
  NodeIKernelQQPlayService: () => void
  NodeIKernelUnitedConfigService: () => void
  NodeIKernelWiFiPhotoHostService: () => void
  NodeIKernelWiFiPhotoGetAlbumListCallback: () => void
  NodeIKernelWiFiPhotoGetAllPhotoSimpleInfoCallback: () => void
  NodeIKernelWiFiPhotoGetPhotoInfoBatchCallback: () => void
  NodeIKernelWiFiPhotoGetPhotoCallback: () => void
  NodeIKernelWiFiPhotoDeletePhotoBatchCallback: () => void
  NodeIKernelWiFiPhotoClientService: () => void
  NodeIKernelUixConvertService: () => void
  NodeIKernelDbToolsService: () => void
  NodeIKernelTestPerformanceService: () => void
  NodeIKernelSkinService: () => void
  NodeIKernelTicketService: () => void
  NodeIKernelCollectionService: () => void
  NodeISpan: () => void
  NodeQQNTWrapperUtil: NodeQQNTWrapperUtil
  NodeIQQNTWrapperNetwork: () => void
  NodeIKernelGuildService: () => void
  NodeIKernelTipOffService: () => void
  NodeIKernelFileAssistantService: () => void
  NodeIKernelQiDianService: () => void
  NodeIKernelStorageCleanService: () => void
  NodeIKernelSettingService: () => void
  NodeIKernelYellowFaceForManagerService: () => void
  NodeIKernelYellowFaceService: () => void
  NodeIKernelNewFeedService: () => void
  NodeIKernelFeedService: () => void
  NodeIKernelRichMediaService: () => void
  NodeIKernelAvatarService: () => void
  NodeIKernelRDeliveryService: () => void
  NodeIKernelDirectSessionService: () => void
  NodeIKernelConfigMgrService: () => void
  NodeIKernelRecentContactService: () => void
  NodeIKernelProfileService: () => void
  NodeIKernelMsgService: () => void
  NodeIKernelGroupService: () => void
  NodeIKernelSearchService: () => void
  NodeIKernelBuddyService: () => void
  NodeIKernelMSFService: () => void
  NodeIKernelNodeMiscService: () => void
  NodeIGuildHotUpdateService: () => void
  NodeIKernelMsgBackupService: () => void
  NodeIKernelRemotingService: () => void
  NodeIKernelAVSDKService: () => void
}

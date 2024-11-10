export interface PicElement {
  picSubType: number
  fileName: string
  fileSize: string // 如果需要数值计算，可以改为 number
  picWidth: number
  picHeight: number
  original: boolean
  md5HexStr: string
  sourcePath: string
  thumbPath: Map<number, string>
  transferStatus: number
  progress: number
  picType: number
  invalidState: number
  fileUuid: string
  fileSubId: string
  thumbFileSize: number
  fileBizId: number | null
  downloadIndex: number | null
  summary: string
  emojiFrom: number
  emojiWebUrl: string
  emojiAd: { url: string; desc: string }
  emojiMall: { packageId: number; emojiId: number }
  emojiZplan: {
    actionId: number
    actionName: string
    actionType: number
    playerNumber: number
    peerUid: string
    bytesReserveInfo: string
  }
  originImageMd5: string
  originImageUrl: string
  import_rich_media_context: any | null // 根据实际情况调整类型
  isFlashPic: boolean | null // 根据实际情况调整类型
  storeID: number
}

export interface GrayTipElement {
  subElementType: number
  revokeElement: {
    operatorTinyId: string
    operatorRole: string
    operatorUid: string
    operatorNick: string
    operatorRemark: string
    operatorMemRemark: string
    origMsgSenderUid: string
    origMsgSenderNick: string
    origMsgSenderRemark: string
    origMsgSenderMemRemark: string
    isSelfOperate: boolean
    wording: string
  }
  proclamationElement: any | null // 根据实际情况调整类型
  emojiReplyElement: any | null // 根据实际情况调整类型
  groupElement: any | null // 根据实际情况调整类型
  buddyElement: any | null // 根据实际情况调整类型
  feedMsgElement: any | null // 根据实际情况调整类型
  essenceElement: any | null // 根据实际情况调整类型
  groupNotifyElement: any | null // 根据实际情况调整类型
  buddyNotifyElement: any | null // 根据实际情况调整类型
  xmlElement: any | null // 根据实际情况调整类型
  fileReceiptElement: any | null // 根据实际情况调整类型
  localGrayTipElement: any | null // 根据实际情况调整类型
  blockGrayTipElement: any | null // 根据实际情况调整类型
  aioOpGrayTipElement: any | null // 根据实际情况调整类型
  jsonGrayTipElement: any | null // 根据实际情况调整类型
  walletGrayTipElement: any | null // 根据实际情况调整类型
}

export interface TextElement {
  content: string
  atType: number
  atUid: string
  atTinyId: string
  atNtUid: string
  subElementType: number
  atChannelId: string
  linkInfo: null
  atRoleId: string
  atRoleColor: 0
  atRoleName: string
  needNotify: 0
}

export interface ReplyElement {
  replayMsgId: string // 回复消息ID
  replayMsgSeq: string // 回复消息序列
  replayMsgRootSeq: string // 根消息序列
  replayMsgRootMsgId: string // 根消息ID
  replayMsgRootCommentCnt: string // 根消息评论数
  sourceMsgIdInRecords: string // 源消息ID
  sourceMsgText: string // 源消息文本
  sourceMsgTextElems: {
    replyAbsElemType: number // 回复元素类型
    textElemContent: string // 文本内容
    faceElem: any | null // 表情元素，可以根据实际情况调整类型
    picElem: any | null // 图片元素，可以根据实际情况调整类型
  }[] // 源消息文本元素数组
  senderUid: string // 发送者用户ID
  senderUidStr: string // 发送者用户ID字符串
  replyMsgClientSeq: string // 回复消息客户端序列
  replyMsgTime: string // 回复消息时间
  replyMsgRevokeType: number // 回复消息撤回类型
  sourceMsgIsIncPic: boolean // 源消息是否包含图片
  sourceMsgExpired: boolean // 源消息是否过期
  anonymousNickName: string | null // 匿名昵称
  originalMsgState: any | null // 原消息状态，可以根据实际情况调整类型
}

export enum ElementType {
  TextElement = 1,
  PicElement = 2,
  ReplyElement = 7
}

export interface Element {
  elementType: ElementType
  elementId: string
  elementGroupId: number
  extBufForUI: Uint8Array
  textElement: null | TextElement
  faceElement: null
  marketFaceElement: null
  replyElement: null | ReplyElement
  picElement: null | PicElement
  pttElement: null
  videoElement: null
  grayTipElement: null | GrayTipElement
  arkElement: null
  fileElement: null
  liveGiftElement: null
  markdownElement: null
  structLongMsgElement: null
  multiForwardMsgElement: null
  giphyElement: null
  walletElement: null
  inlineKeyboardElement: null
  textGiftElement: null
  calendarElement: null
  yoloGameResultElement: null
  avRecordElement: null
  structMsgElement: null
  faceBubbleElement: null
  shareLocationElement: null
  tofuRecordElement: null
  taskTopMsgElement: null
  recommendedMsgElement: null
  actionBarElement: null
  prologueMsgElement: null
}

// 1私聊，2群聊
export type ChatType = 1 | 2

export interface PeerInfo {
  chatType: ChatType
  peerUid: string
  guildId: string
}

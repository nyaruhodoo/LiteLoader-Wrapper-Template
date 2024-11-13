export interface VasInfo {
  vipFlag: boolean
  yearVipFlag: boolean
  svipFlag: boolean
  vipLevel: number
  bigClub: boolean
  bigClubLevel: number
  nameplateVipType: number
  grayNameplateFlag: number
  superVipTemplateId: number
  diyFontId: number
  pendantId: number
  pendantDiyId: number
  faceId: number
  vipFont: number
  vipFontType: number
  magicFont: number
  fontEffect: number
  newLoverDiamondFlag: number
  extendNameplateId: number
  diyNameplateIDs: number[]
  vipStartFlag: number
  vipDataFlag: number
  gameNameplateId: string
  gameLastLoginTime: string
  gameRank: number
  gameIconShowFlag: boolean
  gameCardId: string
  vipNameColorId: string
  privilegeIcon: {
    jumpUrl: string
    openIconList: string[]
    closeIconList: string[]
  }
}

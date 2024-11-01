export interface NodeIKernelAvatarService {
  addAvatarListener(listener: unknown): void
  removeAvatarListener(listener: unknown): void
  getAvatarPath(p1: string, p2: number): string
  forceDownloadAvatar(uid: string): Promise<void>
  getGroupAvatarPath(groupId: string): string
  getConfGroupAvatarPath(confId: string): string
  forceDownloadGroupAvatar(groupId: string): Promise<void>
  getGroupPortraitPath(groupId: string): string
  forceDownloadGroupPortrait(groupId: string): Promise<void>
  getAvatarPaths(uids: string[]): string[]
  getGroupAvatarPaths(groupIds: string[]): string[]
  getConfGroupAvatarPaths(confIds: string[]): string[]
  getAvatarPathByUin(uin: string): string
  forceDownloadAvatarByUin(uin: string): Promise<void>
}

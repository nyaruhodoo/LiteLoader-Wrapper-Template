/**
 * NodeIKernelProfileLikeService 接口定义
 * 提供好友资料点赞功能的相关方法。
 */
export interface NodeIKernelProfileLikeService {
  /**
   * 添加内核资料点赞监听器
   * @param listener - 监听器函数，用于接收点赞事件
   */
  addKernelProfileLikeListener(listener: (data: any) => void): void

  /**
   * 移除内核资料点赞监听器
   * @param listener - 要移除的监听器函数
   */
  removeKernelProfileLikeListener(listener: (data: any) => void): void

  /**
   * 设置好友资料的点赞状态
   * @param buddyId - 好友的唯一标识符
   * @param liked - 点赞状态，true 表示点赞，false 表示取消点赞
   * @returns 处理结果
   */
  setBuddyProfileLike(buddyId: string, liked: boolean): Promise<void>

  /**
   * 获取好友资料的点赞状态
   * @param buddyId - 好友的唯一标识符
   * @returns 点赞状态
   */
  getBuddyProfileLike(buddyId: string): Promise<boolean>

  /**
   * 获取资料点赞的 SCID 资源信息
   * @param scid - SCID 唯一标识符
   * @returns 资源信息
   */
  getProfileLikeScidResourceInfo(scid: string): Promise<any>
}

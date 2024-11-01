export interface NodeIKernelUnitedConfigService {
  addKernelUnitedConfigListener(listener: unknown): void
  removeKernelUnitedConfigListener(listener: unknown): void
  fetchUnitedCommendConfig(): Promise<any> // 根据实际返回值类型调整
  fetchUnitedSwitchConfig(): Promise<any> // 根据实际返回值类型调整
  loadUnitedConfig(p1: string): WrapperAsyncResponse<{
    configData: {
      group: string
      content: string
      isSwitchOn: boolean
      code: number
      isCdn: boolean
      resourcePath: null
    }
  }>
  isUnitedConfigSwitchOn(): boolean
  registerUnitedConfigPushGroupList(groupList: string[]): void
}

<script setup lang="ts">
  import { reactive, toRefs, watch } from 'vue'
  import { defaultConfig } from '../../defaultConfig'
  import { Utils } from '../../utils'
  import ConfigList from './components/ConfigList.vue'
  import ConfigItem from './components/ConfigItem.vue'
  import NSwitch from './components/NSwitch.vue'
  import type { ContextBridgeApiType } from '../../types/contextBridge'
  // BUG: 不知道为什么，导入 JSON 没有被识别到
  import manifest from '../../../manifest.json'
  import NSelect from './components/NSelect.vue'
  import NInput from './components/NInput.vue'

  const contextBridgeApi = window[manifest.slug] as unknown as ContextBridgeApiType

  /**
   * 初始化config
   * 响应式有点没玩明白，大概是这样写的吧...
   */
  let configReactive = reactive(defaultConfig)
  const { input, select, switchh } = toRefs(configReactive)
  ;(async () => {
    const newConfig = await Utils.getConfig()
    for (const key in newConfig) {
      configReactive[key] = newConfig[key]
    }
  })()

  /**
   * 监听config变动
   */
  watch(configReactive, (newVal) => {
    const copyVal = JSON.parse(JSON.stringify(newVal))
    Utils.updateConfig(copyVal)
    // 每次配置更新后通知主线程和渲染线程
    contextBridgeApi.configUpdate(copyVal)
    new BroadcastChannel(manifest.slug).postMessage(copyVal)
  })
</script>

<template>
  <ConfigList>
    <ConfigItem title="测试1">
      <NSelect
        v-model="select"
        :options="[
          {
            value: 'Option1',
            label: 'Option1'
          },
          {
            value: 'Option2',
            label: 'Option2'
          }
        ]"
      />
    </ConfigItem>
    <ConfigItem title="测试2">
      <NSwitch v-model="switchh" />
    </ConfigItem>
    <ConfigItem title="测试3">
      <NInput v-model="input" />
    </ConfigItem>
  </ConfigList>
</template>

<style scoped bundle></style>

<script lang="ts" setup>
  import type { InputTypeHTMLAttribute } from 'vue'

  const model = defineModel<string>()
  const inputProps = defineProps<{
    type?: InputTypeHTMLAttribute
    placeholder?: string
    minLength?: number | string
    maxLength?: number | string
  }>()
</script>

<template>
  <div
    class="border border-solid border-[var(--border\_dark)] focus-within:border-[var(--brand\_standard)] rounded-[4px] text-[12px] leading-[26px] px-[8px]"
  >
    <input v-model="model" class="text-center" v-bind="inputProps" />
  </div>
</template>

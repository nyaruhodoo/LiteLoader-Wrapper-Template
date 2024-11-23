<script lang="ts" setup>
  const model = defineModel<string>()
</script>

<template>
  <div
    class="border border-solid border-[var(--border\_dark)] focus-within:border-[var(--brand\_standard)] rounded-[4px] text-[12px] text-center leading-[26px]"
  >
    <input v-model="model" class="px-[8px]" type="text" />
  </div>
</template>

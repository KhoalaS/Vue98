<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useProgressBar } from './useProgressBar'

defineProps<{
  progressLabel: string
}>()
const progressBar = useTemplateRef('progress-bar')
const model = defineModel<number>({
  default: 0,
})
const { barCount, labelId, max } = useProgressBar(progressBar, model)
</script>
<template>
  <div>
    <span class="text-sm" :id="labelId">{{ progressLabel }}</span>
    <div
      :aria-labelledby="labelId"
      role="progressbar"
      :aria-valuenow="model / max"
      :aria-valuemax="max"
    >
      <div class="relative inv-border py-[1px] px-[2px] mb-1 z-10">
        <div
          ref="progress-bar"
          class="relative flex gap-[2px] h-4 items-center overflow-hidden z-0"
        >
          <div :key="i" v-for="i in barCount" class="w-2 bg-[#000080] h-3 shrink-0"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.inv-border {
  box-shadow:
    inset -1px -1px var(--border-white),
    inset 1px 1px #7f7f7f;
}
</style>

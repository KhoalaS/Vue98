<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { computed, useTemplateRef } from 'vue'

const { max = 100 } = defineProps<{
  max?: number
  progressLabel: string
}>()

const model = defineModel<number>({
  default: 0,
})

const progressBar = useTemplateRef('progress-bar')
const { width } = useElementSize(progressBar)

const barCount = computed(() => {
  const progress = Math.floor(width.value * (model.value / max))
  return Math.floor(progress / 10)
})
const labelId = crypto.randomUUID()
</script>
<template>
  <div>
    <span :id="labelId">{{ progressLabel }}</span>
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
    inset -1px -1px #fff,
    inset 1px 1px #7f7f7f;
}
</style>

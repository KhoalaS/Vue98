<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { computed, useTemplateRef } from 'vue'

const progressBar = useTemplateRef('progress-bar')
const { width } = useElementSize(progressBar)

const model = defineModel<number>({
  default: 0,
})

const barCount = computed(() => {
  const progress = Math.floor(width.value * (model.value / 100))
  return Math.floor(progress / 10)
})
</script>
<template>
  <main>
    <div class="relative inv-border py-[1px] px-[2px] mb-1 z-10">
      <div ref="progress-bar" class="relative flex gap-[2px] h-4 items-center overflow-hidden z-0">
        <div :key="i" v-for="i in barCount" class="w-2 bg-[#000080] h-3 shrink-0"></div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.inv-border {
  box-shadow:
    inset -1px -1px #fff,
    inset 1px 1px #7f7f7f;
}
</style>

<script setup lang="ts">
import { computed } from 'vue'

// 1 bar = approx 3.85%

const model = defineModel<number>({
  default: 0,
})

const barCount = computed(() => {
  return Math.floor(model.value / 3.85)
})
</script>
<template>
  <main>
    <div id="progress" class="inv-border flex gap-[2px] mb-1 h-4 items-center py-[1px] px-[2px]">
      <div :key="i" v-for="i in barCount" class="w-2 bg-[#000080] h-3"></div>
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

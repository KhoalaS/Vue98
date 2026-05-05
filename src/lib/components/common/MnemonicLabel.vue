<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
}>()

const firstLabelLetter = computed(() => props.label.charAt(0).toUpperCase())
const restLabel = computed(() => props.label.substring(1))
</script>
<template>
  <div>
    <span class="relative upper">{{ firstLabelLetter }}</span>
    <span>{{ restLabel }}</span>
  </div>
</template>

<style scoped>
.upper {
  margin-left: 1px;
}
.upper::before {
  content: '';
  position: absolute;
  left: -1px;
  width: calc(100% + 1px);
  height: 1px;
  background-color: black;
  bottom: -1px;
}
</style>

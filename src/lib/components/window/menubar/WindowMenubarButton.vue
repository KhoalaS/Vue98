<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
}>()

const firstLabelLetter = computed(() => props.label.charAt(0).toUpperCase())
const restLabel = computed(() => props.label.substring(1))
</script>

<template>
  <div :aria-label="label" role="button" class="menu-button">
    <span class="upper">{{ firstLabelLetter }}</span>
    <span>{{ restLabel }}</span>
  </div>
</template>

<style scoped>
.menu-button {
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% + 1px);
}

.menu-button:hover {
  cursor: pointer;
  background-color: var(--main-bg-color);
  box-shadow:
    inset 1px 1px var(--border-white),
    inset -1px -1px var(--border-gray);
}

.upper {
  position: relative;
  margin-left: 1px;
}
.upper::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: -1px;
  width: calc(100% + 1px);
  height: 1px;
  background-color: black;
}
</style>

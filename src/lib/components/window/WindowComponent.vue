<script setup lang="ts">
import type { WindowControls } from './Controls'
import WindowButton from './WindowButton.vue'

defineProps<{
  title?: string
  controls?: WindowControls[]
}>()
</script>
<template>
  <main class="window">
    <div class="title-bar">
      <div class="flex gap-[4px] items-center">
        <slot name="title-icon"> </slot>
        <span class="title-bar-text">
          {{ title }}
        </span>
      </div>
      <div class="title-bar-controls">
        <WindowButton
          :key="control"
          v-for="control in controls"
          :aria-label="control"
          :type="control"
        ></WindowButton>
      </div>
    </div>
    <div class="window-body">
      <slot name="body"></slot>
    </div>
  </main>
</template>

<style scoped>
.window {
  background-color: var(--main-bg-color);
  padding: 3px;
  box-shadow:
    inset -1px -1px black,
    inset 1px 1px var(--main-bg-color),
    inset -2px -2px var(--border-gray),
    inset 2px 2px white;
}

.title-bar {
  background-color: var(--title-bar-blue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 18px;
}

.title-bar-controls {
  display: flex;
}

.title-bar-text {
  font-size: 11px;
  font-weight: bold;
  color: white;
  margin-left: 3px;
}
</style>

<script setup lang="ts">
import type { WindowControls } from './Controls'
import WindowButton from './WindowButton.vue'
import { useWindowController } from '@/lib/composables/useWindowController'

const {
  controls = ['Close'],
  title = 'Window',
  withController = true,
} = defineProps<{
  title?: string
  controls?: WindowControls[]
  withController?: boolean
}>()

const emit = defineEmits<{
  'click:control': [ctrl: WindowControls]
}>()

const windowId = crypto.randomUUID()

const windowController = useWindowController()

function onClick() {
  if (withController) {
    windowController.setActiveWindow(windowId)
  }
}
</script>
<template>
  <main
    @click="onClick"
    tabindex="0"
    :class="{ active: windowController.activeWindow === windowId }"
    class="window flex flex-col"
  >
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
          @click="emit('click:control', control)"
        ></WindowButton>
      </div>
    </div>
    <slot name="body"></slot>
  </main>
</template>

<style scoped>
.window {
  background-color: var(--main-bg-color);
  padding: 4px;
  box-shadow:
    inset -1px -1px black,
    inset 1px 1px var(--main-bg-color),
    inset -2px -2px var(--border-gray),
    inset 2px 2px white;
}

.window .title-bar {
  background-color: var(--title-bar-inactive);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 18px;
  margin-bottom: 1px;
}

.window.active .title-bar {
  background-color: var(--title-bar-blue);
}

.title-bar-controls {
  display: flex;
}

.title-bar-text {
  font-size: 11px;
  font-weight: bold;
  color: white;
  margin-left: 3px;
  user-select: none;
}
</style>

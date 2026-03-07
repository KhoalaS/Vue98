<script setup lang="ts">
import TaskbarGroupheader from '@/lib/components/taskbar/TaskbarGroupheader.vue'
import WindowMenubarButton from './WindowMenubarButton.vue'
import type { WindowMenubarButtonProps } from './WindowMenubarButton'

defineProps<{
  menuButtons: WindowMenubarButtonProps[]
}>()

const emit = defineEmits<{
  click: [buttonId: string]
}>()

function onMenuButtonClick(buttonId: string) {
  emit('click', buttonId)
}
</script>
<template>
  <div class="text-sm">
    <div class="flex h-6 p-0.5 items-center">
      <TaskbarGroupheader class="mr-1"></TaskbarGroupheader>
      <div class="menu-items">
        <WindowMenubarButton
          v-for="button in menuButtons"
          :key="button.id"
          v-bind="button"
          @click="onMenuButtonClick"
        ></WindowMenubarButton>
      </div>
    </div>
  </div>
</template>
<style scoped>
.menu-items {
  display: flex;
  gap: 2px;
  height: 100%;
  width: 100%;
  align-items: flex-end;
}
</style>

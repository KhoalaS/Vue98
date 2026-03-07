<script setup lang="ts">
import TaskbarGroupheader from '@/lib/components/taskbar/TaskbarGroupheader.vue'
import WindowMenubarButton from './WindowMenubarButton.vue'
</script>
<template>
  <div class="toolbars text-sm">
    <div class="flex h-6 p-0.5 items-center">
      <TaskbarGroupheader class="mr-1"></TaskbarGroupheader>
      <div class="menu-items">
        <WindowMenubarButton label="file"></WindowMenubarButton>
        <WindowMenubarButton label="edit"></WindowMenubarButton>
      </div>
    </div>
  </div>
</template>
<style scoped>
.toolbars {
  padding: 2px;
  box-sizing: border-box;
  box-shadow:
    inset -1px -1px var(--border-white),
    inset 1px 1px var(--border-gray),
    inset -2px -2px var(--border-gray),
    inset 2px 2px var(--border-white);
}

.toolbars > :not(:last-child) {
  padding-bottom: 4px;
  box-shadow:
    inset 0px -1px var(--border-white),
    inset 0px -2px var(--border-gray);
}

.menu-items {
  display: flex;
  gap: 2px;
  height: 100%;
  width: 100%;
  align-items: flex-end;
}
</style>

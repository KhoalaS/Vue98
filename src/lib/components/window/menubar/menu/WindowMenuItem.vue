<script setup lang="ts">
import type { WindowMenuItem } from './WindowMenuItem'

defineProps<{
  menuItem: WindowMenuItem
}>()
</script>
<template>
  <div role="menuitem" class="menu-item h-4.25 w-full text-sm select-none">
    <span>
      {{ menuItem.label }}
    </span>
    <span>{{ menuItem.shortCut?.label }}</span>
  </div>
</template>

<style scoped>
.menu-item {
  padding-left: 21px;
  padding-right: 19px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
}
.menu-item:hover {
  background-color: var(--select-blue);
  cursor: pointer;
  color: var(--text-select);
}
</style>

<script setup lang="ts">
import type { WindowMenuItem } from './WindowMenuItem'
import WindowMenuItemIcon from './WindowMenuItemIcon.vue'

defineProps<{
  menuItem: WindowMenuItem
}>()
</script>
<template>
  <tr role="menuitem" class="menu-item h-4.25 w-full text-sm select-none">
    <td>
      <WindowMenuItemIcon v-if="menuItem.icon" :icon="menuItem.icon"></WindowMenuItemIcon>
    </td>
    <td>
      <span>
        {{ menuItem.label }}
      </span>
    </td>
    <td>{{ menuItem.shortCut?.label ?? '' }}</td>
  </tr>
</template>

<style scoped>
.menu-item:hover {
  background-color: var(--select-blue);
  cursor: pointer;
  color: var(--text-select);
}
</style>

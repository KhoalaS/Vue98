<script setup lang="ts">
import type { WindowMenuItem } from './WindowMenuItem'

defineProps<{
  menuItem: WindowMenuItem
}>()
</script>
<template>
  <tr role="menuitem" class="menu-item h-4.25 w-full text-sm select-none">
    <td>
      {{ menuItem.label }}
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

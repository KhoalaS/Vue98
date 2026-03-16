<script setup lang="ts">
import type { WindowMenuItem } from './WindowMenuItem'
import WindowMenuItemIcon from './WindowMenuItemIcon.vue'

defineProps<{
  menuItem: WindowMenuItem
}>()
</script>
<template>
  <tr
    role="menuitem"
    class="menu-item h-4.25 w-full text-sm select-none"
    :class="{
      disabled: menuItem.disabled,
    }"
  >
    <td>
      <WindowMenuItemIcon
        class="icon"
        :class="{
          disabled: menuItem.disabled,
        }"
        v-if="menuItem.icon"
        :icon="menuItem.icon"
        :disabled="menuItem.disabled"
      ></WindowMenuItemIcon>
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
.menu-item.disabled:hover {
  color: var(--text-inactive);
}

tr.disabled {
  color: var(--text-inactive);
}
.menu-item:hover .icon:deep(img) {
  filter: invert(100%);
}

.menu-item.disabled .icon:deep(img) {
  filter: invert(53%);
}
.menu-item.disabled:hover .icon:deep(img) {
  filter: invert(53%);
}
</style>

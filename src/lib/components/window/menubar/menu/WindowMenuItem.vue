<script setup lang="ts">
import { WindowMenuItemIcons, type WindowMenuItemIcon } from './Icons'
import type { WindowMenuItem } from './WindowMenuItem'
import WindowMenuItemIconComponent from './WindowMenuItemIcon.vue'

const props = defineProps<{
  menuItem: WindowMenuItem
}>()

let icon: WindowMenuItemIcon | undefined

if (props.menuItem.icon) {
  icon = WindowMenuItemIcons[props.menuItem.icon]
}
</script>
<template>
  <tr
    role="menuitem"
    class="menu-item h-4.25 w-full text-sm select-none"
    :class="{
      disabled: menuItem.disabled,
      'simple-icon': icon?.simple,
    }"
  >
    <td>
      <div class="h-4.25 w-4.25 mr-1">
        <WindowMenuItemIconComponent
          class="icon"
          :class="{
            disabled: menuItem.disabled,
          }"
          v-if="menuItem.icon"
          :icon="menuItem.icon"
          :disabled="menuItem.disabled"
        ></WindowMenuItemIconComponent>
      </div>
    </td>
    <td>
      <span>
        {{ menuItem.label }}
      </span>
    </td>
    <td>{{ menuItem.shortCut?.label ?? '' }}</td>
    <td>
      <div class="h-4.25 w-4.25 ml-1">
        <WindowMenuItemIconComponent
          class="icon"
          :class="{
            disabled: menuItem.disabled,
          }"
          v-if="menuItem.subMenu"
          icon="caretRight"
          :disabled="menuItem.disabled"
        ></WindowMenuItemIconComponent>
      </div>
    </td>
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

.menu-item.disabled.simple-icon .icon:deep(img) {
  filter: invert(53%);
}
.menu-item.disabled.simple-icon:hover .icon:deep(img) {
  filter: invert(53%);
}
</style>

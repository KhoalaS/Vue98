<script setup lang="ts">
import type { WindowMenuGroup } from './WindowMenu'
import WindowMenuItem from './WindowMenuItem.vue'

defineProps<{
  menuItemGroups: WindowMenuGroup[]
}>()
</script>
<template>
  <div class="menu p-0.75" role="menu">
    <div class="group" :key="idx" v-for="(group, idx) in menuItemGroups">
      <WindowMenuItem
        :menu-item="item"
        :key="item.id"
        v-for="item in group.menuItems"
      ></WindowMenuItem>
    </div>
  </div>
</template>
<style scoped>
.menu {
  width: fit-content;
  background-color: var(--main-bg-color);
  box-shadow:
    inset -1px -1px var(--border-black),
    inset 1px 1px var(--main-bg-color),
    inset -2px -2px var(--border-gray),
    inset 2px 2px var(--border-white);
}

.group:not(:last-child):after {
  content: '';
  display: block;
  height: 2px;
  margin: 4px 1px;
  border-top: 1px solid var(--border-gray);
  border-bottom: 1px solid var(--border-white);
}
</style>

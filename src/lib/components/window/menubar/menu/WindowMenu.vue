<script setup lang="ts">
import { computed } from 'vue'
import type { WindowMenuGroup } from './WindowMenu'
import type { MenuRow } from './WindowMenuRow'
import WindowMenuRow from './WindowMenuRow.vue'

const props = defineProps<{
  menuItemGroups: WindowMenuGroup[]
}>()

const groupsAggregate = computed(() => {
  const rows: MenuRow[] = []
  for (const group of props.menuItemGroups) {
    for (const item of group.menuItems) {
      rows.push({
        item,
        type: 'item',
      })
    }
    rows.push({
      type: 'divider',
    })
  }

  return rows
})
</script>
<template>
  <div class="menu p-0.75 w-fit" role="menu">
    <table>
      <WindowMenuRow :key="idx" :row="row" v-for="(row, idx) in groupsAggregate"></WindowMenuRow>
    </table>
  </div>
</template>
<style scoped>
.menu {
  background-color: var(--main-bg-color);
  box-shadow:
    inset -1px -1px var(--border-black),
    inset 1px 1px var(--main-bg-color),
    inset -2px -2px var(--border-gray),
    inset 2px 2px var(--border-white);
}
</style>

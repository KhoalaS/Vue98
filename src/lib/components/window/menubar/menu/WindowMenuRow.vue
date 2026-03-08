<script setup lang="ts">
import WindowMenuItem from './WindowMenuItem.vue'
import type { MenuRow } from './WindowMenuRow'

defineProps<{ row: MenuRow }>()
</script>
<template>
  <tr aria-hidden="true" class="divider" v-if="row.type === 'divider'">
    <td colspan="2">
      <div class="content"></div>
    </td>
  </tr>
  <WindowMenuItem v-else :menu-item="row.item"></WindowMenuItem>
</template>

<style scoped>
.divider .content {
  height: 2px;
  margin: 4px 1px;
  border-top: 1px solid var(--border-gray);
  border-bottom: 1px solid var(--border-white);
}
.divider:last-child {
  display: none;
}
</style>

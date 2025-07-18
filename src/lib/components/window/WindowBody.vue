<script setup lang="ts">
import { useSlots } from 'vue'

const slots = useSlots()
</script>
<template>
  <main>
    <div v-if="slots.toolbars" class="toolbars text-sm">
      <slot name="toolbars"></slot>
    </div>
    <slot name="default"></slot>
  </main>
</template>
<style scoped>
main {
  box-sizing: border-box;
}
.toolbars {
  padding: 2px;
  box-sizing: border-box;
  box-shadow:
    inset -1px -1px white,
    inset 1px 1px var(--border-gray),
    inset -2px -2px var(--border-gray),
    inset 2px 2px white;
}

.toolbars > :not(:last-child) {
  padding-bottom: 4px;
  box-shadow:
    inset 0px -1px white,
    inset 0px -2px var(--border-gray);
}
</style>

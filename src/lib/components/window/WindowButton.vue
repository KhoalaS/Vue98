<script setup lang="ts">
import type { WindowControls } from './Controls'
import window_x from '../../assets/window_x.ico'

defineProps<{
  type: WindowControls
}>()
</script>
<template>
  <button>
    <img class="icon" v-if="type == 'Close'" :src="window_x" />
  </button>
</template>

<style scoped>
button {
  all: unset;
  cursor: pointer;
  width: 16px;
  height: 14px;
  position: relative;
  background-color: var(--main-bg-color);
  box-shadow:
    inset -1px -1px black,
    inset 1px 1px white,
    inset -2px -2px var(--border-gray);
}

button:active {
  box-shadow:
    inset -1px -1px white,
    inset 1px 1px black,
    inset -2px -2px var(--main-bg-color),
    inset 2px 2px var(--border-gray);
}

.icon {
  image-rendering: pixelated;
  width: 9px;
  height: 9px;
  position: absolute;
  top: 2px;
  left: 3px;
}

button:active > .icon {
  top: 3px;
  left: 4px;
}
</style>

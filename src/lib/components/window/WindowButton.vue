<script setup lang="ts">
import { WindowControlIcons, type WindowControls } from './Controls'

defineProps<{
  type: WindowControls
}>()
</script>
<template>
  <button>
    <img class="icon" :src="WindowControlIcons[type]" />
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

button:last-child {
  margin-left: 2px;
  margin-right: 2px;
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

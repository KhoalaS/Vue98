<script setup lang="ts">
import { SelectIcons } from './Icons'

defineProps<{
  disabled?: boolean
}>()

const emit = defineEmits<{
  click: []
}>()
</script>
<template>
  <button :disabled="disabled" @click="emit('click')">
    <img style="text-align: center" class="icon" :src="SelectIcons.CaretDown" />
  </button>
</template>

<style scoped>
button {
  all: unset;
  cursor: pointer;
  width: 16px;
  height: 17px;
  position: relative;
  background-color: var(--main-bg-color);
  box-shadow:
    inset -1px -1px black,
    inset 1px 1px var(--main-bg-color),
    inset -2px -2px var(--border-gray),
    inset 2px 2px white;
}

button:active {
  box-shadow:
    inset 1px 1px var(--border-gray),
    inset -1px -1px var(--border-gray);
}

.icon {
  image-rendering: pixelated;
  width: 9px;
  height: 9px;
  position: absolute;
  top: 4px;
  left: 4px;
}

button:active > .icon {
  top: 5px;
  left: 5px;
}
</style>

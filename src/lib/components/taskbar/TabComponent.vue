<script setup lang="ts">
import TitlebarIcon from '@components/window/TitlebarIcon.vue'
import type { TitlebarIconName } from '@components/window/TitlebarIcons'

defineProps<{
  label: string
  icon: TitlebarIconName
  active?: boolean
}>()

const emit = defineEmits<{
  click: []
}>()
</script>
<template>
  <button
    :class="{
      active,
    }"
    @click="emit('click')"
    class="task text-left"
  >
    <titlebar-icon class="icon" :icon="icon"></titlebar-icon>
    <p class="label">{{ label }}</p>
  </button>
</template>

<style scoped>
.icon {
  position: absolute;
  float: left;
  left: 2px;
  top: 3px;
}
.label {
  position: absolute;
  float: left;
  left: 23px;
  top: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 24px);
}
button {
  all: unset;
  flex-shrink: 0;
  position: relative;
  width: 90px;
  height: 22px;
  font-size: 11px;
  text-align: center;
  background-color: var(--main-bg-color);
  box-sizing: border-box;
  display: inline-block;
  box-shadow:
    inset -1px -1px black,
    inset 1px 1px white,
    inset -2px -2px var(--border-gray);
  cursor: pointer;
  user-select: none;
}
button.active {
  box-shadow:
    inset -1px -1px white,
    inset 1px 1px black,
    inset 2px 2px var(--border-gray),
    inset -2px -2px var(--main-bg-color),
    inset 0px 3px white;

  background: repeating-conic-gradient(white 0deg 90deg, var(--main-bg-color) 90deg 180deg);
  background-size: 2px 2px;
  .icon {
    top: 4px;
  }
  .label {
    top: 4px;
    font-weight: bold;
  }
}
</style>

<script setup lang="ts">
import type { WindowMenubarButtonProps } from './WindowMenubarButton'
import MnemonicLabel from '@components/common/MnemonicLabel.vue'

const props = defineProps<WindowMenubarButtonProps>()

const emit = defineEmits<{
  click: [buttonId: string]
}>()
</script>

<template>
  <div :aria-label="label" role="button" class="menu-button" @click="emit('click', props.id)">
    <slot>
      <MnemonicLabel class="label relative" :label="label"></MnemonicLabel>
    </slot>
  </div>
</template>

<style scoped>
.menu-button {
  position: relative;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% + 1px);
}

.menu-button:hover {
  cursor: pointer;
  background-color: var(--main-bg-color);
  box-shadow:
    inset 1px 1px var(--border-white),
    inset -1px -1px var(--border-gray);
}

.menu-button:active {
  cursor: pointer;
  background-color: var(--main-bg-color);
  box-shadow:
    inset 1px 1px var(--border-gray),
    inset -1px -1px var(--border-white);
}

.label {
  user-select: none;
}

.menu-button:active .label {
  top: 1px;
  left: 1px;
}
</style>

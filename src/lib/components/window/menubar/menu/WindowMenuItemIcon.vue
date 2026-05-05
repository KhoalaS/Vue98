<script setup lang="ts">
import { WindowMenuItemIcons, type WindowMenuItemIconType } from './Icons'

const props = defineProps<{ icon: WindowMenuItemIconType }>()

const _icon = WindowMenuItemIcons[props.icon]
</script>
<template>
  <div class="w-full h-full relative">
    <img
      class="absolute"
      :style="{
        imageRendering: 'pixelated',
        top: `${_icon.top}px`,
        left: `${_icon.left}px`,
      }"
      :src="_icon.dataUri"
    />
  </div>
</template>

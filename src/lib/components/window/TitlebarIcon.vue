<script setup lang="ts">
import { TitlebarIcons, type TitlebarIconName } from './TitlebarIcons'

defineProps<{
  icon: TitlebarIconName
}>()
</script>
<template>
  <img class="title-bar-icon" :src="TitlebarIcons[icon]" />
</template>

<style scoped>
.title-bar-icon {
  margin-left: 2px;
  width: 16px;
  height: 16px;
  image-rendering: pixelated;
}
</style>

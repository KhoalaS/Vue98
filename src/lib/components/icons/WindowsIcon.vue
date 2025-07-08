<script setup lang="ts">
import image from '../../assets/win98.ico'
const { size = 16 } = defineProps<{
  size?: number
}>()
</script>
<template>
  <img style="image-rendering: pixelated" :height="size" :width="size" :src="image" />
</template>

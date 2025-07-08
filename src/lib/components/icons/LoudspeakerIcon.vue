<script setup lang="ts">
import image from '../../assets/loudspeaker_rays.ico'
const { size = 24 } = defineProps<{
  size?: number
}>()
</script>
<template>
  <img style="image-rendering: pixelated" :height="size" :width="size" :src="image" />
</template>

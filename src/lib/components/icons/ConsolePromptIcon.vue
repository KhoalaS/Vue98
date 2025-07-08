<script setup lang="ts">
import image from '../../assets/console_prompt.ico'
const { size = 16 } = defineProps<{
  size?: number
}>()
</script>
<template>
  <img style="image-rendering: pixelated" :height="size" :width="size" :src="image" />
</template>

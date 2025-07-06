<script setup lang="ts">
import type { WindowControls } from './Controls'

defineProps<{
  title?: string
  controls?: WindowControls[]
}>()
</script>
<template>
  <main class="window">
    <div class="title-bar">
      <div class="title-bar-text">{{ title }}</div>
      <div class="title-bar-controls">
        <button :key="control" v-for="control in controls" :aria-label="control"></button>
      </div>
    </div>
    <div class="window-body">
      <slot name="body"></slot>
    </div>
  </main>
</template>

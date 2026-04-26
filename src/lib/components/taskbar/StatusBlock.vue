<script setup lang="ts">
import { LoudspeakerIcon } from '@components/icons'
</script>
<template>
  <div class="status-bar">
    <div class="status-bar-field flex font-ms px-2 items-center">
      <div class="flex items-center">
        <LoudspeakerIcon :size="20"></LoudspeakerIcon>
      </div>
      <p class="pl-2" style="font-family: var(--font-display)">
        <slot name="time"></slot>
      </p>
    </div>
  </div>
</template>
<style scoped>
.status-bar {
  min-width: 64px;
}
</style>

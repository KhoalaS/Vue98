<script setup lang="ts">
import LoudspeakerIcon from '../icons/LoudspeakerIcon.vue'
</script>
<template>
  <div class="status-bar">
    <div class="status-bar-field flex font-ms px-2 items-center">
      <div class="flex items-center">
        <LoudspeakerIcon :size="20"></LoudspeakerIcon>
      </div>
      <p class="pl-2" style="font-family: var(--font-display)">17: 31</p>
    </div>
  </div>
</template>
<style scoped>
.status-bar {
  min-width: 64px;
}
</style>

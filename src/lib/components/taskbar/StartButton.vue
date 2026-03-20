<script setup lang="ts">
import { WindowsIcon } from '@components/icons'
import { WButton } from '@components/button'
</script>
<template>
  <WButton id="start" class="flex items-center h-full">
    <div style="display: inline-flex; gap: 3px; margin-top: 2px">
      <WindowsIcon></WindowsIcon>
      <p class="font-bold">Start</p>
    </div>
  </WButton>
</template>
<style scoped>
#start {
  padding: 0 3px;
  min-width: 56px;
}
</style>

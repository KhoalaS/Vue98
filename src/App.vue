<script setup lang="ts">
import WindowComponent from './lib/components/window/WindowComponent.vue'
</script>

<template>
  <main>
    <button>Test</button>
    <WindowComponent title="Hello" :controls="['Minimize', 'Close']" class="w-[200px]">
      <template #body> So much space </template>
    </WindowComponent>
  </main>
</template>

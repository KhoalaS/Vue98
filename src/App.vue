<script setup lang="ts">
import { ref } from 'vue'
import ConsolePromptIcon from './lib/components/icons/ConsolePromptIcon.vue'
import ProgressbarComponent from './lib/components/progress/ProgressbarComponent.vue'
import WindowComponent from './lib/components/window/WindowComponent.vue'

const barPercent = ref(100)
</script>

<template>
  <main>
    <button>Test</button>
    <input type="text" />
    <WindowComponent title="Hello" :controls="['Minimize', 'Close']" class="w-[200px]">
      <template #title-icon>
        <ConsolePromptIcon></ConsolePromptIcon>
      </template>
      <template #body>
        <button @click="barPercent++">plus</button>
        <ProgressbarComponent v-model="barPercent"></ProgressbarComponent>
      </template>
    </WindowComponent>
    <div class="w-[50%]">
      <div class="progress-indicator segmented">
        <span class="progress-indicator-bar" style="width: 40%" />
      </div>
    </div>
  </main>
</template>

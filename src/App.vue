<script setup lang="ts">
import { ref } from 'vue'
import ConsolePromptIcon from './lib/components/icons/ConsolePromptIcon.vue'
import ProgressbarComponent from './lib/components/progress/ProgressbarComponent.vue'
import WindowComponent from './lib/components/window/WindowComponent.vue'
import TaskbarComponent from './lib/components/taskbar/TaskbarComponent.vue'
import TaskbarGroup from './lib/components/taskbar/TaskbarGroup.vue'
import TaskbarDivider from './lib/components/taskbar/TaskbarDivider.vue'
import StatusBlock from './lib/components/taskbar/StatusBlock.vue'
import StartButton from './lib/components/taskbar/StartButton.vue'
import TabComponent from './lib/components/taskbar/TabComponent.vue'

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

    <TaskbarComponent>
      <StartButton></StartButton>
      <TaskbarGroup>
        <TabComponent label="Console"></TabComponent>
      </TaskbarGroup>

      <TaskbarDivider class="ml-auto"></TaskbarDivider>
      <StatusBlock></StatusBlock>
    </TaskbarComponent>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProgressbarComponent from './lib/components/progress/ProgressbarComponent.vue'
import WindowComponent from './lib/components/window/WindowComponent.vue'
import TaskbarComponent from './lib/components/taskbar/TaskbarComponent.vue'
import TaskbarGroup from './lib/components/taskbar/TaskbarGroup.vue'
import TaskbarDivider from './lib/components/taskbar/TaskbarDivider.vue'
import StatusBlock from './lib/components/taskbar/StatusBlock.vue'
import StartButton from './lib/components/taskbar/StartButton.vue'
import TabComponent from './lib/components/taskbar/TabComponent.vue'
import WButton from './lib/components/WButton.vue'
import WindowButton from './lib/components/window/WindowButton.vue'
import TitlebarIcon from './lib/components/window/TitlebarIcon.vue'
import WindowBody from './lib/components/window/WindowBody.vue'
import TaskbarGroupheader from './lib/components/taskbar/TaskbarGroupheader.vue'

const barPercent = ref(100)
</script>

<template>
  <main style="padding: 12px; background-color: var(--desktop-bg-color); height: 100%">
    <button>Test</button>
    <input type="text" />
    <WindowComponent
      title="1 Properties"
      :controls="['Minimize', 'Maximize', 'Close']"
      class="w-[200px]"
    >
      <template #title-icon>
        <TitlebarIcon icon="document"></TitlebarIcon>
      </template>
      <template #body>
        <WindowBody>
          <template #toolbars>
            <div class="flex h-[24px] p-[2px] items-center">
              <TaskbarGroupheader></TaskbarGroupheader>
              <div>1s</div>
            </div>
            <div class="flex h-[24px] p-[2px] items-center">
              <TaskbarGroupheader></TaskbarGroupheader>
              <div>Edit</div>
            </div>
          </template>
          <div>
            <button @click="barPercent++">plus</button>
            <ProgressbarComponent v-model="barPercent"></ProgressbarComponent>
            <WindowButton type="Close"></WindowButton></div
        ></WindowBody>
      </template>
    </WindowComponent>

    <TaskbarComponent class="fixed bottom-0 left-0">
      <StartButton></StartButton>
      <TaskbarGroup>
        <TabComponent label="Console"></TabComponent>
      </TaskbarGroup>

      <TaskbarDivider class="ml-auto"></TaskbarDivider>
      <StatusBlock></StatusBlock>
    </TaskbarComponent>
    <WButton>OK</WButton>
  </main>
</template>

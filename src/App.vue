<script setup lang="ts">
import { ref } from 'vue'
import ProgressbarComponent from '@/lib/components/progress/ProgressbarComponent.vue'
import WindowComponent from '@/lib/components/window/WindowComponent.vue'
import TaskbarComponent from '@/lib/components/taskbar/TaskbarComponent.vue'
import TaskbarGroup from '@/lib/components/taskbar/TaskbarGroup.vue'
import TaskbarDivider from '@/lib/components/taskbar/TaskbarDivider.vue'
import StatusBlock from '@/lib/components/taskbar/StatusBlock.vue'
import StartButton from '@/lib/components/taskbar/StartButton.vue'
import TabComponent from '@/lib/components/taskbar/TabComponent.vue'
import WButton from '@/lib/components/WButton.vue'
import WindowButton from '@/lib/components/window/WindowButton.vue'
import TitlebarIcon from '@/lib/components/window/TitlebarIcon.vue'
import WindowBody from '@/lib/components/window/WindowBody.vue'
import WAutocomplete from '@/lib/components/select/WAutocomplete.vue'
import WSelectNative from '@/lib/components/select/WSelectNative.vue'
import WindowMenubar from '@/lib/components/window/menubar/WindowMenubar.vue'
import type { WindowMenubarButtonProps } from '@/lib/components/window/menubar/WindowMenubarButton'
import WindowMenu from './lib/components/window/menubar/menu/WindowMenu.vue'
import type { WindowMenuGroup } from './lib/components/window/menubar/menu/WindowMenu'
import WInputV2 from './lib/components/input/WInputV2.vue'

const barPercent = ref(30)
const options = Array(20)
  .fill(null)
  .map((_, idx) => {
    return {
      id: 'dummy' + idx,
      name: 'Dummy' + idx,
    }
  })

const menuButtons: WindowMenubarButtonProps[] = [
  {
    id: 'file',
    label: 'file',
  },
  {
    id: 'edit',
    label: 'edit',
  },
  {
    id: 'view',
    label: 'view',
  },
  {
    id: 'go',
    label: 'go',
  },
  {
    id: 'help',
    label: 'help',
  },
]

const menuItemGroups: WindowMenuGroup[] = [
  {
    menuItems: [
      {
        id: 'a',
        label: 'Paste Shortcut',
      },
    ],
  },
  {
    menuItems: [
      {
        id: 'undo',
        label: 'Undo',
        shortCut: {
          combination: 'ctrl,z',
          label: 'Ctrl+Z',
        },
        icon: 'circle',
      },
      {
        id: 'cut',
        label: 'Cut',
        shortCut: {
          combination: 'ctrl,x',
          label: 'Ctrl+X',
        },
        icon: 'check',
        disabled: true,
        subMenu: {
          menuItems: [],
        },
      },
    ],
  },
]
</script>

<template>
  <main style="padding: 12px; background-color: var(--desktop-bg-color); height: 100%">
    <WindowMenu :menu-item-groups="menuItemGroups"></WindowMenu>
    <WindowComponent
      title="1 Properties"
      :controls="['Minimize', 'Maximize', 'Close']"
      class="w-50"
    >
      <template #title-icon>
        <TitlebarIcon icon="document"></TitlebarIcon>
      </template>
      <template #body>
        <WindowBody>
          <template #toolbars>
            <WindowMenubar :menu-buttons="menuButtons"></WindowMenubar>
            <WindowMenubar :menu-buttons="menuButtons"></WindowMenubar>
          </template>
          <div>
            <ProgressbarComponent
              progress-label="Progress"
              v-model="barPercent"
            ></ProgressbarComponent>
            <WindowButton type="Close"></WindowButton>
          </div>
          <label class="text-sm" for="stuff">Stuff</label>
          <WInputV2 id="stuff"></WInputV2>
          <WAutocomplete :options="options"></WAutocomplete>
          <WSelectNative :options="options"></WSelectNative>
          <WButton>OK</WButton>
        </WindowBody>
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
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ProgressbarComponent } from '@components/progress'
import {
  WindowComponent,
  WindowButton,
  TitlebarIcon,
  WindowBody,
  WindowMenubar,
  WindowMenu,
  type WindowMenubarButtonProps,
  type WindowMenuGroup,
} from '@components/window'
import {
  TaskbarComponent,
  TaskbarGroup,
  TabComponent,
  TaskbarDivider,
  StatusBlock,
  StartButton,
} from '@components/taskbar'
import { WButton } from '@components/button'
import { WAutocomplete, WSelectNative } from '@components/select'
import { WInputV2 } from '@components/input'

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
        disabled: true,
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
        icon: 'folder',
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

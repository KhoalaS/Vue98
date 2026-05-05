<script setup>
import TaskbarComponent from './TaskbarComponent.vue'
import TaskbarGroupheader from './TaskbarGroupheader.vue'
import TaskbarDivider from './TaskbarDivider.vue'

</script>

# Taskbar

You can compose your own taskbar inside the `TaskbarComponent`. The demo show usage of the `TaskbarDivider` and `TaskbarGroupheader` components inside the taskbar.

## Demo

<TaskbarComponent>
  <TaskbarDivider></TaskbarDivider>
  <TaskbarGroupheader></TaskbarGroupheader>
  <div>Some content</div>
  <TaskbarDivider></TaskbarDivider>
</TaskbarComponent>

## Usage

```vue
<script setup>
import { TaskbarComponent, TaskbarGroupheader, TaskbarDivider } from 'vue-98'
</script>

<template>
  <TaskbarComponent>
    <TaskbarDivider></TaskbarDivider>
    <TaskbarGroupheader></TaskbarGroupheader>
    <div>Some content</div>
    <TaskbarDivider></TaskbarDivider>
  </TaskbarComponent>
</template>
```

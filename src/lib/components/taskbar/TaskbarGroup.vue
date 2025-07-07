<script setup lang="ts">
import TaskbarDivider from './TaskbarDivider.vue'
import TaskbarGroupheader from './TaskbarGroupheader.vue'
</script>
<template>
  <TaskbarDivider></TaskbarDivider>
  <TaskbarGroupheader></TaskbarGroupheader>
  <slot name="default"></slot>
  <TaskbarDivider></TaskbarDivider>
</template>

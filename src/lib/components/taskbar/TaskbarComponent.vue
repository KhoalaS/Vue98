<script setup lang="ts"></script>
<template>
  <main class="taskbar flex w-full gap-1 fixed p-1 bottom-0 left-0 h-[36px] bg-[silver]">
    <slot name="default"></slot>
  </main>
</template>
<style scoped>
.taskbar {
  box-shadow:
    inset 0px 1px #fff,
    inset 0px 2px #dfdfdf;
}
</style>

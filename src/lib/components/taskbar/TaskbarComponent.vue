<script setup lang="ts"></script>
<template>
  <main class="taskbar flex w-full gap-1 fixed bottom-0 left-0 h-[28px] bg-[silver]">
    <slot name="default"></slot>
  </main>
</template>
<style scoped>
.taskbar {
  padding: 2px;
  padding-top: 3px;
  border-top: 1px solid var(--main-bg-color);
  box-shadow: inset 0px 1px #fff;
  box-sizing: border-box;
}
</style>

<script setup lang="ts"></script>
<template>
  <div class="flex items-center h-full">
    <div class="thingy h-full w-[3px]"></div>
  </div>
</template>
<style scoped>
.thingy {
  background-color: var(--main-bg-color);
  box-shadow:
    inset -1px -1px var(--border-gray),
    inset 1px 1px white;
}
.thingy:hover {
  cursor: ew-resize;
}

.thingy:active {
  cursor: col-resize;
}
</style>

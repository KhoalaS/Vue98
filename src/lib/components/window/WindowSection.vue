<template>
  <div class="section">
    <slot></slot>
  </div>
</template>
<style scoped>
.section {
  box-sizing: border-box;
  box-shadow:
    inset -1px -1px white,
    inset 1px 1px var(--border-gray),
    inset -2px -2px var(--border-gray),
    inset 2px 2px white;
}
</style>

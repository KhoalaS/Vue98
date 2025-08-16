<script setup lang="ts">
const model = defineModel<string | number | boolean>({
  required: false,
  default: '',
})
</script>
<template>
  <div class="input">
    <input class="text-sm px-0.5 grow" v-model="model" />
    <slot name="default"></slot>
  </div>
</template>
<style scoped="scoped">
.input {
  display: flex;
  padding: 2px;
  box-shadow:
    inset -1px -1px white,
    inset 1px 1px var(--border-gray),
    inset -2px -2px var(--main-bg-color),
    inset 2px 2px black;
}
input {
  background-color: white;
  outline: none;
}
</style>

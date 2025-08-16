<script setup lang="ts">
const model = defineModel<string | number | boolean>({
  required: false,
  default: '',
})
</script>
<template>
  <input class="text-sm" v-model="model" />
</template>
<style scoped="scoped">
input {
  background-color: white;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  outline: none;
  box-shadow:
    inset -1px -1px white,
    inset 1px 1px var(--border-gray),
    inset -2px -2px var(--main-bg-color),
    inset 2px 2px black;
}
</style>

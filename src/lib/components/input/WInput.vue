<script setup lang="ts">
import { useTemplateRef } from 'vue'

defineProps<{
  id?: string
}>()

const inputRef = useTemplateRef('inputRef')

const model = defineModel<string | number | boolean>({
  required: false,
  default: '',
})

defineExpose({
  inputRef,
})
</script>
<template>
  <div class="input">
    <input ref="inputRef" :id="id" class="text-sm px-0.5 grow" v-model="model" />
    <slot name="right-icon"></slot>
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

<script setup lang="ts">
import { useTemplateRef, watch } from 'vue'

const props = defineProps<{
  value?: string | number | boolean
  initial?: string | number | boolean
  id?: string
}>()

const inputRef = useTemplateRef('inputRef')

const model = defineModel<string | number | boolean>({
  required: false,
  default: '',
})

const emit = defineEmits<{
  (e: 'update', value: string | number | boolean): void
}>()

watch(model, (value) => {
  emit('update', value)
})

if (props.initial != undefined) {
  model.value = props.initial
}

watch(
  () => props.value,
  (newVal) => {
    if (newVal !== undefined && newVal !== model.value) {
      model.value = newVal
    }
  },
)

defineExpose({
  inputRef,
})
</script>
<template>
  <div class="input">
    <input
      v-bind="$attrs"
      :id="id"
      ref="inputRef"
      class="text-sm px-0.5 grow w-full"
      v-model="model"
    />
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

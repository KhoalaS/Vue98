<script setup lang="ts">
defineProps<{
  label: string
}>()

const emit = defineEmits<{
  click: []
}>()
</script>
<template>
  <button
    @click="emit('click')"
    class="task flex items-center gap-1 w-[160px] text-left text-[14px]"
  >
    <div class="flex items-center">
      <slot name="icon"> </slot>
    </div>
    {{ label }}
  </button>
</template>

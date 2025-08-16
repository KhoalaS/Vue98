<script setup lang="ts" generic="T extends { id: string; name: string }">
import { ref } from 'vue'
import WInput from '../input/WInput.vue'
import WSelectButton from './WSelectButton.vue'

defineProps<{
  options?: T[]
  noneOption?: T
}>()

const model = defineModel<T>({
  required: false,
  default: {
    id: 'NONE',
    name: 'None',
  },
})

function handleSelect(option: T) {
  model.value = option
}

const showSelection = ref(false)
</script>
<template>
  <div class="flex flex-col">
    <WInput v-model="model.name">
      <WSelectButton @click="showSelection = !showSelection"></WSelectButton>
    </WInput>
    <div v-if="showSelection" class="max-h-[165px] w-full bg-white border-[1px] border-black">
      <option v-if="noneOption" @click="handleSelect(noneOption)" :value="noneOption.id">
        {{ noneOption.name }}
      </option>
      <option
        @click="handleSelect(value)"
        :key="value.id"
        v-for="value in options ?? []"
        :value="value.id"
      >
        {{ value.name }}
      </option>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T extends { id: string; name: string }">
import { ref, useTemplateRef } from 'vue'
import WInput from '../input/WInput.vue'
import WSelectButton from './WSelectButton.vue'

defineProps<{
  options?: T[]
  noneOption?: T
}>()

const showSelection = ref(false)

const winput = useTemplateRef('winput')

const model = defineModel<T>({
  required: false,
  default: {
    id: 'NONE',
    name: 'None',
  },
})

function handleSelect(option: T) {
  model.value = option
  showSelection.value = false
}

function handleClickSelection() {
  showSelection.value = !showSelection.value
  if (showSelection.value) {
    winput.value?.inputRef?.select()
  }
}
</script>
<template>
  <div class="flex flex-col relative">
    <WInput ref="winput" v-model="model.name">
      <template #right-icon>
        <WSelectButton :disabled="!options" @click="handleClickSelection"></WSelectButton>
      </template>
    </WInput>
    <div
      v-if="showSelection"
      class="absolute overflow-y-auto top-[21px] z-10 max-h-[167px] w-full bg-white border-[1px] border-black"
    >
      <option
        class="text-sm"
        :class="{ selected: noneOption.id == model.id }"
        v-if="noneOption"
        @click="handleSelect(noneOption)"
        :value="noneOption.id"
      >
        {{ noneOption.name }}
      </option>
      <option
        class="text-sm"
        :class="{ selected: value.id == model.id }"
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
<style scoped>
option {
  line-height: 15px;
  cursor: default;
}

option:hover {
  background-color: var(--select-blue);
  color: white;
}

.selected {
  background-color: var(--select-blue);
  color: white;
}
</style>

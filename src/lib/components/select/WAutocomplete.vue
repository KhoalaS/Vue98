<script setup lang="ts" generic="T extends { id: string; name: string }">
import { ref, useTemplateRef } from 'vue'
import WInput from '../input/WInput.vue'
import WSelectButton from './WSelectButton.vue'
import { onKeyStroke } from '@vueuse/core'

const props = defineProps<{
  options?: T[]
  noneOption?: T
}>()

const showSelection = ref(false)
const listId = crypto.randomUUID()
const winput = useTemplateRef('winput')

const model = defineModel<T>({
  required: false,
  default: {
    id: 'NONE',
    name: 'None',
  },
})

onKeyStroke(['ArrowDown', 'ArrowUp'], (e) => {
  if (!showSelection.value || props.options == undefined) {
    return
  }

  e.preventDefault()

  let currentIndex = props.options.findIndex((option) => option.id == model.value.id)
  if (currentIndex == undefined || currentIndex == -1) {
    currentIndex = -1
  }

  const direction = e.key == 'ArrowDown' ? 1 : -1

  const nextIndex = currentIndex + 1 * direction

  if (nextIndex >= props.options.length) {
    return
  }

  if (nextIndex < 0) {
    return
  }

  model.value = props.options[nextIndex]
  const nextOption = document.querySelector(`[id="${listId}"] > option[value="${model.value.id}"]`)
  if (nextOption) {
    nextOption.scrollIntoView({
      block: 'nearest',
      inline: 'nearest',
    })
  }
})

function handleSelect(option: T) {
  model.value = option
  showSelection.value = false
}

function handleClickSelection() {
  showSelection.value = !showSelection.value
  if (showSelection.value) {
    winput.value?.inputRef?.select()

    const optionElem = document.querySelector(
      `[id="${listId}"] > option[value="${model.value.id}"]`,
    )
    if (optionElem) {
      optionElem.scrollIntoView({
        block: 'nearest',
        inline: 'nearest',
      })
    }
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
      :id="listId"
      role="combobox"
      v-show="showSelection"
      class="absolute overflow-y-auto top-[21px] z-10 max-h-[167px] w-full bg-white border-[1px] border-black"
    >
      <option
        class="text-sm px-0.5"
        :aria-selected="noneOption.id == model.id"
        :class="{ selected: noneOption.id == model.id }"
        v-if="noneOption"
        @click="handleSelect(noneOption)"
        :value="noneOption.id"
      >
        {{ noneOption.name }}
      </option>
      <option
        :aria-selected="value.id == model.id"
        class="text-sm px-0.5"
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
  user-select: none;
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

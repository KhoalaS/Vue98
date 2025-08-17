<script setup lang="ts" generic="T extends { id: string; name: string }">
import { ref } from 'vue'
import { onKeyStroke } from '@vueuse/core'

const props = defineProps<{
  options?: T[]
  noneOption?: T
}>()

const showSelection = ref(false)
const listId = crypto.randomUUID()

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
</script>
<template>
  <div class="select text-sm">
    <select
      :id="listId"
      role="combobox"
      class="overflow-y-auto top-[21px] z-10 max-h-[167px] w-full bg-white border-[1px] border-black"
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
    </select>
  </div>
</template>
<style scoped>
select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 16px 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;

  outline: none;
}

.select {
  width: 100%;
  min-width: 15ch;
  padding: 2px 4px;
  padding-right: 2px;
  cursor: pointer;
  background-color: white;
  display: grid;
  grid-template-areas: 'select';
  align-items: center;

  box-shadow:
    inset -1px -1px white,
    inset 1px 1px var(--border-gray),
    inset -2px -2px var(--main-bg-color),
    inset 2px 2px black;
}

.select::after {
  content: '';
  image-rendering: pixelated;
  justify-self: end;

  width: 16px;
  height: 17px;
  position: relative;
  background-color: var(--main-bg-color);
  background-repeat: no-repeat;
  background-position: left 4px top 4px;

  box-shadow:
    inset -1px -1px black,
    inset 1px 1px var(--main-bg-color),
    inset -2px -2px var(--border-gray),
    inset 2px 2px white;

  background-image: url('data:image/ico;base64,AAABAAEACQkCAAEAAQB4AAAAFgAAACgAAAAJAAAAEgAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+AAAD/gAAA/4AAAO+AAADHgAAAg4AAAAGAAAD/gAAA/4AAAA==');
}

.select:active::after {
  background-position: left 5px top 5px;
  box-shadow:
    inset 1px 1px var(--border-gray),
    inset -1px -1px var(--border-gray);
}

select,
.select:after {
  grid-area: select;
}

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

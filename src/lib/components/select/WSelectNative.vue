<script setup lang="ts" generic="T extends { id: string; name: string }">
const props = defineProps<{
  options?: T[]
  noneOption?: T
  initial?: T
}>()

const model = defineModel<T>({
  required: false,
  default: {
    id: 'NONE',
    name: 'None',
  },
})

if (props.initial != undefined) {
  model.value = props.initial
}
</script>
<template>
  <div class="select text-sm">
    <select v-model="model">
      <option v-if="noneOption" :value="noneOption">
        {{ noneOption.name }}
      </option>
      <option :key="value.id" v-for="value in options ?? []" :value="value">
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
  pointer-events: none;
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

<script setup lang="ts">
const emit = defineEmits<{
  click: []
}>()
</script>
<template>
  <button @click="emit('click')">
    <span class="label">
      <slot name="default"></slot>
    </span>
    <div class="dash top"></div>
    <div class="dash left"></div>
    <div class="dash right"></div>
    <div class="dash bottom"></div>
  </button>
</template>

<style scoped>
.dash {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  inset: 4px;
}

button:focus > .dash {
  display: block;
}

button:active > .label {
  position: relative;
  top: 1px;
  left: 1px;
}
.dash.top::before {
  box-sizing: border-box;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-image: repeating-linear-gradient(
    to right,
    transparent 0px,
    transparent 1px,
    black 1px,
    black 2px
  );
}
.dash.left::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 1px;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 1px,
    black 1px,
    black 2px
  );
}
.dash.right::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 1px;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 1px,
    black 1px,
    black 2px
  );
}

.dash.bottom::before {
  box-sizing: border-box;
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-image: repeating-linear-gradient(
    to right,
    transparent 0px,
    transparent 1px,
    black 1px,
    black 2px
  );
}

button {
  all: unset;
  position: relative;
  min-width: 75px;
  height: 23px;
  font-size: 11px;
  text-align: center;
  background-color: var(--main-bg-color);
  box-sizing: border-box;
  display: inline-block;
  box-shadow:
    inset -1px -1px black,
    inset 0px 1px white,
    inset 1px 0px white,
    inset -2px -2px var(--border-gray);
  cursor: pointer;
}

button:active {
  box-shadow:
    inset 1px 1px black,
    inset -1px -1px black,
    inset 2px 2px var(--border-gray),
    inset -2px -2px var(--border-gray);
}

button:focus:not(:active) {
  box-shadow:
    inset 1px 1px black,
    inset -2px -2px black,
    inset 2px 2px white,
    inset -3px -3px var(--border-gray);
}
</style>

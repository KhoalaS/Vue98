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
button:active > .dash {
  display: block;
}

button:active > .label {
  position: relative;
  top: 1px;
  left: 1px;
}

.nudge {
}

.dash.right {
  inset: 4px 3px 4px 4px;
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

.dash.bottom {
  inset: 4px 4px 3px 4px;
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
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  display: inline-block;
  box-shadow:
    inset 0px 1px white,
    inset 1px 0px white,
    inset -1px -1px var(--border-gray);
  cursor: pointer;
}

button:active {
  padding-top: 1px;
  box-shadow:
    inset 0px 1px black,
    inset 1px 0px black,
    inset 0px 2px var(--border-gray),
    inset 2px 0px var(--border-gray),
    inset 2px 0px var(--border-gray),
    inset -1px -1px var(--border-gray);
}
</style>

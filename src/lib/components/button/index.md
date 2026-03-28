<script setup lang="ts">
import WButton from './WButton.vue'
</script>

# WButton

## Demo

<div class="flex flex-row gap-2 justify-center">
    <WButton>Hello</WButton>
    <WButton :disabled="true" >Disabled</WButton>
</div>

## Usage

```vue
<script setup>
import { WButton } from "vue-98"
</setup>

<template>
    <WButton>Hello</WButton>
    <WButton :disabled="true" >Disabled</WButton>
</template>
```

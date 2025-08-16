<script setup lang="ts">
import { ref } from 'vue'
import WInput from '../input/WInput.vue'
import WSelectButton from './WSelectButton.vue'

const showSelection = ref(false)
</script>
<template>
  <div class="flex flex-col">
    <WInput>
      <WSelectButton @click="showSelection = !showSelection"></WSelectButton>
    </WInput>
    <div v-if="showSelection" class="h-12 w-full bg-white border-[1px] border-black"></div>
  </div>
</template>

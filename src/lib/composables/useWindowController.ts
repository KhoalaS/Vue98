import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useWindowController = defineStore('tabControllerStore', () => {
  const activeWindow = ref<string | undefined>()

  function setActiveWindow(windowId: string) {
    activeWindow.value = windowId
    console.log(activeWindow.value)
  }

  return {
    setActiveWindow,
    activeWindow: computed(() => activeWindow.value),
  }
})

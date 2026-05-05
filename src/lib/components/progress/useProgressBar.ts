import { useElementSize } from '@vueuse/core'
import { computed, type ModelRef, type ShallowRef } from 'vue'

export function useProgressBar(
  progressBarRef: Readonly<ShallowRef<HTMLDivElement | null>>,
  model: ModelRef<number>,
) {
  const MAXIMUM_PROGRESS_VALUE = 100

  const { width } = useElementSize(progressBarRef)

  const barCount = computed(() => {
    const progress = Math.floor(width.value * (model.value / MAXIMUM_PROGRESS_VALUE))
    return Math.floor(progress / 10) + 1
  })
  const labelId = crypto.randomUUID()

  return {
    model,
    barCount,
    labelId,
    max: MAXIMUM_PROGRESS_VALUE,
  }
}

import type { WindowMenuItemIconType } from './Icons'

export type WindowMenuItem = {
  id: string
  label: string
  shortCut?: WindowMenuItemShortCut
  icon?: WindowMenuItemIconType
}

export type WindowMenuItemShortCut = {
  combination: string
  label: string
}

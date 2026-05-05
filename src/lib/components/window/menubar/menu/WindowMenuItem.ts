import type { WindowMenuItemIconType } from './Icons'
import type { WindowMenuGroup } from './WindowMenu'

export type WindowMenuItem = {
  id: string
  label: string
  shortCut?: WindowMenuItemShortCut
  icon?: WindowMenuItemIconType
  disabled?: boolean
  subMenu?: WindowMenuGroup
}

export type WindowMenuItemShortCut = {
  combination: string
  label: string
}

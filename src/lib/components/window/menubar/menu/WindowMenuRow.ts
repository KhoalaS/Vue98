import type { WindowMenuItem } from './WindowMenuItem'

export type MenuItemRow = {
  type: 'item'
  item: WindowMenuItem
}

export type MenuGroupDividerRow = {
  type: 'divider'
}

export type MenuRow = MenuItemRow | MenuGroupDividerRow

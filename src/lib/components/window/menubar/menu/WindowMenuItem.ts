export type WindowMenuItem = {
  id: string
  label: string
  shortCut?: WindowMenuItemShortCut
}

export type WindowMenuItemShortCut = {
  combination: string
  label: string
}

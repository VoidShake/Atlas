import { Permission } from '~~/graphql/generated'

export interface MenuButton {
   text: string
   permission?: Permission
   click: () => unknown | Promise<unknown>
}

export interface MenuOptions {
   title?: string
   buttons?: MenuButton[]
}

export interface MenuContext {
   options: MenuOptions
   x: number
   y: number
}

export const useMenu = () => useState<MenuContext | null>('menu', () => null)

export function closeMenu() {
   const menu = useMenu()
   menu.value = null
}

export function openMenu(e: MouseEvent, options: MenuOptions) {
   const menu = useMenu()
   menu.value = {
      x: e.clientX,
      y: e.clientY,
      options,
   }
}

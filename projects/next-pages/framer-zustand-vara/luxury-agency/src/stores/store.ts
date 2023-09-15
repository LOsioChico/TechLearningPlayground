import { create } from 'zustand'

interface SidebarMenuStore {
  isOpen: boolean
  close: () => void
  open: () => void
  toggle: () => void
}

export const useSidebarMenuStore = create<SidebarMenuStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))

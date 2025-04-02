import { create } from 'zustand'

const useSidebarStore = create((set) => ({
	isSidebarState: false,
	setSidebarState: () => set((previous) => ({ isSidebarState: state })),
}))

export default useSidebarStore
// SidebarFlowStore.ts
import { create } from 'zustand';
import { DBFlowSection } from '@/components/database/DBtypes';

interface SidebarFlowState {
  SideBarSections: DBFlowSection[];
  currentSideBaSectionIndex: number | null;
  setSideBarSections: (sections: DBFlowSection[]) => void;
  setCurrentSideBarSectionIndex: (index: number) => void;
  // goToNextSideBarSection: () => void;
}

export const SidebarFlowStore = create<SidebarFlowState>((set, get) => ({
  SideBarSections: [],
  currentSideBaSectionIndex: null,
  setSideBarSections: (SideBarSections: DBFlowSection[]) =>
    set({ SideBarSections }),
  setCurrentSideBarSectionIndex: (index: number) =>
    set({ currentSideBaSectionIndex: index }),
  // goToNextSideBarSection: () => {
  //   const state = get();
  //   if (state.currentSideBaSectionIndex < state.SideBarSections.length - 1) {
  //     set({ currentSideBaSectionIndex: state.currentSideBaSectionIndex + 1 });
  //   }
  // },
}));

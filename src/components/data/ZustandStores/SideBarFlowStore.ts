// SidebarFlowStore.ts
import { create } from 'zustand';
import { FlowSection } from '../MainFlow/flow';

interface SidebarFlowState {
  SideBarSections: FlowSection[];
  currentSideBaSectionIndex: number;
  setSideBarSections: (sections: FlowSection[]) => void;
  setCurrentSideBarSectionIndex: (index: number) => void;
  goToNextSideBarSection: () => void;
}

export const SidebarFlowStore = create<SidebarFlowState>((set, get) => ({
  SideBarSections: [],
  currentSideBaSectionIndex: 0,
  setSideBarSections: (SideBarSections: FlowSection[]) =>
    set({ SideBarSections }),
  setCurrentSideBarSectionIndex: (index: number) =>
    set({ currentSideBaSectionIndex: index }),
  goToNextSideBarSection: () => {
    const state = get();
    if (state.currentSideBaSectionIndex < state.SideBarSections.length - 1) {
      set({ currentSideBaSectionIndex: state.currentSideBaSectionIndex + 1 });
    }
  },
}));

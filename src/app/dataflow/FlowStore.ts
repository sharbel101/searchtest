import { create } from 'zustand';

import { FieldType, FlowSection, FormField } from './flow';

interface FlowState {
  currentSectionIndex: number;
  currentFieldIndex: number;
  sections: FlowSection[];
  flowControllers: { [key: string]: any };

  setSections: (sections: FlowSection[]) => void;
  incrementField: () => void;
  incrementSection: () => void;
  resetFieldIndex: () => void;
  getCurrentSection: () => FlowSection | null;
  getCurrentField: () => FormField | null;
  clearController: (id: string) => void;
  setController: (id: string, controller: any) => void;
  getController: (id: string) => any;
}

export const useFlowStore = create<FlowState>((set, get) => ({
  currentSectionIndex: 0,
  currentFieldIndex: 0,
  sections: [],
  flowControllers: {},

  setSections: (sections) => set({ sections }),
  incrementField: () =>
    set((state) => ({ currentFieldIndex: state.currentFieldIndex + 1 })),
  incrementSection: () =>
    set((state) => ({ currentSectionIndex: state.currentSectionIndex + 1 })),
  resetFieldIndex: () => set({ currentFieldIndex: 0 }),

  getCurrentSection: () => {
    const { sections, currentSectionIndex } = get();
    return sections[currentSectionIndex] || null;
  },
  getCurrentField: () => {
    const section = get().getCurrentSection();
    if (!section) return null;
    const fields = Object.values(section.fields);
    return fields[get().currentFieldIndex] || null;
  },

  clearController: (id) =>
    set((state) => {
      const newControllers = { ...state.flowControllers };
      delete newControllers[id];
      return { flowControllers: newControllers };
    }),

  setController: (id, controller) =>
    set((state) => ({
      flowControllers: { ...state.flowControllers, [id]: controller },
    })),

  getController: (id) => get().flowControllers[id],
}));

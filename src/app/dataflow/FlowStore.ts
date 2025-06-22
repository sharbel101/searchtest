import { create } from 'zustand';
import { FieldType, FlowSection, FormField } from './flow';
import { investmentStageFlow, QuestionNode } from './flowInjection';

export type TypeSubFlow = {
  [key: string]: QuestionNode;
};

interface FlowState {
  currentSectionIndex: number;
  currentFieldIndex: number;
  sections: FlowSection[];
  flowControllers: { [key: string]: any };

  setSections: (sections: FlowSection[]) => void;
  incrementField: () => void;
  incrementSection: () => void;
  resetFieldIndex: () => void;
  setSectionOpened: (index: number) => void;

  getCurrentSection: () => FlowSection | null;
  getCurrentField: () => FormField | null;

  currentSubFlow: string;
  setSubFlow: (subFlow: string) => void;

  currentSubFlowFieldIndex: number;
  getCurrentSubFlowFields: (currentSubFlow: string) => QuestionNode[] | null;
  incrementSubFlowField: () => void;

  getNextSubFlowId: (answer: string) => string | null;
  getSetStage: (answer: string) => string | null;
}

export const useFlowStore = create<FlowState>((set, get) => ({
  currentSectionIndex: 0,
  currentFieldIndex: 0,
  sections: [],
  flowControllers: {},

  currentSubFlow: '',
  currentSubFlowFieldIndex: 0,

  setSections: (sections) => set({ sections }),
  incrementField: () =>
    set((state) => ({ currentFieldIndex: state.currentFieldIndex + 1 })),
  incrementSection: () =>
    set((state) => ({
      currentSectionIndex: state.currentSectionIndex + 1,
    })),
  resetFieldIndex: () => set({ currentFieldIndex: 0 }),

  setSectionOpened: (index) =>
    set((state) => {
      const updated = [...state.sections];
      if (updated[index]) {
        updated[index] = { ...updated[index], opened: true };
      }
      return { sections: updated };
    }),

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

  getCurrentSubFlowFields: (subFlowName: string) => {
    const subFlows: Record<string, Record<string, QuestionNode>> = {
      investmentStageFlow,
    };

    const flow = subFlows[subFlowName];

    if (!flow) {
      console.warn(`Subflow "${subFlowName}" not found.`);
      return [];
    }

    return Object.values(flow);
  },

  incrementSubFlowField: () =>
    set((state) => ({
      currentSubFlowFieldIndex: state.currentSubFlowFieldIndex + 1,
    })),

  getNextSubFlowId: (answer: string) => {
    // Placeholder logic, replace with your actual logic
    // Example: return next subflow id based on answer
    return null;
  },

  getSetStage: (answer: string) => {
    // Placeholder logic, replace with your actual logic
    // Example: return stage based on answer
    return null;
  },

  setSubFlow: (subFlow: string) => {
    set({ currentSubFlow: subFlow, currentSubFlowFieldIndex: 0 });
  },
}));

import { create } from 'zustand';
import { FlowSection, FormField } from '../../../data/MainFlow/flow';

interface FlowState {
  //for the main flow
  currentSectionIndex: number;
  currentFieldIndex: number;
  sections: FlowSection[];

  setSections: (sections: FlowSection[]) => void;
  incrementField: () => void;
  incrementSection: () => void;
  resetFieldIndex: () => void;
  advanceToNextSection: () => void;

  getCurrentSection: () => FlowSection | null;
  getCurrentField: () => FormField | null;

  currentNodeId: string;
  stage: string | null;

  setCurrentNodeId: (id: string) => void;
  setStage: (stage: string) => void;

  // for injected flows that have the same structure as the main flow ( Department, Financial, Marketing )
  currentSubFlowSectionIndex: number;
  currentSubFlowFieldIndex: number;
  SubFlowSections: FlowSection[];

  setSubFlowSections: (sections: FlowSection[]) => void;
  incrementSubFlowField: () => void;
  incrementSubFlowSection: () => void;
  resetSubFlowFieldIndex: () => void;
  advanceToNextSubFlowSection: () => void;

  getCurrentSubFlowSection: () => FlowSection | null;
  getCurrentSubFlowField: () => FormField | null;

  // for injected chart forms
  currentFlowController: any;
  isInFlowFunc: boolean;
  questionBody: string;

  setCurrentFlowController: (controller: any) => void;
  setIsInFlowFunc: (val: boolean) => void;
  setQuestionBody: (text: string) => void;
}

export const useFlowStore = create<FlowState>((set, get) => ({
  currentSectionIndex: 0,
  currentFieldIndex: 0,
  sections: [],

  setSections: (sections) => set({ sections }),
  incrementField: () =>
    set((state) => ({ currentFieldIndex: state.currentFieldIndex + 1 })),
  incrementSection: () =>
    set((state) => ({ currentSectionIndex: state.currentSectionIndex + 1 })),
  resetFieldIndex: () => set({ currentFieldIndex: 0 }),
  advanceToNextSection: () =>
    set((state) => ({
      currentSectionIndex: state.currentSectionIndex + 1,
      currentFieldIndex: 0,
    })),

  getCurrentSection: () => {
    const { sections, currentSectionIndex } = get();
    if (
      !sections ||
      currentSectionIndex < 0 ||
      currentSectionIndex >= sections.length
    )
      return null;
    return sections[currentSectionIndex];
  },

  getCurrentField: () => {
    const section = get().getCurrentSection();
    if (!section) return null;

    const fields = Object.values(section.fields);
    const index = get().currentFieldIndex;
    if (index < 0 || index >= fields.length) return null;

    return fields[index];
  },

  currentNodeId: 'q1',
  stage: null,
  setCurrentNodeId: (id) => set({ currentNodeId: id }),
  setStage: (stage) => set({ stage }),

  currentFlowController: null,
  isInFlowFunc: false,
  questionBody: '',

  setCurrentFlowController: (controller) =>
    set({ currentFlowController: controller }),
  setIsInFlowFunc: (val) => set({ isInFlowFunc: val }),
  setQuestionBody: (text) => set({ questionBody: text }),

  currentSubFlowSectionIndex: 0,
  currentSubFlowFieldIndex: 0,
  SubFlowSections: [],

  setSubFlowSections: (sections) => set({ SubFlowSections: sections }),
  incrementSubFlowField: () =>
    set((state) => ({
      currentSubFlowFieldIndex: state.currentSubFlowFieldIndex + 1,
    })),
  incrementSubFlowSection: () =>
    set((state) => ({
      currentSubFlowSectionIndex: state.currentSubFlowSectionIndex + 1,
    })),
  resetSubFlowFieldIndex: () => set({ currentSubFlowFieldIndex: 0 }),
  advanceToNextSubFlowSection: () =>
    set((state) => ({
      currentSubFlowSectionIndex: state.currentSubFlowSectionIndex + 1,
      currentSubFlowFieldIndex: 0,
    })),

  getCurrentSubFlowSection: () => {
    const { SubFlowSections, currentSubFlowSectionIndex } = get();
    if (
      !SubFlowSections ||
      currentSubFlowSectionIndex < 0 ||
      currentSubFlowSectionIndex >= SubFlowSections.length
    )
      return null;
    return SubFlowSections[currentSubFlowSectionIndex];
  },

  getCurrentSubFlowField: () => {
    const section = get().getCurrentSubFlowSection();
    if (!section) return null;

    const fields = Object.values(section.fields);
    const index = get().currentSubFlowFieldIndex;
    if (index < 0 || index >= fields.length) return null;

    return fields[index];
  },
}));

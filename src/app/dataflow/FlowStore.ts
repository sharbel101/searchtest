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

  setSections: (sections: FlowSection[]) => void;
  incrementField: () => void;
  incrementSection: () => void;
  resetFieldIndex: () => void;
  advanceToNextSection: () => void;
  setSectionOpened: (index: number) => void;

  getCurrentSection: () => FlowSection | null;
  getCurrentField: () => FormField | null;

  currentSubFlow: string;
  currentSubFlowFieldIndex: number;
  getCurrentSubFlowFields: (name: string) => QuestionNode[] | null;
  incrementSubFlowField: () => void;
  setSubFlow: (name: string) => void;

  currentNodeId: string;
  stage: string | null;

  setCurrentNodeId: (id: string) => void;
  setStage: (stage: string) => void;

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
    set((state) => ({
      currentSectionIndex: state.currentSectionIndex + 1,
    })),
  resetFieldIndex: () => set({ currentFieldIndex: 0 }),

  advanceToNextSection: () =>
    set((state) => ({
      currentSectionIndex: state.currentSectionIndex + 1,
      currentFieldIndex: 0,
    })),

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

  // Subflow
  currentSubFlow: '',
  currentSubFlowFieldIndex: 0,

  getCurrentSubFlowFields: (subFlowName: string) => {
    //TODOs remove it
    const subFlows: Record<string, Record<string, QuestionNode>> = {
      investmentStageFlow,
    };
    const flow = subFlows[subFlowName];
    return flow ? Object.values(flow) : [];
  },

  incrementSubFlowField: () =>
    set((state) => ({
      currentSubFlowFieldIndex: state.currentSubFlowFieldIndex + 1,
    })),

  setSubFlow: (subFlow) =>
    set({ currentSubFlow: subFlow, currentSubFlowFieldIndex: 0 }),

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
}));

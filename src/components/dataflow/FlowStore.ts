import { create } from 'zustand';

import { FieldType, FlowSection, FormField } from './flow';
import { QuestionNode } from './flowEngine';
import { investmentStageFlow } from './InvestmentFlow';

// Map of all available subflows
const subFlows: Record<string, Record<string, QuestionNode>> = {
  investmentStageFlow,
};

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

  getCurrentSection: () => FlowSection | null;
  getCurrentField: () => FormField | null;

  currentSubFlow: Record<string, QuestionNode>;
  currentSubFlowFieldIndex: number;
  getCurrentSubFlowFields: (name: string) => QuestionNode[] | null;
  setSubFlowByName: (name: string) => void;
  incrementSubFlowField: () => void;

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

  allSubFlows?: Record<string, any>;
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

  // Subflow logic
  currentSubFlow: {},
  currentSubFlowFieldIndex: 0,

  getCurrentSubFlowFields: (subFlowName: string) => {
    const flow = subFlows[subFlowName];
    return flow ? Object.values(flow) : null;
  },

  setSubFlowByName: (name: string) => {
    const flow = subFlows[name];
    if (flow) {
      set({
        currentSubFlow: flow,
        currentSubFlowFieldIndex: 0,
      });
    } else {
      console.warn(`Subflow "${name}" not found.`);
    }
  },

  incrementSubFlowField: () =>
    set((state) => ({
      currentSubFlowFieldIndex: state.currentSubFlowFieldIndex + 1,
    })),

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

  // <<< Add allSubFlows here to fix your error >>>
  allSubFlows: subFlows,
}));

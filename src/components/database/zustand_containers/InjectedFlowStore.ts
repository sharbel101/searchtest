import { create } from 'zustand';
import { DBFlowField, DBFlowSection } from '@/components/database/DBtypes';

interface FlowState {
  // main flow (injected)
  currentInjectedSection: DBFlowSection | null;
  currentInjectedField: DBFlowField | null;
  injectedSections: DBFlowSection[];

  setInjectedSections: (sections: DBFlowSection[]) => void;
  setCurrentInjectedSection: (section: DBFlowSection | null) => void;
  setCurrentInjectedField: (field: DBFlowField | null) => void;

  getCurrentInjectedSection: () => DBFlowSection | null;
  getCurrentInjectedField: () => DBFlowField | null;

  stage: string | null;
  setStage: (stage: string | null) => void;

  // for injected chart forms
  currentFlowController: any;
  isInFlowFunc: boolean;
  questionBody: string;

  setCurrentFlowController: (controller: any) => void;
  setIsInFlowFunc: (val: boolean) => void;
  setQuestionBody: (text: string) => void;

  CurrentInjectionType: string;
  setCurrentInjectionType: (type: string) => void;
}

export const useInjectedDBFlowStore = create<FlowState>((set, get) => ({
  currentInjectedSection: null,
  currentInjectedField: null,

  injectedSections: [],

  setInjectedSections: (sections) => set({ injectedSections: sections }),
  setCurrentInjectedSection: (section) =>
    set({ currentInjectedSection: section }),
  setCurrentInjectedField: (field) => set({ currentInjectedField: field }),

  getCurrentInjectedSection: () => get().currentInjectedSection,
  getCurrentInjectedField: () => get().currentInjectedField,

  stage: null,
  setStage: (stage) => set({ stage }),

  currentFlowController: null,
  isInFlowFunc: false,
  questionBody: '',

  setCurrentFlowController: (controller) =>
    set({ currentFlowController: controller }),
  setIsInFlowFunc: (val) => set({ isInFlowFunc: val }),
  setQuestionBody: (text) => set({ questionBody: text }),

  CurrentInjectionType: '',
  setCurrentInjectionType: (type) => set({ CurrentInjectionType: type }),
}));

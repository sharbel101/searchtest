import { create } from 'zustand';
import { FlowSection, FormField } from '../MainFlow/flow';

interface FlowState {
  //for the main flow
  currentSectionId: string;
  currentFieldId: string;
  sections: FlowSection[];

  setSections: (sections: FlowSection[]) => void;

  // Updated navigation methods
  goToNextField: () => void;
  goToNextSection: () => void;

  getCurrentSection: () => FlowSection | null;
  getCurrentField: () => FormField | null;

  currentNodeId: string;
  stage: string | null;

  setCurrentNodeId: (id: string) => void;
  setStage: (stage: string) => void;

  // for injected chart forms
  currentFlowController: any;
  isInFlowFunc: boolean;
  questionBody: string;

  setCurrentFlowController: (controller: any) => void;
  setIsInFlowFunc: (val: boolean) => void;

  CurrentInjectionType: string;
  setCurrentInjectionType: (type: string) => void;

  setQuestionBody: (text: string) => void;
}

//useMainFlowStore
export const useFlowStore = create<FlowState>((set, get) => ({
  currentSectionId: 'nda',
  currentFieldId: 'companiesNDAForm',

  CurrentInjectionType: '',

  sections: [],

  setSections: (sections) => set({ sections }),

  // navigation logic based on nextField and nextNode
  goToNextField: () => {
    const { sections, getCurrentField, getCurrentSection } = get();
    const currentField = getCurrentField();
    const currentSection = getCurrentSection();

    if (!currentField || !currentSection) return;

    // Go to next field if defined
    if (currentField.nextField != null) {
      set({ currentFieldId: currentField.nextField });
      return;
    }

    // If no next field, go to the first field of the next section
    if (!currentSection.nextNode) return;

    const nextSection = sections.find(
      (section) => section.sectionId === currentSection.nextNode,
    );

    if (nextSection) {
      set({
        currentSectionId: nextSection.sectionId,
        currentFieldId: nextSection.firstField,
      });
    }
  },

  goToNextSection: () => {
    const { sections, getCurrentSection } = get();
    const currentSection = getCurrentSection();

    if (!currentSection || !currentSection.nextNode) return 'end';

    const nextSectionKey = currentSection.nextNode;

    const nextSection = sections.find(
      (section) => section.sectionId === nextSectionKey,
    );

    if (nextSection) {
      set({
        currentSectionId: nextSection.sectionId,
        currentFieldId: nextSection.firstField,
      });
    }
  },

  getCurrentSection: () => {
    const { sections, currentSectionId } = get();
    if (!sections || !currentSectionId) return null;
    return (
      sections.find((section) => section.sectionId === currentSectionId) || null
    );
  },

  getCurrentField: () => {
    const { currentFieldId } = get();
    const section = get().getCurrentSection();
    if (!section) return null;
    return section.fields[currentFieldId] || null;
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

  setCurrentInjectionType: (type: string) =>
    set({ CurrentInjectionType: type }),
}));

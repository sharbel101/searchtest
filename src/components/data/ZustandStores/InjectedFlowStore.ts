import { create } from 'zustand';
import { FieldType, FlowSection, FormField } from '../MainFlow/flow';

interface SubFlowState {
  currentSubFlowSectionId: string;
  currentSubFlowFieldId: string;
  SubFlowSections: FlowSection[];

  setSubFlowSections: (sections: FlowSection[]) => void;

  goToNextSubFlowField: () => void;
  goToNextSubFlowSection: () => void;

  getCurrentSubFlowSection: () => FlowSection | null;
  getCurrentSubFlowField: () => FormField | null;

  currentFlowController: any;
  isInFlowFunc: boolean;
  questionBody: string;

  setCurrentFlowController: (controller: any) => void;
  setIsInFlowFunc: (val: boolean) => void;
  setQuestionBody: (text: string) => void;
}

export const useSubFlowStore = create<SubFlowState>((set, get) => ({
  currentSubFlowSectionId: '',
  currentSubFlowFieldId: '',
  SubFlowSections: [],

  setSubFlowSections: (sections) => {
    // Optionally initialize current section/field
    const firstSection = sections[0];
    const firstFieldId =
      firstSection?.firstField || Object.keys(firstSection?.fields || {})[0];
    set({
      SubFlowSections: sections,
      currentSubFlowSectionId: firstSection?.sectionId || '',
      currentSubFlowFieldId: firstFieldId || '',
    });
  },

  getCurrentSubFlowSection: () => {
    const { SubFlowSections, currentSubFlowSectionId } = get();
    const current = SubFlowSections.find(
      (section) => section.sectionId === currentSubFlowSectionId,
    );
    if (!current) {
      return null;
    }
    return current;
  },

  getCurrentSubFlowField: () => {
    const section = get().getCurrentSubFlowSection();
    const { currentSubFlowFieldId } = get();
    if (!section) return null;
    return section.fields[currentSubFlowFieldId] || null;
  },

  goToNextSubFlowField: () => {
    const {
      getCurrentSubFlowField,
      getCurrentSubFlowSection,
      goToNextSubFlowSection,
    } = get();
    const currentField = getCurrentSubFlowField();
    const currentSection = getCurrentSubFlowSection();

    if (!currentField || !currentSection) return;

    // Go to nextField if defined
    if (currentField.nextField != null) {
      set({ currentSubFlowFieldId: currentField.nextField });
      return;
    }

    // If no nextField, go to next section
    if (currentSection.nextNode) {
      goToNextSubFlowSection();
    }
  },

  goToNextSubFlowSection: () => {
    const { SubFlowSections, getCurrentSubFlowSection } = get();
    const currentSection = getCurrentSubFlowSection();

    if (!currentSection || !currentSection.nextNode) return null;

    const nextSection = SubFlowSections.find(
      (section) => section.sectionId === currentSection.nextNode,
    );

    if (nextSection) {
      const firstFieldId =
        nextSection.firstField ||
        Object.keys(nextSection.fields || {})[0] ||
        '';
      set({
        currentSubFlowSectionId: nextSection.sectionId,
        currentSubFlowFieldId: firstFieldId,
      });

      console.log('This is the next SubFlow Section:', nextSection);
      return nextSection;
    }

    return null;
  },

  currentFlowController: null,
  isInFlowFunc: false,
  questionBody: '',

  setCurrentFlowController: (controller) =>
    set({ currentFlowController: controller }),
  setIsInFlowFunc: (val) => set({ isInFlowFunc: val }),
  setQuestionBody: (text) => set({ questionBody: text }),
}));

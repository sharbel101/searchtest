import { create } from 'zustand';
import { FlowSection, FormField } from './MainFlow/flow';

interface FlowState {
  //for the main flow
  currentSectionIndex: number;
  currentFieldIndex: number;
  sections: FlowSection[];

  setSections: (sections: FlowSection[]) => void;

  // Updated navigation methods
  goToNextField: () => void;
  goToNextSection: () => void;
  goToSpecificField: (sectionId: string, fieldId: string) => void;
  goToSpecificSection: (sectionId: string) => void;

  // Legacy methods (kept for backward compatibility)
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

  // New navigation logic based on nextField and nextNode
  goToNextField: () => {
    const { sections, getCurrentField, getCurrentSection } = get();
    const currentField = getCurrentField();
    const currentSection = getCurrentSection();

    if (!currentField || !currentSection) return;

    // If current field has a nextField, go to it
    if (currentField.nextField) {
      const nextFieldId = currentField.nextField;
      const nextFieldIndex = Object.keys(currentSection.fields).findIndex(
        (fieldKey) =>
          currentSection.fields[fieldKey].id === nextFieldId ||
          fieldKey === nextFieldId,
      );

      if (nextFieldIndex !== -1) {
        set({ currentFieldIndex: nextFieldIndex });
        return;
      }
    }

    // If no nextField or nextField not found, check for nextNode
    if (currentSection.nextNode) {
      get().goToNextSection();
    }
  },

  goToNextSection: () => {
    const { sections, getCurrentSection } = get();
    const currentSection = getCurrentSection();

    if (!currentSection || !currentSection.nextNode) return;

    const nextSectionId = currentSection.nextNode;
    const nextSectionIndex = sections.findIndex(
      (section) => section.sectionId === nextSectionId,
    );

    if (nextSectionIndex !== -1) {
      const nextSection = sections[nextSectionIndex];
      const firstFieldKey =
        nextSection.firstField || Object.keys(nextSection.fields)[0];
      const firstFieldIndex = Object.keys(nextSection.fields).findIndex(
        (fieldKey) => fieldKey === firstFieldKey,
      );

      set({
        currentSectionIndex: nextSectionIndex,
        currentFieldIndex: Math.max(0, firstFieldIndex),
      });
    }
  },

  goToSpecificField: (sectionId: string, fieldId: string) => {
    const { sections } = get();

    const sectionIndex = sections.findIndex(
      (section) => section.sectionId === sectionId,
    );
    if (sectionIndex === -1) return;

    const section = sections[sectionIndex];
    const fieldIndex = Object.keys(section.fields).findIndex(
      (fieldKey) =>
        section.fields[fieldKey].id === fieldId || fieldKey === fieldId,
    );

    if (fieldIndex !== -1) {
      set({
        currentSectionIndex: sectionIndex,
        currentFieldIndex: fieldIndex,
      });
    }
  },

  goToSpecificSection: (sectionId: string) => {
    const { sections } = get();

    const sectionIndex = sections.findIndex(
      (section) => section.sectionId === sectionId,
    );
    if (sectionIndex === -1) return;

    const section = sections[sectionIndex];
    const firstFieldKey = section.firstField || Object.keys(section.fields)[0];
    const firstFieldIndex = Object.keys(section.fields).findIndex(
      (fieldKey) => fieldKey === firstFieldKey,
    );

    set({
      currentSectionIndex: sectionIndex,
      currentFieldIndex: Math.max(0, firstFieldIndex),
    });
  },

  // Legacy methods (kept for backward compatibility)
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
}));

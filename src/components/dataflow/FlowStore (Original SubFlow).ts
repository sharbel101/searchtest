import { create } from 'zustand';
import { FlowSection, FormField } from './MainFlow/flow';

interface FlowState {
  currentSubFlowSectionIndex: number;
  currentSubFlowFieldIndex: number;
  SubFlowSections: FlowSection[];

  setSubFlowSections: (sections: FlowSection[]) => void;

  // New navigation methods for SubFlow
  goToNextSubFlowField: () => void;
  goToNextSubFlowSection: () => void;
  goToSpecificSubFlowField: (sectionId: string, fieldId: string) => void;
  goToSpecificSubFlowSection: (sectionId: string) => void;

  // Legacy methods (kept for backward compatibility)
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

export const useSubFlowStore = create<FlowState>((set, get) => ({
  currentSubFlowSectionIndex: 0,
  currentSubFlowFieldIndex: 0,
  SubFlowSections: [],

  setSubFlowSections: (sections) => set({ SubFlowSections: sections }),

  // New navigation logic based on nextField and nextNode for SubFlow
  goToNextSubFlowField: () => {
    const {
      SubFlowSections,
      getCurrentSubFlowField,
      getCurrentSubFlowSection,
    } = get();
    const currentField = getCurrentSubFlowField();
    const currentSection = getCurrentSubFlowSection();

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
        set({ currentSubFlowFieldIndex: nextFieldIndex });
        return;
      }
    }

    // If no nextField or nextField not found, check for nextNode
    if (currentSection.nextNode) {
      get().goToNextSubFlowSection();
    }
  },

  goToNextSubFlowSection: () => {
    const { SubFlowSections, getCurrentSubFlowSection } = get();
    const currentSection = getCurrentSubFlowSection();

    if (!currentSection || !currentSection.nextNode) return;

    const nextSectionId = currentSection.nextNode;
    const nextSectionIndex = SubFlowSections.findIndex(
      (section) => section.sectionId === nextSectionId,
    );

    if (nextSectionIndex !== -1) {
      const nextSection = SubFlowSections[nextSectionIndex];
      const firstFieldKey =
        nextSection.firstField || Object.keys(nextSection.fields)[0];
      const firstFieldIndex = Object.keys(nextSection.fields).findIndex(
        (fieldKey) => fieldKey === firstFieldKey,
      );

      set({
        currentSubFlowSectionIndex: nextSectionIndex,
        currentSubFlowFieldIndex: Math.max(0, firstFieldIndex),
      });
    }
  },

  goToSpecificSubFlowField: (sectionId: string, fieldId: string) => {
    const { SubFlowSections } = get();

    const sectionIndex = SubFlowSections.findIndex(
      (section) => section.sectionId === sectionId,
    );
    if (sectionIndex === -1) return;

    const section = SubFlowSections[sectionIndex];
    const fieldIndex = Object.keys(section.fields).findIndex(
      (fieldKey) =>
        section.fields[fieldKey].id === fieldId || fieldKey === fieldId,
    );

    if (fieldIndex !== -1) {
      set({
        currentSubFlowSectionIndex: sectionIndex,
        currentSubFlowFieldIndex: fieldIndex,
      });
    }
  },

  goToSpecificSubFlowSection: (sectionId: string) => {
    const { SubFlowSections } = get();

    const sectionIndex = SubFlowSections.findIndex(
      (section) => section.sectionId === sectionId,
    );
    if (sectionIndex === -1) return;

    const section = SubFlowSections[sectionIndex];
    const firstFieldKey = section.firstField || Object.keys(section.fields)[0];
    const firstFieldIndex = Object.keys(section.fields).findIndex(
      (fieldKey) => fieldKey === firstFieldKey,
    );

    set({
      currentSubFlowSectionIndex: sectionIndex,
      currentSubFlowFieldIndex: Math.max(0, firstFieldIndex),
    });
  },

  // Legacy methods (kept for backward compatibility)
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

  currentFlowController: null,
  isInFlowFunc: false,
  questionBody: '',

  setCurrentFlowController: (controller) =>
    set({ currentFlowController: controller }),
  setIsInFlowFunc: (val) => set({ isInFlowFunc: val }),
  setQuestionBody: (text) => set({ questionBody: text }),
}));

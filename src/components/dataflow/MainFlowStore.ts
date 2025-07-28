import { create } from 'zustand';
import { FlowSection, FormField } from '@/components/data/MainFlow/flow';

interface FlowState {
  // Main Flow State
  currentSectionIndex: number;
  currentSection: string;
  currentFieldIndex: number;
  sections: FlowSection[];

  setSections: (sections: FlowSection[]) => void;

  // New navigation methods for Main Flow
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

  // SubFlow State
  currentSubFlowSectionIndex: number;
  currentSubFlowFieldIndex: number;
  SubFlowSections: FlowSection[];

  setSubFlowSections: (sections: FlowSection[]) => void;

  // New navigation methods for SubFlow
  goToNextSubFlowField: () => void;
  goToNextSubFlowSection: () => void;
  goToSpecificSubFlowField: (sectionId: string, fieldId: string) => void;
  goToSpecificSubFlowSection: (sectionId: string) => void;

  // Legacy methods for SubFlow (kept for backward compatibility)
  incrementSubFlowField: () => void;
  incrementSubFlowSection: () => void;
  resetSubFlowFieldIndex: () => void;
  advanceToNextSubFlowSection: () => void;

  getCurrentSubFlowSection: () => FlowSection | null;
  getCurrentSubFlowField: () => FormField | null;

  // Shared properties for injected chart forms
  currentFlowController: any;
  isInFlowFunc: boolean;
  questionBody: string;

  setCurrentFlowController: (controller: any) => void;
  setIsInFlowFunc: (val: boolean) => void;
  setQuestionBody: (text: string) => void;
}

export const useFlowStore = create<FlowState>((set, get) => ({
  // Main Flow State
  currentSectionIndex: 0,
  currentFieldIndex: 0,
  currentSection: 'nda',
  sections: [],

  setSections: (sections) => set({ sections }),

  // Main Flow - New navigation logic based on nextField and nextNode
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

    if (!currentSection || !currentSection.nextNode) return 'end';

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

  // Main Flow - Legacy methods (kept for backward compatibility)
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

  // SubFlow State
  currentSubFlowSectionIndex: 0,
  currentSubFlowFieldIndex: 0,
  SubFlowSections: [],

  setSubFlowSections: (sections) => set({ SubFlowSections: sections }),

  // SubFlow - New navigation logic based on nextField and nextNode
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

  // SubFlow - Legacy methods (kept for backward compatibility)
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

  // Shared properties for injected chart forms
  currentFlowController: null,
  isInFlowFunc: false,
  questionBody: '',

  setCurrentFlowController: (controller) =>
    set({ currentFlowController: controller }),
  setIsInFlowFunc: (val) => set({ isInFlowFunc: val }),
  setQuestionBody: (text) => set({ questionBody: text }),
}));

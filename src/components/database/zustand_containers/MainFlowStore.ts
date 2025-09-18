import { create } from 'zustand';
import { DBFlowField, DBFlowSection } from '@/components/database/DBtypes';

interface FlowState {
  // main flow
  currentSection: DBFlowSection | null;
  currentField: DBFlowField | null;

  currentSectionFields: Record<string, Record<string, DBFlowField>>;
  sections: DBFlowSection[];

  setSections: (sections: DBFlowSection[]) => void;

  setCurrentSection: (section: DBFlowSection | null) => void;
  setCurrentField: (field: DBFlowField | null) => void;

  //This adds the field to it's section one by one (KEEP IT MAYBE WE WILL USE IT LATER)
  // setCurrentSectionFields: (
  //   sectionId: string,
  //   fieldId: string,
  //   field: DBFlowField
  // ) => void;
  setSectionFieldsBulk: (sectionId: string, fields: DBFlowField[]) => void;

  getCurrentSection: () => DBFlowSection | null;
  getCurrentField: () => DBFlowField | null;

  stage: string | null;
  setStage: (stage: string | null | undefined) => void;

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

export const useMainDBFlowStore = create<FlowState>((set, get) => ({
  currentSection: null,
  currentField: null,
  currentSectionFields: {},

  sections: [],

  setSections: (sections) => set({ sections }),

  setCurrentSection: (section) => set({ currentSection: section }),
  setCurrentField: (field) => set({ currentField: field }),

  // setCurrentSectionFields: (sectionId, fieldId, field) =>
  //   set((state) => ({
  //     currentSectionFields: {
  //       ...state.currentSectionFields,
  //       [sectionId]: {
  //         ...(state.currentSectionFields[sectionId] || {}),
  //         [fieldId]: field, // add/overwrite field in section
  //       },
  //     },
  //   })),
  setSectionFieldsBulk: (sectionId: string, fields: DBFlowField[]) =>
    set((state) => ({
      currentSectionFields: {
        ...state.currentSectionFields,
        [sectionId]: {
          ...(state.currentSectionFields[sectionId] || {}),
          ...Object.fromEntries(fields.map((f) => [f.id, f])),
        },
      },
    })),

  getCurrentSection: () => get().currentSection,
  getCurrentField: () => get().currentField,

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

import { create } from 'zustand';
import {
  DBFlowField,
  DBFlowSection,
  DBchartFlowField,
} from '@/components/database/DBtypes';

interface FlowState {
  currentChartFormField: DBchartFlowField | null;
  setCurrentChartFormField: (
    currentChartFormField: DBchartFlowField | null,
  ) => void;

  stage: string | null;
  setStage: (stage: string) => void;

  isInFlowFunc: boolean;
  questionBody: string;

  setIsInFlowFunc: (val: boolean) => void;
  setQuestionBody: (text: string) => void;
}

export const useChartFormDBFlowStore = create<FlowState>((set, get) => ({
  currentChartFormField: null,
  setCurrentChartFormField: (currentChartFormField: DBchartFlowField | null) =>
    set({ currentChartFormField: currentChartFormField }),

  stage: '',
  setStage: (stage) => set({ stage }),

  isInFlowFunc: false,
  questionBody: '',

  setIsInFlowFunc: (val) => set({ isInFlowFunc: val }),
  setQuestionBody: (text) => set({ questionBody: text }),
}));

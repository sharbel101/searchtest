import { FormField } from '../MainFlow/flow';
import { create } from 'zustand';

// New interfaces for the question-answer structure
interface QuestionAnswer {
  next?: string;
  setStage?: string;
}

interface Question {
  id: string;
  question: string;
  answers: Record<string, QuestionAnswer>;
}

interface FlowState {
  currentFieldId: string;

  // Field navigation methods
  goToNextField: (answer: string) => void;
  getCurrentChartFormField: () => FormField | null;

  // Question-answer navigation
  currentNodeId: string;
  questions: Record<string, Question>;
  stage: string | null;

  setCurrentNodeId: (id: string) => void;
  setStage: (stage: string) => void;
  setQuestions: (questions: Record<string, Question>) => void;

  // Navigation methods for question flow
  getCurrentQuestion: () => Question | null;
  getCurrentAnswers: () => string[];
  answerQuestion: (answer: string) => void;
  OnSuccess: () => string; // Returns stage or 'Stage not available yet'

  // for injected chart forms
  currentFlowController: any;
  isInFlowFunc: boolean;
  questionBody: string;

  setCurrentFlowController: (controller: any) => void;
  setIsInFlowFunc: (val: boolean) => void;
  setQuestionBody: (text: string) => void;
}

export const ChartFormUseFlowStore = create<FlowState>((set, get) => ({
  currentFieldId: 'q1',

  // Field navigation logic based on nextField only
  goToNextField: (userInput?: string) => {
    const { currentNodeId, questions } = get();
    const currentQuestion = questions[currentNodeId];

    if (!currentQuestion || !userInput) return null;

    // Check if the user input matches any available answer
    const answerData = currentQuestion.answers[userInput];

    if (!answerData) {
      console.warn(
        `Invalid answer "${userInput}" for question "${currentNodeId}"`,
      );
      return null;
    }

    // If answer has setStage, set it and return the stage
    if (answerData.setStage) {
      set({ stage: answerData.setStage });
      return answerData.setStage;
    }

    // If answer has next, move to next question and return the next question id
    if (answerData.next) {
      set({ currentNodeId: answerData.next });
      return answerData.next;
    }

    return null;
  },

  getCurrentChartFormField: () => {
    const { currentFieldId } = get();
    // This would need to be implemented based on how you store your fields
    // Since there's no section, you'll need a fields object at the root level
    // Example: return fields[currentFieldId] || null;
    return null; // Placeholder - you'll need to implement this based on your field storage
  },

  // Question-answer flow properties
  currentNodeId: 'q1',
  questions: {},
  stage: null,

  setCurrentNodeId: (id) => set({ currentNodeId: id }),
  setStage: (stage) => set({ stage }),
  setQuestions: (questions) => set({ questions }),

  // Question-answer navigation methods
  getCurrentQuestion: () => {
    const { currentNodeId, questions } = get();
    return questions[currentNodeId] || null;
  },

  getCurrentAnswers: () => {
    const currentQuestion = get().getCurrentQuestion();
    return currentQuestion ? Object.keys(currentQuestion.answers) : [];
  },

  answerQuestion: (answer: string) => {
    const { currentNodeId, questions } = get();
    const currentQuestion = questions[currentNodeId];

    if (!currentQuestion || !currentQuestion.answers[answer]) {
      console.warn(
        `Invalid answer "${answer}" for question "${currentNodeId}"`,
      );
      return;
    }

    const answerData = currentQuestion.answers[answer];

    // If answer has setStage, set it
    if (answerData.setStage) {
      set({ stage: answerData.setStage });
    }

    // If answer has next, move to next question
    if (answerData.next) {
      set({ currentNodeId: answerData.next });
    }
  },

  OnSuccess: () => {
    const { stage } = get();
    return stage || 'Stage not available yet';
  },

  // Flow controller properties
  currentFlowController: null,
  isInFlowFunc: false,
  questionBody: '',

  setCurrentFlowController: (controller) =>
    set({ currentFlowController: controller }),
  setIsInFlowFunc: (val) => set({ isInFlowFunc: val }),
  setQuestionBody: (text) => set({ questionBody: text }),
}));

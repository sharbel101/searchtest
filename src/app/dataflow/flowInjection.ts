'use client';

// Defines a single question in the flow
type QuestionNode = {
  id: string; // Unique identifier for the question
  question: string; // The question text to display
  answers: Record<string, { next?: string; setStage?: string }>; // Maps answers to next question ID or final stage
};

// Public interface for controlling the flow
export type FlowController = {
  getCurrentQuestion: () => string; // Returns the current question text
  getCurrentAnswers: () => Record<string, { next?: string; setStage?: string }>; // Returns available answers
  answerQuestion: (answer: string) => void; // Processes user's answer
  OnSuccess: () => string; // Returns the final stage or default message
};

// The flow structure with all questions and their answers
const investmentStageFlow: { [key: string]: QuestionNode } = {
  q1: {
    id: 'q1',
    question: 'Have you ever closed an investment round?', // First question
    answers: {
      No: { next: 'q2' }, // Moves to q2 if "No"
      Yes: { next: 'q3' }, // Moves to q3 if "Yes"
    },
  },
  q2: {
    id: 'q2',
    question: 'Do you have sales going for more than a year?',
    answers: {
      No: { setStage: 'Ideation Phase' }, // Sets final stage
      Yes: { setStage: 'Angel Phase' }, // Sets final stage
    },
  },
  q3: {
    id: 'q3',
    question: 'How many investment rounds did you close?',
    answers: {
      '1': { setStage: 'Angel Phase' }, // Sets final stage
      'More than 1': { next: 'q4' }, // Moves to q4
    },
  },
  q4: {
    id: 'q4',
    question: 'Involve any VC investment series?',
    answers: {
      No: { setStage: 'Angel Phase' }, // Sets final stage
      Yes: { next: 'q5' }, // Moves to q5
    },
  },
  q5: {
    id: 'q5',
    question: 'Which series have you completed?',
    answers: {
      'Series A Only': { setStage: 'Early VC' }, // Sets final stage
      'Series A & B': { setStage: 'Advanced VC' }, // Sets final stage
      'Series A B C': { setStage: 'Advanced VC' }, // Sets final stage
      'More than 4 series': { setStage: 'PE Stages' }, // Sets final stage
    },
  },
};

// Creates a new flow controller starting at q1
export const flowInjection = (): FlowController => {
  let currentNodeId = 'q1'; // Tracks the current question
  let stage: string | null = null; // Stores the final stage when set

  // Gets the current question text
  const getCurrentQuestion = () => investmentStageFlow[currentNodeId].question;

  // Gets the current question's answer options
  const getCurrentAnswers = () => investmentStageFlow[currentNodeId].answers;

  // Processes the user's answer
  const answerQuestion = (answer: string) => {
    const answerConfig = investmentStageFlow[currentNodeId].answers[answer];
    if (answerConfig.setStage) {
      stage = answerConfig.setStage; // Sets the final stage
    } else if (answerConfig.next) {
      currentNodeId = answerConfig.next; // Moves to the next question
    }
  };

  // Returns the final stage or a default message
  const OnSuccess = () => stage || 'Stage not available yet';

  // Returns the controller interface
  return {
    getCurrentQuestion,
    getCurrentAnswers,
    answerQuestion,
    OnSuccess,
  };
};

'use client';

// Defines a single question in the flow
export type QuestionNode = {
  id: string; // Unique identifier for the question
  question: string; // The question text to display
  answers: Record<string, { next?: string; setStage?: string }>; // Maps answers to next question ID or final stage
};

// Public interface for controlling the flow
export type FlowController = {
  getCurrentQuestion: () => string; // Returns the current question text
  getCurrentAnswers: () => string[]; // Returns available answers as an array
  answerQuestion: (answer: string) => void; // Processes user's answer
  OnSuccess: () => string; // Returns the final stage or default message
};

// The flow structure with all questions and their answers
export const investmentStageFlow: { [key: string]: QuestionNode } = {
  q1: {
    id: 'q1',
    question: 'Have you ever closed an investment round?',
    answers: {
      No: { next: 'q2' },
      Yes: { next: 'q3' },
    },
  },
  q2: {
    id: 'q2',
    question: 'Do you have sales going for more than a year?',
    answers: {
      No: { setStage: 'Ideation Phase' },
      Yes: { setStage: 'Angel Phase' },
    },
  },
  q3: {
    id: 'q3',
    question: 'How many investment rounds did you close?',
    answers: {
      '1': { setStage: 'Angel Phase' },
      'More than 1': { next: 'q4' },
    },
  },
  q4: {
    id: 'q4',
    question: 'Involve any VC investment series?',
    answers: {
      No: { setStage: 'Angel Phase' },
      Yes: { next: 'q5' },
    },
  },
  q5: {
    id: 'q5',
    question: 'Which series have you completed?',
    answers: {
      'Series A Only': { setStage: 'Early VC' },
      'Series A & B': { setStage: 'Advanced VC' },
      'Series A B C': { setStage: 'Advanced VC' },
      'More than 4 series': { setStage: 'PE Stages' },
    },
  },
};

// Creates a new flow controller starting at q1
export const flowInjection = (): FlowController => {
  let currentNodeId = 'q1'; // Tracks the current question
  let stage: string | null = null; // Stores the final stage when set

  console.log('DEBUG: FlowInjection - Initialized with node:', currentNodeId);

  // Gets the current question text
  const getCurrentQuestion = () => {
    console.log(
      'DEBUG: FlowInjection - Current question from node:',
      currentNodeId,
      investmentStageFlow[currentNodeId].question,
    );
    return investmentStageFlow[currentNodeId].question;
  };

  // Gets the current question's answer options as an array of keys
  const getCurrentAnswers = () => {
    const answers = Object.keys(investmentStageFlow[currentNodeId].answers);
    console.log(
      'DEBUG: FlowInjection - Current answers for node:',
      currentNodeId,
      answers,
    );
    return answers;
  };

  // Processes the user's answer
  const answerQuestion = (answer: string) => {
    console.log(
      'DEBUG: FlowInjection - Answering:',
      answer,
      'for node:',
      currentNodeId,
    );
    const answerConfig = investmentStageFlow[currentNodeId].answers[answer];
    if (answerConfig) {
      if (answerConfig.setStage) {
        stage = answerConfig.setStage;
        console.log('DEBUG: FlowInjection - Set stage:', stage);
      } else if (answerConfig.next) {
        currentNodeId = answerConfig.next;
        console.log(
          'DEBUG: FlowInjection - Moved to next node:',
          currentNodeId,
        );
      }
    } else {
      console.log('DEBUG: FlowInjection - Invalid answer:', answer);
    }
  };

  // Returns the final stage or a default message
  const OnSuccess = () => {
    console.log('DEBUG: FlowInjection - OnSuccess check, stage:', stage);
    return stage || 'Stage not available yet';
  };

  return {
    getCurrentQuestion,
    getCurrentAnswers,
    answerQuestion,
    OnSuccess,
  };
};

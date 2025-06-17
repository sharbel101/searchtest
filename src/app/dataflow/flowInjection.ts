// flowInjection.ts

// Defines the structure of a single question node in the flow
type QuestionNode = {
  id: string; // Unique identifier for the question
  question: string; // The actual question text
  answers: Record<string, { next?: string; setStage?: string }>;
  // Maps answer text to what should happen next:
  // - 'next' points to the ID of the next question
  // - 'setStage' ends the flow and triggers a stage
};

// Defines the interface for the flow controller (what external code can use)
type FlowController = {
  getCurrentQuestion: () => string; // Returns the current question's text
  getCurrentAnswers: () => {
    [key: string]: { next?: string; setStage?: string };
  };
  // Returns all possible answers for the current question
  answerQuestion: (answer: string) => void;
  // Accepts an answer string and updates the state accordingly
};

// The full decision flow, where each key is a question ID and each value is a QuestionNode
const investmentStageFlow: { [key: string]: QuestionNode } = {
  q1: {
    id: 'q1',
    question: 'Have you ever closed an investment round?',
    answers: {
      No: { next: 'q2' }, // If "No", go to question q2
      Yes: { next: 'q3' }, // If "Yes", go to question q3
    },
  },
  q2: {
    id: 'q2',
    question: 'Do you have sales going for more than a year?',
    answers: {
      No: { setStage: 'Ideation Phase' }, // End and set stage
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

// Creates and returns the flow controller, initialized at q1
export const flowInjection = (
  onSuccess: (stage: string) => void,
): FlowController => {
  let currentNodeId = 'q1'; // Start from the first question

  // Returns the question text for the current node
  const getCurrentQuestion = () => investmentStageFlow[currentNodeId].question;

  // Returns all answer options for the current question
  const getCurrentAnswers = () => investmentStageFlow[currentNodeId].answers;

  // Handles the user's answer and updates flow state
  const answerQuestion = (answer: string) => {
    const answerConfig = investmentStageFlow[currentNodeId].answers[answer];
    if (!answerConfig) {
      throw new Error(
        `Invalid answer: "${answer}" for question "${currentNodeId}"`,
      );
    }
    // If this answer sets a final stage, trigger onSuccess and end flow
    if (answerConfig.setStage) {
      onSuccess(answerConfig.setStage);
    }
    // Otherwise, move to the next question
    else if (answerConfig.next) {
      currentNodeId = answerConfig.next;
    }
  };

  // Expose public methods of the flow controller
  return {
    getCurrentQuestion,
    getCurrentAnswers,
    answerQuestion,
  };
};

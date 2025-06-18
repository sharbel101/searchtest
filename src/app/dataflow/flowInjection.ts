// flowInjection.ts

// Defines the structure of a single question node in the flow.
// Each node has an ID, a question string, and possible answers.
// Each answer maps to either a next question or a final investment stage.
type QuestionNode = {
  id: string;
  question: string;
  answers: Record<string, { next?: string; setStage?: string }>;
};

// Defines the public interface for the flow controller that external code can use.
// - getCurrentQuestion: returns the current question string
// - getCurrentAnswers: returns all possible answers for the current question
// - answerQuestion: takes a user's answer and updates the flow state accordingly
// - OnSuccess: returns the final stage if determined
export type FlowController = {
  getCurrentQuestion: () => string;
  getCurrentAnswers: () => {
    [key: string]: { next?: string; setStage?: string };
  };
  answerQuestion: (answer: string) => void;
  OnSuccess: () => string;
};

// Defines the full flow structure as a lookup table.
// Each key is a question ID, and each value is a question node with its text and answer options.
const investmentStageFlow: { [key: string]: QuestionNode } = {
  q1: {
    id: 'q1',
    question: 'Have you ever closed an investment round?',
    answers: {
      No: { next: 'q2' }, // Go to question 2 if user says No
      Yes: { next: 'q3' }, // Go to question 3 if user says Yes
    },
  },
  q2: {
    id: 'q2',
    question: 'Do you have sales going for more than a year?',
    answers: {
      No: { setStage: 'Ideation Phase' }, // Set stage directly
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

// Creates and returns a new instance of the flow controller, initialized at the first question (q1)
export const flowInjection = (): FlowController => {
  // The ID of the current question node in the flow
  let currentNodeId = 'q1';

  // The final determined stage (null until it's set)
  let stage: string | null = null;

  // Returns the question string of the current node
  const getCurrentQuestion = () => {
    return investmentStageFlow[currentNodeId].question;
  };

  // Returns all answer choices for the current node (as an object)
  const getCurrentAnswers = () => {
    return investmentStageFlow[currentNodeId].answers;
  };

  // Accepts an answer, checks if it's valid, and updates the flow state.
  // If the answer leads to a final stage, it sets the stage.
  // Otherwise, it moves to the next question.
  const answerQuestion = (answer: string) => {
    const answerConfig = investmentStageFlow[currentNodeId].answers[answer];

    if (!answerConfig) {
      // If the answer is not valid for the current question, throw an error
      throw new Error(
        `Invalid answer: "${answer}" for question "${currentNodeId}"`,
      );
    }

    if (answerConfig.setStage) {
      // Final stage has been reached
      stage = answerConfig.setStage;
    } else if (answerConfig.next) {
      // Move to the next question
      currentNodeId = answerConfig.next;
    }
  };

  // Returns the final investment stage if it was set, or a default message
  const OnSuccess = () => {
    return stage ? stage : 'Stage not available yet';
  };

  // Expose the controller API to external consumers
  return {
    getCurrentQuestion,
    getCurrentAnswers,
    answerQuestion,
    OnSuccess,
  };
};

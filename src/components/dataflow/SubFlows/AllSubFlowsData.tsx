'use client';

import { QuestionNode } from '../MainFlow/flowEngine';

export const allSubFlows: Record<string, Record<string, QuestionNode>> = {
  investmentStageFlow: {
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
  },
};

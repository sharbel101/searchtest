'use client';

export type QuestionNode = {
  id: string;
  question: string;
  answers: Record<string, { next?: string; setStage?: string }>;
};

export type FlowDefinition = Record<string, QuestionNode>;

export type FlowController = {
  getCurrentQuestion: () => string;
  getCurrentAnswers: () => string[];
  answerQuestion: (answer: string) => void;
  OnSuccess: () => string;
};

export const createFlowController = (flow: FlowDefinition): FlowController => {
  let currentNodeId = 'q1';
  let stage: string | null = null;

  const getCurrentQuestion = () => {
    return flow[currentNodeId]?.question || '';
  };

  const getCurrentAnswers = () => {
    return Object.keys(flow[currentNodeId]?.answers || {});
  };

  const answerQuestion = (answer: string) => {
    const answerConfig = flow[currentNodeId]?.answers?.[answer];
    if (!answerConfig) return;

    if (answerConfig.setStage) {
      stage = answerConfig.setStage;
    } else if (answerConfig.next) {
      currentNodeId = answerConfig.next;
    }
  };

  const OnSuccess = () => {
    return stage || 'Stage not available yet';
  };

  return {
    getCurrentQuestion,
    getCurrentAnswers,
    answerQuestion,
    OnSuccess,
  };
};

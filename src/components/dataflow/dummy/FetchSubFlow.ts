'use client';

import { createFlowController } from '../flowEngine';
import { useFlowStore } from '../FlowStore';
import { allSubFlows } from './AllSubFlowsData';

export const fetchAndSetSubFlow = async (
  flowName: string,
  delayMs: number,
): Promise<string | null> => {
  const { setCurrentFlowController, setIsInFlowFunc, setQuestionBody } =
    useFlowStore.getState();

  const subFlow = allSubFlows[flowName];

  if (!subFlow) {
    return `Subflow "${flowName}" not found.`;
  }

  const flowController = createFlowController(subFlow);
  setCurrentFlowController(flowController);
  setIsInFlowFunc(true);

  const initialQuestion = flowController.getCurrentQuestion();
  setQuestionBody(initialQuestion);

  const answers = flowController.getCurrentAnswers();

  let body = initialQuestion;
  if (answers.length > 0) {
    body += '\n\nPlease select one of the following options:';
    answers.forEach((answer: string, idx: number) => {
      body += `\n${idx + 1}. ${answer}`;
    });
  }

  if (delayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }

  return body;
};

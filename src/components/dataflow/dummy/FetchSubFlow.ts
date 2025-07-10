'use client';

import { createFlowController } from '../flowEngine';
import { useFlowStore } from '../FlowStore';
import { allSubFlows } from './AllSubFlowsData';

//Fetches the sub flow by name and initializes the flow controller.

export const fetchAndSetSubFlow = async (
  flowName: string,
  delayMs: number = 2000,
): Promise<boolean> => {
  const { setCurrentFlowController, setIsInFlowFunc, setQuestionBody } =
    useFlowStore.getState();

  const subFlow = allSubFlows[flowName];
  if (!subFlow) {
    return false;
  }

  const flowController = createFlowController(subFlow);
  setCurrentFlowController(flowController);
  setIsInFlowFunc(true);

  const initialQuestion = flowController.getCurrentQuestion();
  setQuestionBody(initialQuestion);

  if (delayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }

  return true;
};

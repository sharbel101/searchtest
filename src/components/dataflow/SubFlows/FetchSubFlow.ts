'use client';

import {
  createFlowController,
  createOriginalSubFlowController,
} from '../MainFlow/flowEngine';
import { useFlowStore } from '../FlowStore';
import { allSubFlows } from './AllSubFlowsData';
import { AllOriginalSubFlowsData } from './AllOriginalSubFlowsData';

//Fetches the sub flow by name and initializes the flow controller.

export const fetchAndSetChartFormSubFlow = async (
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

export const fetchAndSetOriginalSubFlow = async (
  flowName: string,
  stage: string,
  delayMs: number = 2000,
): Promise<boolean> => {
  const {
    setCurrentFlowController,
    setIsInFlowFunc,
    setQuestionBody,
    setSubFlowSections,
  } = useFlowStore.getState();

  const subFlow = AllOriginalSubFlowsData[flowName][stage];
  if (!subFlow) {
    return false;
  }

  const flowController = createOriginalSubFlowController(subFlow);
  setCurrentFlowController(flowController);
  setIsInFlowFunc(true);

  //setSubFlowSections(subFlow); hattet hayde la jarreb hell l mechkle li bel OriginalSubFlowLoop

  const initialQuestion = flowController.getCurrentQuestion();
  setQuestionBody(initialQuestion);

  if (delayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }

  return true;
};

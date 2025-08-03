'use client';

import {
  createFlowController,
  createOriginalSubFlowController,
} from '@/components/dataflow/Main/flowEngine';
import { useFlowStore } from '@/components/data/ZustandStores/MainFlowStore';
import { useSubFlowStore } from '@/components/data/ZustandStores/InjectedFlowStore';
import { allSubFlows } from '@/components/data/ChartForm/AllSubFlowsData';
import { AllOriginalSubFlowsData } from '@/components/data/fs/AllOriginalSubFlowsData';
import { ChartFormUseFlowStore } from '../data/ZustandStores/ChartFormFlowStore';

//IS
export const fetchAndSetChartFormSubFlow = async (
  flowName: string,
  delayMs: number = 2000,
): Promise<boolean> => {
  const { setCurrentFlowController, setIsInFlowFunc } = useFlowStore.getState();

  const { setQuestionBody } = ChartFormUseFlowStore.getState();

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

//fs
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
  } = useSubFlowStore.getState();

  const subFlow = AllOriginalSubFlowsData[flowName][stage];
  if (!subFlow) {
    return false;
  }

  const flowController = createOriginalSubFlowController(subFlow);
  setCurrentFlowController(flowController);
  setIsInFlowFunc(true);

  //I need a map to map over the subflow sections and put it inside a container and setSubFlowSections(container).
  const sections = Object.values(subFlow);
  setSubFlowSections(sections);

  console.log('this  is the subflow sections in fetch functions:', sections);

  const initialQuestion = flowController.getCurrentQuestion();
  console.log('this is the Current question: ', initialQuestion);
  setQuestionBody(initialQuestion);

  if (delayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }

  return true;
};

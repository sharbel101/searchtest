'use client';

import {
  createFlowController,
  createOriginalSubFlowController,
} from '@/components/dataflow/Main/flowEngine';
import { useFlowStore } from '@/components/Zustand store data/ZustandStores/MainFlowStore';
import { useSubFlowStore } from '@/components/Zustand store data/ZustandStores/InjectedFlowStore';
import { allSubFlows } from '@/components/Zustand store data/ChartForm/AllSubFlowsData';
import { AllOriginalSubFlowsData } from '@/components/Zustand store data/fs/AllOriginalSubFlowsData';
import { ChartFormUseFlowStore } from '../Zustand store data/ZustandStores/ChartFormFlowStore';

//IS
export const fetchAndSetChartFormSubFlow = async (
  flowName: string,
  delayMs: number = 2000,
): Promise<boolean> => {
  const {
    setCurrentFlowController,
    setIsInFlowFunc,
    setCurrentInjectionType,
    getCurrentField,
  } = useFlowStore.getState();

  const { setQuestionBody } = ChartFormUseFlowStore.getState();

  const subFlow = allSubFlows[flowName];
  if (!subFlow) {
    return false;
  }

  const flowController = createFlowController(subFlow);
  setCurrentFlowController(flowController);
  setIsInFlowFunc(true);

  const field = getCurrentField();
  if (!field) {
    console.warn('No field provided to define the type of the injection.');
  }
  if (field?.flowInjection) {
    setCurrentInjectionType(field?.flowInjection?.type);
  } else {
    setCurrentInjectionType('Unknown Injection Type.');
  }

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
  const { setQuestionBody, setSubFlowSections } = useSubFlowStore.getState();

  const {
    setCurrentFlowController,
    setIsInFlowFunc,
    setCurrentInjectionType,
    getCurrentField,
  } = useFlowStore.getState();

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

  const field = getCurrentField();
  if (!field) {
    console.warn('No field provided to define the type of the injection.');
  }
  if (field?.flowInjection) {
    setCurrentInjectionType(field?.flowInjection?.type);
  } else {
    setCurrentInjectionType('Unknown Injection Type.');
  }

  console.log('this  is the subflow sections in fetch functions:', sections);

  const initialQuestion = flowController.getCurrentQuestion();
  console.log('this is the Current question: ', initialQuestion);
  setQuestionBody(initialQuestion);

  if (delayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }

  return true;
};

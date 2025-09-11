'use client';

import {
  createFlowController,
  createOriginalSubFlowController,
  FlowDefinition,
} from '@/components/dataflow/Main/flowEngine';
import { useFlowStore } from '@/components/Zustand store data/ZustandStores/MainFlowStore';
//THIS NEEDS TO BE REMOVED (UNCOMMENT) BECAUSE I WANT TO COMMIT WITHOUT ANY ERROR
// import { useSubFlowStore } from '@/components/Zustand store data/ZustandStores/InjectedFlowStore';
//THIS NEEDS TO BE REMOVED (UNCOMMENT) BECAUSE I WANT TO COMMIT WITHOUT ANY ERROR
// import { allSubFlows } from '@/components/Zustand store data/ChartForm/AllSubFlowsData';
import { AllOriginalSubFlowsData } from '@/components/Zustand store data/fs/AllOriginalSubFlowsData';
import { ChartFormUseFlowStore } from '../Zustand store data/ZustandStores/ChartFormFlowStore';

import { createClient } from '@/utils/supabase/client';
import { getCurrentMainField } from '../database/mainFlowDBfunc';

const supabase = createClient();

//only for development purposes
import { user_id } from './constructor';

import { DBFlowSection } from '@/components/database/DBtypes';

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

  const { data, error } = await supabase.from('chartform_flow').select('*');
  // .not("starting_node", "is", null);  // "is not null" equivalent //hayde bzida eza badde bas jib l starting node... hallae badde kell l flow

  if (error) {
    console.error('Error fetching:', error);
  } else {
    console.log('Rows with starting_node:', data);
  }

  if (!data) {
    return false;
  }

  const flowDef: FlowDefinition = data.reduce((acc, row) => {
    acc[row.id] = {
      id: row.id,
      question: row.question,
      answers: row.answers ?? {},
      starting_node: row.starting_node,
      form_id: row.form_id,
    };
    return acc;
  }, {} as FlowDefinition);

  const flowController = createFlowController(flowDef);
  setCurrentFlowController(flowController);
  setIsInFlowFunc(true);

  const field = await getCurrentMainField(user_id);
  if (!field) {
    console.warn('No field provided to define the type of the injection.');
  }
  if (field?.flowinjection) {
    setCurrentInjectionType(field?.flowinjection?.type);
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
  injection_name: string,
  stage: string,
  delayMs: number = 2000,
): Promise<boolean> => {
  // const { setQuestionBody, setSubFlowSections } = useSubFlowStore.getState();

  const {
    setCurrentFlowController,
    setIsInFlowFunc,
    setCurrentInjectionType,
    getCurrentField,
  } = useFlowStore.getState();

  const { data, error } = await supabase
    .from('injected_flow_sections')
    .select('*')
    .eq('injection_name', injection_name)
    .eq('stage', stage)
    .single();

  if (error) {
    console.error('Error fetching:', error);
  } else {
    console.log('Rows with starting_node:', data);
  }

  if (!data) {
    return false;
  }

  const DBdata: DBFlowSection = data;

  const flowController = createOriginalSubFlowController(DBdata);
  setCurrentFlowController(flowController);
  setIsInFlowFunc(true);

  //I need a map to map over the subflow sections and put it inside a container and setSubFlowSections(container).
  // const sections = Object.values(subFlow);
  // setSubFlowSections(sections);

  const field = getCurrentField();
  if (!field) {
    console.warn('No field provided to define the type of the injection.');
  }
  if (field?.flowInjection) {
    setCurrentInjectionType(field?.flowInjection?.type);
  } else {
    setCurrentInjectionType('Unknown Injection Type.');
  }

  // console.log('this  is the subflow sections in fetch functions:', sections);

  const initialQuestion = await flowController.getCurrentQuestion();
  console.log('this is the Current question: ', initialQuestion);
  //THIS NEEDS TO BE REMOVED (UNCOMMENT) BECAUSE I WANT TO COMMIT WITHOUT ANY ERROR
  // setQuestionBody(initialQuestion);

  if (delayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }

  return true;
};

'use client';
import { StageSubFlow } from '@/components/Zustand store data/fs/AllOriginalSubFlowsData';
import { ChartFormUseFlowStore } from '@/components/Zustand store data/ZustandStores/ChartFormFlowStore';

//these TYPES are for the createFlowController
export type QuestionNode = {
  id: string;
  question: string;
  answers: Record<string, { next?: string; setStage?: string }>;
  options?: { id: string; value: string }[];
};

export type FlowDefinition = Record<string, QuestionNode>;

export type FlowController = {
  getCurrentQuestion: () => string;
  getCurrentAnswers: () => string[];
  answerQuestion: (answer: string) => void;
  OnSuccess?: () => string;
};

// these TYPES are for the createOriginalSubFlowController
export type TypeOriginalSubFlowsOptions = {
  id: string;
  value: string;
};

//  createFlowController
export const createFlowController = (flow: FlowDefinition): FlowController => {
  let currentNodeId = 'q1'; //hone lezem a3mol supabase lal currentChartFormFieldId li hiye by default awwal field bel injected flow w msayyave bel table taba3 l progress;
  let stage: string | null = null;

  const getCurrentQuestion = () => {
    return flow[currentNodeId]?.question || "Can't provide the question ";
  };

  const getCurrentAnswers = () => {
    return Object.keys(flow[currentNodeId]?.answers || {});
  };

  const answerQuestion = (answer: string) => {
    const answerConfig = flow[currentNodeId]?.answers?.[answer];
    const {
      goToNextField,
      setQuestionBody,
      getCurrentAnswers,
      getCurrentChartFormField,
    } = ChartFormUseFlowStore.getState();

    if (!answerConfig) return;

    if (answerConfig.setStage) {
      console.log('We reached the set stage phase:', answerConfig.setStage);
      stage = answerConfig.setStage;
    }

    if (answerConfig.next !== undefined && answerConfig.next !== '') {
      console.log('Jumping to the next node:', answerConfig.next);
      currentNodeId = answerConfig.next;
      goToNextField(answerConfig.next);

      const Question = getCurrentQuestion();
      const answers = getCurrentAnswers();

      if (Question === undefined || Question === null) {
        setQuestionBody("Can't provide questions");
      } else {
        setQuestionBody(Question);
      }

      if (answers === undefined || answers === null) {
        console.warn("Can't provide answers");
      }
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

//   createOriginalSubFlowController

export const createOriginalSubFlowController = (flow: StageSubFlow) => {
  let currentNodeId = 'q1'; //hone lezem a3mol supabase lal currentInjectedFieldId li hiye by default awwal field bel injected flow w msayyave bel table taba3 l progress;

  const getCurrentQuestion = (): string => {
    const currentNode = flow[currentNodeId];
    if (!currentNode) return '';

    // Get the first field in the current node (assuming single field per question)
    const firstFieldKey = Object.keys(currentNode.fields)[0];
    const firstField = currentNode.fields[firstFieldKey];

    return firstField?.label || '';
  };

  const getCurrentAnswers = (): any[] => {
    const currentNode = flow[currentNodeId];
    if (!currentNode) return [];

    // Get the first field in the current node
    const firstFieldKey = Object.keys(currentNode.fields)[0];
    const firstField = currentNode.fields[firstFieldKey];

    if (!firstField?.options) return [];

    // Map the objects and extract their values into an array
    return firstField.options.map((option) => option.value); // or option.text, option.id, etc.
  };

  /**
   * I MADE THESE FUNCTIONS IN THE FLOW STORES. BUT I KEPT IT BECAUSE MAYBE WE WILL USE IT LATER.... JOE
   */

  // const getCurrentSectionTitle = (): string => {
  //   return flow[currentNodeId]?.sectionTitle || '';
  // };

  // const getCurrentSectionId = (): string => {
  //   return flow[currentNodeId]?.sectionId || '';
  // };

  // const getCurrentFields = (): Record<string, FormField> => {
  //   return flow[currentNodeId]?.fields || {};
  // };

  // const moveToNext = (): boolean => {
  //   const currentNode = flow[currentNodeId];
  //   if (!currentNode || !currentNode.nextNode) {
  //     return false; // End of flow
  //   }

  //   currentNodeId = currentNode.nextNode;
  //   return true;
  // };

  // const getCurrentNodeId = (): string => {
  //   return currentNodeId;
  // };

  // const isAtEnd = (): boolean => {
  //   const currentNode = flow[currentNodeId];
  //   return !currentNode || currentNode.nextNode === null;
  // };

  // const goToNode = (nodeId: string): boolean => {
  //   if (flow[nodeId]) {
  //     currentNodeId = nodeId;
  //     return true;
  //   }
  //   return false;
  // };

  // const getAllNodes = (): string[] => {
  //   return Object.keys(flow);
  // };

  return {
    getCurrentQuestion,
    getCurrentAnswers,
    // getCurrentSectionTitle,
    // getCurrentSectionId,
    // getCurrentFields,
    // getCurrentNodeId,
    // moveToNext,
    // isAtEnd,
    // goToNode,
    // getAllNodes,
  };
};

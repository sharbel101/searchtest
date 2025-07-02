'use client';

import { Block } from '@/Chatbot/src';
import { chatFlow, FieldType } from './flow';
import { useFlowStore } from './FlowStore';
import { createFlowController } from './flowEngine';
import { UploadFileHandler } from './UploadFileHandler';

export const generateChatBotFlow = (): Record<string, Block> => {
  return {
    start: {
      message: () => {
        const { setSections } = useFlowStore.getState();
        const allSections = Object.values(chatFlow);
        setSections(allSections);

        if (allSections.length !== 0) {
          return "Hi! We're setting things up! Loading...";
        } else {
          return 'No section available! Error...';
        }
      },
      path: () => {
        const allSections = Object.values(chatFlow);
        return allSections.length !== 0 ? 'setup' : 'emptyFlow';
      },
      transition: 2000,
    },

    setup: {
      message: () => {
        const { setSections, currentSectionIndex, resetFieldIndex } =
          useFlowStore.getState();
        const allSections = Object.values(chatFlow);
        setSections(allSections);
        resetFieldIndex();
        const current = allSections[currentSectionIndex] || null;

        return current
          ? `Starting section: ${current.sectionTitle}`
          : 'Starting section: Unknown';
      },
      path: () => {
        const { getCurrentSection, advanceToNextSection } =
          useFlowStore.getState();
        const current = getCurrentSection();
        if (!current) return 'end';

        const fields = Object.values(current.fields);
        if (fields.length === 0) {
          advanceToNextSection();
          const newSection = useFlowStore.getState().getCurrentSection();
          return newSection ? 'setup' : 'end';
        }
        return 'loop';
      },
      transition: 2000,
    },

    loop: {
      message: () => {
        const {
          getCurrentField,
          getCurrentSection,
          setSubFlowByName,
          setCurrentFlowController,
          setIsInFlowFunc,
          currentFlowController,
          isInFlowFunc,
          setQuestionBody,
        } = useFlowStore.getState();

        const field = getCurrentField();
        const section = getCurrentSection();

        if (!field || !field.label) {
          return 'No more fields in this section... Send me anything to jump to the next section.';
        }

        if (
          field.type === FieldType.FlowFunc &&
          field.flowInjection &&
          !isInFlowFunc
        ) {
          //is has to be async
          //const subFlowData= await getSubFlowFromServer(field.flowInjection);
          //useFlowStore.getState().setSubFlow(subFlowData);
          const subFlow =
            useFlowStore.getState().allSubFlows?.[field.flowInjection];
          if (subFlow) {
            setSubFlowByName(field.flowInjection);

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

            return `${field.label}\n\n${body}`;
          } else {
            return `Subflow "${field.flowInjection}" not found.`;
          }
        }

        if (
          field.type === FieldType.FlowFunc &&
          isInFlowFunc &&
          currentFlowController
        ) {
          const question = currentFlowController.getCurrentQuestion();
          const answers = currentFlowController.getCurrentAnswers();

          let body = question;
          if (answers.length > 0) {
            body += '\n\nPlease select one of the following options:';
            answers.forEach((answer: string, idx: number) => {
              body += `\n${idx + 1}. ${answer}`;
            });
          }

          return `${field.label}\n\n${body}`;
        }

        // Default fallback
        return `${field.label}\n${field.description || `Please provide ${field.label}`}`;
      },

      path: (params: { userInput?: string }) => {
        const {
          getCurrentSection,
          getCurrentField,
          incrementField,
          incrementSection,
          resetFieldIndex,
          setCurrentFlowController,
          setIsInFlowFunc,
          currentFlowController,
          isInFlowFunc,
          setStage,
          advanceToNextSection,
          setQuestionBody,
        } = useFlowStore.getState();

        const section = getCurrentSection();
        if (!section) return 'end';

        const field = getCurrentField();
        if (!field) {
          incrementSection();
          resetFieldIndex();
          return getCurrentSection() ? 'setup' : 'end';
        }

        if (
          field.type === FieldType.FlowFunc &&
          isInFlowFunc &&
          currentFlowController
        ) {
          if (params?.userInput !== undefined) {
            currentFlowController.answerQuestion(params.userInput);

            const stageResult = currentFlowController.OnSuccess();
            if (stageResult !== 'Stage not available yet') {
              setStage(stageResult);
              setIsInFlowFunc(false);
              setCurrentFlowController(null);

              incrementField();
              const nextField = getCurrentField();

              if (!nextField) {
                resetFieldIndex();
                incrementSection();
                const nextSection = getCurrentSection();
                return nextSection ? 'setup' : 'end';
              }

              return 'loop';
            }

            setQuestionBody(currentFlowController.getCurrentQuestion());
            return 'loop';
          }

          return 'loop';
        }

        incrementField();
        const nextField = getCurrentField();

        if (!nextField) {
          resetFieldIndex();
          incrementSection();
          const nextSection = getCurrentSection();
          return nextSection ? 'setup' : 'end';
        }

        return 'loop';
      },

      file: async (params: any) => {
        const { getCurrentField } = useFlowStore.getState();
        const f = getCurrentField();
        if (f?.type === FieldType.Dropdown) {
          return null;
        }
        if (f?.type === FieldType.File || f?.type === FieldType.Video) {
          await UploadFileHandler(params);
        }
      },

      options: () => {
        const { getCurrentField, currentFlowController, isInFlowFunc } =
          useFlowStore.getState();
        const field = getCurrentField();

        if (
          field?.type === FieldType.FlowFunc &&
          isInFlowFunc &&
          currentFlowController
        ) {
          return currentFlowController.getCurrentAnswers();
        }

        return field?.options?.map((o: { value: string }) => o.value) || [];
      },

      chatDisabled: () => {
        const { getCurrentField, currentFlowController } =
          useFlowStore.getState();
        const f = getCurrentField();
        return (
          f?.type === FieldType.File ||
          f?.type === FieldType.Video ||
          f?.type === FieldType.Dropdown ||
          (f?.type === FieldType.FlowFunc && currentFlowController)
        );
      },
    },

    end: {
      message: () => '🎉 Thank you! All sections completed.',
      chatDisabled: true,
    },

    emptyFlow: {
      message: () => 'No section available. An error occurred.',
      chatDisabled: true,
    },
  };
};

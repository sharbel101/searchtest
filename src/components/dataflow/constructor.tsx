'use client';

import { Block } from 'react-chatbotify';
import { chatFlow, FieldType } from './flow';
import { useFlowStore } from './FlowStore';
import { UploadFileHandler } from './UploadFileHandler';
import { fetchAndSetSubFlow } from '../dataflow/dummy/FetchSubFlow';
import MarkdownRenderer, {
  MarkdownRendererBlock,
} from '@rcb-plugins/markdown-renderer';

export const generateChatBotFlow = (): Record<string, Block> => {
  return {
    start: {
      message: () => {
        const { setSections } = useFlowStore.getState();
        const allSections = Object.values(chatFlow);
        setSections(allSections);

        if (allSections.length !== 0) {
          return `**Hi!** We're setting things up! _Loading..._`;
        } else {
          return `**No section available!** \n\n_Error..._`;
        }
      },
      renderMarkdown: ['BOT', 'USER'],
      path: () => {
        const allSections = Object.values(chatFlow);
        return allSections.length !== 0 ? 'setup' : 'emptyFlow';
      },
      chatDisabled: true,
      transition: 2000,
    } as MarkdownRendererBlock,

    setup: {
      message: () => {
        const { setSections, currentSectionIndex, resetFieldIndex } =
          useFlowStore.getState();
        const allSections = Object.values(chatFlow);
        setSections(allSections);
        resetFieldIndex();
        const current = allSections[currentSectionIndex] || null;

        return current
          ? `**Starting section:** \n\n### ${current.sectionTitle}`
          : `**Starting section:** \n\n_Unknown_`;
      },
      renderMarkdown: ['BOT', 'USER'],
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
      chatDisabled: true,
      transition: 2000,
    } as MarkdownRendererBlock,

    loop: {
      message: async () => {
        const {
          getCurrentField,
          getCurrentSection,
          currentFlowController,
          isInFlowFunc,
        } = useFlowStore.getState();

        const field = getCurrentField();
        const section = getCurrentSection();

        if (!field || !field.label) {
          return `**No more fields in this section...**\n\n_Send me anything to jump to the next section._`;
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
            body += `\n\n**Please select one of the following options:**`;
            answers.forEach((answer: string, idx: number) => {
              body += `\n${idx + 1}. ${answer}`;
            });
          }

          return `**${field.label}**\n\n${body}`;
        }

        // Default fallback
        return `**${field.label}**\n\n${field.description || `Please provide ${field.label}`}`;
      },
      renderMarkdown: ['BOT', 'USER'],
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

        // Redirect to chartForm if field has flowInjection and not already in flow func
        if (
          field.type === FieldType.FlowFunc &&
          field.flowInjection &&
          field.flowInjection.type === 'ChartForm' &&
          !isInFlowFunc
        ) {
          return 'chartForm';
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
    } as MarkdownRendererBlock,

    // === New chartForm block dedicated for flowInjection Chart forms (investementStage) ===
    chartForm: {
      message: async () => {
        const { getCurrentField, currentFlowController, isInFlowFunc } =
          useFlowStore.getState();

        const field = getCurrentField();

        if (!field || !field.label) {
          return `**No more subflow fields available.**`;
        }

        if (!isInFlowFunc && field.flowInjection) {
          const subFlowData = await fetchAndSetSubFlow(
            field.flowInjection.name,
            6000,
          );
          return (
            subFlowData || `Subflow **"${field.flowInjection}"** not found.`
          );
        }

        if (isInFlowFunc && currentFlowController) {
          const question = currentFlowController.getCurrentQuestion();
          const answers = currentFlowController.getCurrentAnswers();

          let body = question;
          if (answers.length > 0) {
            body += '\n\n**Please select one of the following options:**';
            answers.forEach((answer: string, idx: number) => {
              body += `\n${idx + 1}. ${answer}`;
            });
          }

          return `**${field.label}**\n\n${body}`;
        }

        return `**${field.label}**\n\n${field.description || `Please provide ${field.label}`}`;
      },
      renderMarkdown: ['BOT', 'USER'],
      path: (params: { userInput?: string }) => {
        const {
          getCurrentField,
          incrementField,
          resetFieldIndex,
          incrementSection,
          getCurrentSection,
          setStage,
          setIsInFlowFunc,
          setCurrentFlowController,
          currentFlowController,
          isInFlowFunc,
          setQuestionBody,
        } = useFlowStore.getState();

        const field = getCurrentField();

        if (!field) {
          // Subflow ended, reset and go back to main flow setup or end
          setIsInFlowFunc(false);
          setCurrentFlowController(null);
          resetFieldIndex();
          incrementSection();
          return getCurrentSection() ? 'setup' : 'end';
        }

        if (
          isInFlowFunc &&
          currentFlowController &&
          params?.userInput !== undefined
        ) {
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
              return getCurrentSection() ? 'setup' : 'end';
            }
            return 'chartForm';
          }

          setQuestionBody(currentFlowController.getCurrentQuestion());
          return 'chartForm';
        }

        return 'chartForm';
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
          (f?.type === FieldType.FlowFunc && currentFlowController !== null)
        );
      },

      file: async (params: any) => {
        const { getCurrentField } = useFlowStore.getState();
        const f = getCurrentField();

        if (f?.type === FieldType.Dropdown) return null;

        if (f?.type === FieldType.File || f?.type === FieldType.Video) {
          await UploadFileHandler(params);
        }
      },
    } as MarkdownRendererBlock,

    end: {
      message: () => `🎉 **Thank you!** All sections completed.`,
      renderMarkdown: ['BOT', 'USER'],
      chatDisabled: true,
    } as MarkdownRendererBlock,

    emptyFlow: {
      message: () => `**No section available.**\n\n_An error occurred._`,
      renderMarkdown: ['BOT', 'USER'],
      chatDisabled: true,
    } as MarkdownRendererBlock,
  };
};

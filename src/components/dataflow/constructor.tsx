'use client';

// import { Block } from 'react-chatbotify';
import { chatFlow, FieldType } from '../data/MainFlow/flow';
import { useFlowStore } from './MainFlowStore';
import { UploadFileHandler } from './UploadFileHandler';
import {
  fetchAndSetChartFormSubFlow,
  fetchAndSetOriginalSubFlow,
} from './SubFlows/FetchSubFlow';
import MarkdownRenderer, { MarkdownRendererBlock } from '@/RCB_MarkDown';

// Type definitions for better type safety
export type PathParams = {
  userInput?: string;
};

interface FileParams {
  // Define file parameter types based on your UploadFileHandler expectations
  [key: string]: any;
}

export const generateChatBotFlow = (): Record<
  string,
  MarkdownRendererBlock
> => {
  return {
    start: {
      message: (): string => {
        const { setSections } = useFlowStore.getState();
        const allSections = Object.values(chatFlow);
        setSections(allSections);

        if (allSections.length !== 0) {
          return `**Hi!** We're setting things up! _Loading..._`;
        } else {
          return `**No section available!** \n\n_Error..._`;
        }
      },
      renderMarkdown: ['BOT', 'USER'] as const,
      path: (): string => {
        const allSections = Object.values(chatFlow);
        return allSections.length !== 0 ? 'setup' : 'emptyFlow';
      },
      chatDisabled: true,
      transition: 750,
    } as MarkdownRendererBlock,

    setup: {
      message: (): string => {
        const {
          setSections,
          currentSectionIndex,
          resetFieldIndex,
          getCurrentSection,
        } = useFlowStore.getState();
        const allSections = Object.values(chatFlow);
        setSections(allSections);
        resetFieldIndex();
        const current = getCurrentSection();

        return current
          ? `**Starting section:** \n\n### ${current.sectionTitle}`
          : `**Starting section:** \n\n_Unknown_`;
      },
      renderMarkdown: ['BOT', 'USER'] as const,
      path: (): string => {
        const { getCurrentSection, goToNextSection, resetFieldIndex } =
          useFlowStore.getState();
        const current = getCurrentSection();

        if (!current) return 'end';

        const fields = Object.values(current.fields);
        console.log(
          `Section "${current.sectionTitle}" has ${fields.length} fields`,
        );

        if (fields.length === 0) {
          // Skip empty sections
          goToNextSection();
          const newSection = useFlowStore.getState().getCurrentSection();
          return newSection ? 'setup' : 'end';
        }

        // Ensure field index is reset before entering loop
        resetFieldIndex();
        return 'loop';
      },
      chatDisabled: true,
      transition: 750,
    } as MarkdownRendererBlock,

    loop: {
      message: async (): Promise<string> => {
        const {
          getCurrentField,
          getCurrentSection,
          currentFlowController,
          isInFlowFunc,
          questionBody,
        } = useFlowStore.getState();

        const field = getCurrentField();
        const section = getCurrentSection();

        // Debug logging
        console.log('Loop - Current section:', section?.sectionTitle);
        console.log('Loop - Current field:', field?.label);

        if (!field?.label) {
          return `**No more fields in this section...**\n\n_Send me anything to jump to the next section._`;
        }

        // Handle FlowFunc with active flow controller
        if (
          field.type === FieldType.FlowFunc &&
          isInFlowFunc &&
          currentFlowController
        ) {
          const answers = currentFlowController.getCurrentAnswers();
          let body = questionBody;

          if (answers.length > 0) {
            body += '\n\n**Please select one of the following options:**';
          }
          return `**${field.label}**\n\n${body}`;
        }

        // Default fallback for other field types
        return `**${field.label}**\n\n${field.description || `Please provide ${field.label}`}`;
      },
      renderMarkdown: ['BOT', 'USER'] as const,
      path: async (params: PathParams): Promise<string> => {
        const {
          getCurrentSection,
          getCurrentField,
          goToNextField,
          goToNextSection,
          resetFieldIndex,
          setCurrentFlowController,
          setIsInFlowFunc,
          currentFlowController,
          isInFlowFunc,
          setStage,
          stage,
          setQuestionBody,
        } = useFlowStore.getState();

        const section = getCurrentSection();
        const field = getCurrentField();

        console.log('Loop path - Section:', section?.sectionTitle);
        console.log('Loop path - Field:', field?.label);
        console.log('Loop path - User input:', params?.userInput);

        if (!section) return 'end';

        if (!field) {
          console.log(
            'No more fields in current section, moving to next section',
          );
          goToNextSection();
          resetFieldIndex();
          const nextSection = getCurrentSection();
          return nextSection ? 'setup' : 'end';
        }

        // Handle ChartForm flow injection
        if (
          field.type === FieldType.FlowFunc &&
          field.flowInjection &&
          field.flowInjection.type === 'ChartForm' &&
          !isInFlowFunc
        ) {
          console.log('Entering ChartForm flow');
          await fetchAndSetChartFormSubFlow(field.flowInjection.name);
          return 'chartForm';
        }

        // Handle OriginalSubFlow injection
        if (
          field.type === FieldType.FlowFunc &&
          field.flowInjection &&
          field.flowInjection.type === 'OriginalSubFlow' &&
          !isInFlowFunc &&
          stage != null &&
          stage !== ''
        ) {
          console.log('Entering OriginalSubFlow');
          await fetchAndSetOriginalSubFlow(field.flowInjection.name, stage);
          return 'OriginalSubFlowLoop';
        }

        // Redirect back to OriginalSubFlow if we're in one
        if (
          field.type === FieldType.FlowFunc &&
          field.flowInjection &&
          field.flowInjection.type === 'OriginalSubFlow' &&
          isInFlowFunc
        ) {
          return 'OriginalSubFlowLoop';
        }

        // Handle user input for active FlowFunc (non-OriginalSubFlow)
        if (
          field.type === FieldType.FlowFunc &&
          isInFlowFunc &&
          currentFlowController &&
          field.flowInjection?.type !== 'OriginalSubFlow'
        ) {
          if (params?.userInput !== undefined) {
            currentFlowController.answerQuestion(params.userInput);

            const stageResult = currentFlowController.OnSuccess();
            if (stageResult !== 'Stage not available yet') {
              setStage(stageResult);
              setIsInFlowFunc(false);
              setCurrentFlowController(null);

              goToNextField();
              const nextField = getCurrentField();

              if (!nextField) {
                goToNextSection();
                resetFieldIndex();
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

        // Handle regular field types - only advance if user provided input or it's a non-input field
        if (
          params?.userInput !== undefined ||
          field.type === FieldType.File ||
          field.type === FieldType.Video ||
          field.type === FieldType.Dropdown
        ) {
          console.log('Processing field and moving to next');
          goToNextField();
          const nextField = getCurrentField();

          if (!nextField) {
            console.log('No more fields, moving to next section');
            goToNextSection();
            resetFieldIndex();
            const nextSection = getCurrentSection();
            return nextSection ? 'setup' : 'end';
          }

          return 'loop';
        }

        // Stay in loop if no input provided for input fields
        return 'loop';
      },

      file: async (params: FileParams): Promise<void> => {
        const { getCurrentField } = useFlowStore.getState();
        const field = getCurrentField();

        if (field?.type === FieldType.Dropdown) {
          return;
        }

        if (field?.type === FieldType.File || field?.type === FieldType.Video) {
          await UploadFileHandler(params);
        }
      },

      options: (): string[] => {
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

      chatDisabled: (): boolean => {
        const { getCurrentField, currentFlowController, isInFlowFunc } =
          useFlowStore.getState();
        const field = getCurrentField();

        return Boolean(
          field?.type === FieldType.File ||
            field?.type === FieldType.Video ||
            field?.type === FieldType.Dropdown ||
            (field?.type === FieldType.FlowFunc &&
              isInFlowFunc &&
              currentFlowController),
        );
      },
    } as MarkdownRendererBlock,

    // === ChartForm block for flowInjection ===
    chartForm: {
      message: (): string => {
        const {
          getCurrentField,
          currentFlowController,
          isInFlowFunc,
          questionBody,
        } = useFlowStore.getState();

        const field = getCurrentField();

        if (!field?.label) {
          return `**No more subflow fields available.**`;
        }

        if (isInFlowFunc && currentFlowController) {
          const answers = currentFlowController.getCurrentAnswers();
          let body = questionBody;

          if (answers.length > 0) {
            body += '\n\n**Please select one of the following options:**';
          }
          return `**${field.label}**\n\n${body}`;
        }

        return `**${field.label}**\n\n${field.description || `Please provide ${field.label}`}`;
      },
      renderMarkdown: ['BOT', 'USER'] as const,
      path: (params: PathParams): string => {
        const {
          getCurrentField,
          goToNextField,
          goToNextSection,
          getCurrentSection,
          setStage,
          setIsInFlowFunc,
          setCurrentFlowController,
          currentFlowController,
          isInFlowFunc,
          setQuestionBody,
          resetFieldIndex,
        } = useFlowStore.getState();

        const field = getCurrentField();

        if (!field) {
          setIsInFlowFunc(false);
          setCurrentFlowController(null);
          goToNextSection();
          resetFieldIndex();
          return getCurrentSection() ? 'setup' : 'end';
        }

        // Handle user input in active subflow
        if (
          isInFlowFunc &&
          currentFlowController &&
          params?.userInput !== undefined
        ) {
          currentFlowController.answerQuestion(params.userInput);

          const stageResult = currentFlowController.OnSuccess();
          if (stageResult !== 'Stage not available yet') {
            // Subflow completed
            setStage(stageResult);
            setIsInFlowFunc(false);
            setCurrentFlowController(null);

            goToNextField();
            const nextField = getCurrentField();

            if (!nextField) {
              goToNextSection();
              resetFieldIndex();
              return getCurrentSection() ? 'setup' : 'end';
            }
            return 'loop';
          } else {
            // Subflow ongoing
            setQuestionBody(currentFlowController.getCurrentQuestion());
            return 'chartForm';
          }
        }

        if (isInFlowFunc && currentFlowController) {
          return 'chartForm';
        }

        console.warn("Unexpected state in chartForm path. Returning 'end'.", {
          field,
          isInFlowFunc,
          currentFlowController,
        });
        return 'end';
      },

      options: (): string[] => {
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

      chatDisabled: (): boolean => {
        const { getCurrentField, currentFlowController, isInFlowFunc } =
          useFlowStore.getState();
        const field = getCurrentField();

        return Boolean(
          field?.type === FieldType.File ||
            field?.type === FieldType.Video ||
            field?.type === FieldType.Dropdown ||
            (field?.type === FieldType.FlowFunc &&
              isInFlowFunc &&
              currentFlowController !== null),
        );
      },

      file: async (params: FileParams): Promise<void> => {
        const { getCurrentField } = useFlowStore.getState();
        const field = getCurrentField();

        if (field?.type === FieldType.Dropdown) return;

        if (field?.type === FieldType.File || field?.type === FieldType.Video) {
          await UploadFileHandler(params);
        }
      },
    } as MarkdownRendererBlock,

    end: {
      message: (): string => `🎉 **Thank you!** All sections completed.`,
      renderMarkdown: ['BOT', 'USER'] as const,
      chatDisabled: true,
    } as MarkdownRendererBlock,

    emptyFlow: {
      message: (): string =>
        `**No section available.**\n\n_An error occurred._`,
      renderMarkdown: ['BOT', 'USER'] as const,
      chatDisabled: true,
    } as MarkdownRendererBlock,

    OriginalSubFlowLoop: {
      message: async (): Promise<string> => {
        const {
          getCurrentSubFlowField,
          currentFlowController,
          isInFlowFunc,
          questionBody,
        } = useFlowStore.getState();

        const field = getCurrentSubFlowField();

        if (!field?.label) {
          return `**No more fields in this section...**\n\n_Send me anything to jump to the next section._`;
        }

        if (
          field.type === FieldType.FlowFunc &&
          isInFlowFunc &&
          currentFlowController
        ) {
          const answers = currentFlowController.getCurrentAnswers();
          let body = questionBody;

          if (answers.length > 0) {
            body += `\n\n**Please select one of the following options:**`;
          }
          return `**${field.label}**\n\n${body}`;
        }

        return `**${field.label}**\n\n${field.description || `Please provide ${field.label}`}`;
      },
      renderMarkdown: ['BOT', 'USER'] as const,
      path: async (params: PathParams): Promise<string> => {
        const {
          getCurrentSubFlowSection,
          getCurrentSubFlowField,
          goToNextSubFlowField,
          goToNextSubFlowSection,
          getCurrentField,
          getCurrentSection,
          goToNextField,
          goToNextSection,
          setCurrentFlowController,
          setIsInFlowFunc,
          currentFlowController,
          isInFlowFunc,
          setStage,
          stage,
          setQuestionBody,
          resetFieldIndex,
        } = useFlowStore.getState();

        const SubFlowSections = getCurrentSubFlowSection();
        const SubFlowfield = getCurrentSubFlowField();

        if (!SubFlowfield) {
          goToNextSubFlowSection();
          return getCurrentSubFlowSection()
            ? 'OriginalSubFlowLoop'
            : 'resumeMainFlow';
        }

        // Process the field only if user provided input or it's a non-input field
        if (
          params?.userInput !== undefined ||
          SubFlowfield.type === FieldType.File ||
          SubFlowfield.type === FieldType.Video ||
          SubFlowfield.type === FieldType.Dropdown
        ) {
          goToNextSubFlowField();
          const nextField = getCurrentSubFlowField();

          if (!nextField) {
            goToNextSubFlowSection();
            const nextSubFlowSection = getCurrentSubFlowSection();

            if (nextSubFlowSection) {
              return 'OriginalSubFlowLoop';
            } else {
              // Subflow finished, resume main flow
              setIsInFlowFunc(false);
              setCurrentFlowController(null);

              goToNextField();
              const mainFlowField = getCurrentField();

              if (!mainFlowField) {
                goToNextSection();
                resetFieldIndex();
                const mainFlowNextSection = getCurrentSection();

                if (!mainFlowNextSection) {
                  return 'end';
                }
                return 'setup';
              }
              return 'loop';
            }
          }
        }

        return 'OriginalSubFlowLoop';
      },

      file: async (params: FileParams): Promise<void> => {
        const { getCurrentSubFlowField } = useFlowStore.getState();
        const field = getCurrentSubFlowField();

        if (field?.type === FieldType.Dropdown) {
          return;
        }

        if (field?.type === FieldType.File || field?.type === FieldType.Video) {
          await UploadFileHandler(params);
        }
      },

      options: (): string[] => {
        const { getCurrentSubFlowField, currentFlowController, isInFlowFunc } =
          useFlowStore.getState();
        const field = getCurrentSubFlowField();

        if (
          field?.type === FieldType.FlowFunc &&
          isInFlowFunc &&
          currentFlowController
        ) {
          return currentFlowController.getCurrentAnswers();
        }

        return field?.options?.map((o: { value: string }) => o.value) || [];
      },

      chatDisabled: (): boolean => {
        const { getCurrentSubFlowField, currentFlowController, isInFlowFunc } =
          useFlowStore.getState();
        const field = getCurrentSubFlowField();

        return Boolean(
          field?.type === FieldType.File ||
            field?.type === FieldType.Video ||
            field?.type === FieldType.Dropdown ||
            (field?.type === FieldType.FlowFunc &&
              isInFlowFunc &&
              currentFlowController),
        );
      },
    } as MarkdownRendererBlock,
  };
};

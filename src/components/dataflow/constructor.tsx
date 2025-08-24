'use client';

// import { Block } from 'react-chatbotify';
import { chatFlow, FieldType } from '../data/MainFlow/flow';

import { UploadFileHandler } from './UploadFileHandler';

import {
  fetchAndSetChartFormSubFlow,
  fetchAndSetOriginalSubFlow,
} from './FetchSubFlow';
import MarkdownRenderer, { MarkdownRendererBlock } from '@/RCB_MarkDown';

import { useFlowStore } from '../data/ZustandStores/MainFlowStore';
import { ChartFormUseFlowStore } from '../data/ZustandStores/ChartFormFlowStore';
import { useSubFlowStore } from '../data/ZustandStores/InjectedFlowStore';
import { getDynamicText, extractKeyInfo } from './openai';
import { SidebarFlowStore } from '../data/ZustandStores/SideBarFlowStore';

import saveQuestionAnswer from './Main/UploadeAnswers';

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
        const { setSideBarSections } = SidebarFlowStore.getState();
        const allSections = Object.values(chatFlow);
        setSideBarSections(allSections);

        if (allSections.length !== 0) {
          return `**Hi!** We're setting things up! _Loading..._`;
        }
        return `**No section available!** \n\n_Error..._`;
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
        const { setSections, getCurrentSection, setAllSections } =
          useFlowStore.getState();
        const allSections = Object.values(chatFlow);
        setSections(allSections);
        const DBsections = setAllSections();

        console.log('THese are the DATABASE sections ', DBsections);

        const current = getCurrentSection();

        return current
          ? `**Starting section:** \n\n### ${current.sectionTitle}`
          : `**Starting section:** \n\n_Unknown_`;
      },
      renderMarkdown: ['BOT', 'USER'] as const,
      path: (): string => {
        const {
          getCurrentSection,
          goToNextSection,
          isInFlowFunc,
          currentFlowController,
        } = useFlowStore.getState();
        const current = getCurrentSection();

        if (!current) return 'end';

        const fields = Object.values(current.fields);
        // console.log(
        //   `Section "${current.sectionTitle}" has ${fields.length} fields`,
        // );

        if (fields.length === 0) {
          // Skip empty sections
          // console.log('This section does not have fields in it...');
          goToNextSection();
          const newSection = useFlowStore.getState().getCurrentSection();
          return newSection ? 'setup' : 'end';
        }

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
        // console.log('Loop - Current section:', section?.sectionTitle);
        // console.log('Loop - Current field:', field?.label);

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
        const dynamicDescription = await getDynamicText(
          field.description || `Please provide ${field.label}`,
        );
        return `**${field.label}**\n\n${dynamicDescription}`;
      },
      renderMarkdown: ['BOT', 'USER'] as const,
      path: async (params: PathParams): Promise<string> => {
        const {
          getCurrentSection,
          getCurrentField,
          goToNextField,
          goToNextSection,
          setCurrentFlowController,
          setIsInFlowFunc,
          currentFlowController,
          isInFlowFunc,
          setStage,
          stage,
          setQuestionBody,
        } = useFlowStore.getState();

        // const {  } = ChartFormUseFlowStore.getState()

        const section = getCurrentSection();
        const field = getCurrentField();

        // console.log('Loop path - Section:', section?.sectionTitle);
        // console.log('Loop path - Field:', field?.label);
        // console.log('Loop path - User input:', params?.userInput);

        if (!section) return 'end';

        if (field?.nextField == null) {
          if (field?.flowInjection?.type === 'ChartForm') {
            // console.log(
            //   `In this Section: ${section} and this field: ${field} we have injection of type: ${field.flowInjection.type} `,
            // );
            await fetchAndSetChartFormSubFlow(field.flowInjection.name);
            return 'chartForm';
          }
          // console.log(
          //   'No more fields in current section, moving to next section',
          // );

          if (
            field?.flowInjection?.type === 'OriginalSubFlow' &&
            stage != null &&
            stage !== ''
          ) {
            // console.log(
            //   `In this Section: ${section} and this field: ${field} we have injection of type: ${field.flowInjection.type} `,
            // );
            await fetchAndSetOriginalSubFlow(field.flowInjection.name, stage);
            return 'OriginalSubFlowLoop';
          }
          // console.log(
          //   'No more fields in current section, moving to next section',
          // );

          //HONE I THINK IT WILL MAKE AN ERROR AT THE LAST NODE
          //lezem ghayyer enno eza ma fi nextSection return false aw null w hott if statement hone la ta3mol return lal "end"
          goToNextSection();

          return 'setup';
        }

        // If we have user input, save it against the current question.
        if (params.userInput !== undefined) {
          let answerToSave = params.userInput; // Default to raw input

          // If extractionType is defined for this field, extract the info
          if (field.extractionType) {
            answerToSave = await extractKeyInfo(
              params.userInput,
              field.extractionType,
            );
          }

          // The `flowEngine` already saves the data for FlowFunc types,
          // so we only need to save it for other types.
          if (field.type !== FieldType.FlowFunc) {
            // console.log("This is the save Question and Answer in the constructor");
            saveQuestionAnswer(field.label, answerToSave); // MODIFIED: Use answerToSave
          }
        }

        if (
          field.type === FieldType.FlowFunc &&
          field.flowInjection &&
          field.flowInjection.type === 'ChartForm' &&
          !isInFlowFunc
        ) {
          // console.log('Entering ChartForm flow');
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
          // console.log('Entering OriginalSubFlow');
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
          // console.log('Processing field and moving to next');
          goToNextField();
          const nextField = getCurrentField();

          if (!nextField) {
            // console.log('No more fields, moving to next section');
            goToNextSection();
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

        if (
          field?.type === FieldType.Dropdown ||
          field?.type === FieldType.Text ||
          field?.type === FieldType.Url ||
          field?.type === FieldType.FlowFunc
        ) {
          return;
        }

        if (field?.type === FieldType.File || field?.type === FieldType.Video) {
          // Handle multiple files if present

          if (params.files && Array.isArray(params.files)) {
            for (const file of params.files) {
              if (file && file instanceof File) {
                await UploadFileHandler(file);
              } else {
                console.warn(
                  'Invalid file object passed to file handler:',
                  file,
                );
              }
            }
          }
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
      transition: () => {
        const { getCurrentField } = useFlowStore.getState();

        const field = getCurrentField();
        if (field?.type === FieldType.FlowFunc) {
          return 750;
        } else return null;
      },
    } as MarkdownRendererBlock,

    // === ChartForm block for flowInjection ===
    chartForm: {
      message: (): string => {
        const { getCurrentField, currentFlowController, isInFlowFunc } =
          useFlowStore.getState();

        const { questionBody } = ChartFormUseFlowStore.getState();

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
          goToNextSection,
          getCurrentSection,
          setStage,
          setIsInFlowFunc,
          setCurrentFlowController,
          currentFlowController,
          isInFlowFunc,
        } = useFlowStore.getState();

        const { getCurrentChartFormField, goToNextField, setQuestionBody } =
          ChartFormUseFlowStore.getState();

        const field = getCurrentChartFormField();

        // if (!field) {
        //   console.log('No more fields in the Injected Flow. Returning to the main flow.');
        //   setIsInFlowFunc(false);
        //   setCurrentFlowController(null);
        //   goToNextSection();
        //   return getCurrentSection() ? 'setup' : 'end';
        // }

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
            const nextField = getCurrentChartFormField();

            if (!nextField) {
              goToNextSection();
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

        if (
          field?.type === FieldType.Dropdown ||
          field?.type === FieldType.Text ||
          field?.type === FieldType.Url ||
          field?.type === FieldType.FlowFunc
        ) {
          return;
        }

        if (field?.type === FieldType.File || field?.type === FieldType.Video) {
          // Handle multiple files if present
          if (params.files && Array.isArray(params.files)) {
            for (const file of params.files) {
              if (file && file instanceof File) {
                await UploadFileHandler(file);
              } else {
                console.warn(
                  'Invalid file object passed to file handler:',
                  file,
                );
              }
            }
          }
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
        const { currentFlowController, isInFlowFunc, questionBody } =
          useFlowStore.getState();

        const { getCurrentSubFlowField } = useSubFlowStore.getState();

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
          getCurrentField,
          getCurrentSection,
          goToNextField,
          goToNextSection,
          setCurrentFlowController,
          setIsInFlowFunc,
        } = useFlowStore.getState();

        const {
          getCurrentSubFlowSection,
          getCurrentSubFlowField,
          goToNextSubFlowField,
          goToNextSubFlowSection,
        } = useSubFlowStore.getState();

        const subFlowField = getCurrentSubFlowField();

        if (!subFlowField) {
          // console.log('No SubFlowField found — returning to main flow');

          const mainField = goToNextField();
          if (mainField === null || mainField === undefined) {
            const mainSection = goToNextSection();
            if (mainSection === null || mainSection === undefined) return 'end';
          }

          return 'loop';
        }

        // Handle sequential subflow fields
        if (subFlowField.nextField) {
          goToNextSubFlowField();
          return 'OriginalSubFlowLoop';
        }

        // Reached end of a subflow section, try to go to next subflow section
        const hasNextSubFlowSection = goToNextSubFlowSection();
        if (
          hasNextSubFlowSection === null ||
          hasNextSubFlowSection === undefined
        ) {
          // Subflow is done, go back to main flow
          setIsInFlowFunc(false);
          setCurrentFlowController(null);

          let mainField = goToNextField();
          if (mainField === null || mainField === undefined) {
            const mainSection = goToNextSection();
            if (mainSection === null || mainSection === undefined) return 'end';
            return 'setup';
          }

          return 'loop';
        }

        return 'OriginalSubFlowLoop';
      },

      file: async (params: FileParams): Promise<void> => {
        const { getCurrentSubFlowField } = useSubFlowStore.getState();
        const field = getCurrentSubFlowField();

        if (
          field?.type === FieldType.Dropdown ||
          field?.type === FieldType.Text ||
          field?.type === FieldType.Url ||
          field?.type === FieldType.FlowFunc
        ) {
          return;
        }

        if (field?.type === FieldType.File || field?.type === FieldType.Video) {
          if (params.files && Array.isArray(params.files)) {
            for (const file of params.files) {
              // Validate file before processing
              if (file && file instanceof File) {
                await UploadFileHandler(file);
              } else {
                console.warn(
                  'Invalid file object passed to file handler:',
                  file,
                );
              }
            }
          }
        }
      },

      options: (): string[] => {
        const { getCurrentSubFlowField } = useSubFlowStore.getState();

        const { currentFlowController, isInFlowFunc } = useFlowStore.getState();
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
        const { getCurrentSubFlowField } = useSubFlowStore.getState();

        const { currentFlowController, isInFlowFunc } = useFlowStore.getState();
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

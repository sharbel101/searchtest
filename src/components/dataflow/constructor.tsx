'use client';

//for testing purposes this is the user's id:
export const user_id = 'c275f6da-7e9c-433a-9ed4-8fdc705c9695';

// import { Block } from 'react-chatbotify';
import { chatFlow, FieldType } from '../Zustand store data/MainFlow/flow';

import { UploadFileHandler } from './UploadFileHandler';
import {
  fetchAndSetChartFormSubFlow,
  fetchAndSetOriginalSubFlow,
} from './FetchSubFlow';
import { MarkdownRendererBlock } from '@/RCB_MarkDown';

// import { useFlowStore } from '../Zustand store data/ZustandStores/MainFlowStore'; //for the offline version

// import { ChartFormUseFlowStore } from '../Zustand store data/ZustandStores/ChartFormFlowStore'; //for the offline version

// import { useSubFlowStore } from '../Zustand store data/ZustandStores/InjectedFlowStore';
import { useInjectedDBFlowStore } from '@/components/database/zustand_containers/InjectedFlowStore';

import { getDynamicText, extractKeyInfo } from '../AI features/openai';
import { SidebarFlowStore } from '../database/zustand_containers/SideBarFlowStore';

import saveQuestionAnswer from '../database/UploadeAnswers';
import {
  getAllMainFields,
  getAllMainSections,
  getAllOrderedMainSections,
  getCurrentDependencies,
  getCurrentMainField,
  getCurrentMainSection,
  getCurrentState,
  getQuestionBody,
  goToNextMainField,
  goToNextMainSection,
  setCurrentState,
} from '../database/mainFlowDBfunc';
import {
  getCurrentInjectedField,
  getCurrentInjectedFlowAnswers,
  goToNextInjectedField,
  goToNextInjectedSection,
} from '../database/injectedFlowDBfunc';
import { useMainDBFlowStore } from '../database/zustand_containers/MainFlowStore';

import {
  AnswerChartFormQuestion,
  getCurrentChartFormAnswers,
  getCurrentChartFormField,
} from '../database/chartformFlowDBfunc';

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
      message: async () => {
        const { setSideBarSections } = SidebarFlowStore.getState();
        const allSections = await getAllOrderedMainSections();
        console.log(
          'these are the extracted sections from the db: ',
          allSections,
        );
        setSideBarSections(allSections);

        if (allSections.length !== 0) {
          return `**Hi!** We're setting things up! _Loading..._`;
        }
        return `**No section available!** \n\n_Error..._`;
      },
      renderMarkdown: ['BOT', 'USER'] as const,
      path: async () => {
        const allSections = await getAllMainSections();
        return allSections.length !== 0 ? 'setup' : 'emptyFlow';
      },
      chatDisabled: true,
      transition: 750,
    } as MarkdownRendererBlock,

    setup: {
      message: async () => {
        const { setSections } = useMainDBFlowStore.getState();
        const allSections = await getAllMainSections();
        setSections(allSections);

        const current = await getCurrentMainSection(user_id);

        if (!current) {
          return null;
        }

        const allSectionFields = await getAllMainFields(current.id);
        console.log("these are all the section's field: ", allSectionFields);

        return current
          ? `**Starting section:** \n\n### ${current.sectiontitle}`
          : `**Starting section:** \n\n_Unknown_`;
      },
      renderMarkdown: ['BOT', 'USER'] as const,
      path: async () => {
        const current_section = await getCurrentMainSection(user_id);

        if (!current_section) return 'end';

        const field = await getCurrentMainField(user_id);
        // console.log(
        //   `Section "${current.sectionTitle}" has ${fields.length} fields`,
        // );

        console.log('this is the current field from setup object', field);

        // if (field?.nextfield === null || !field ) {
        //   // Skip empty sections
        //   // console.log('This section does not have fields in it...');
        //   const newSection = await goToNextMainSection(user_id);
        //   return newSection ? 'setup' : 'end';
        // }

        return 'loop';
      },
      chatDisabled: true,
      transition: 750,
    } as MarkdownRendererBlock,

    loop: {
      message: async () => {
        const { currentFlowController, isInFlowFunc, questionBody } =
          useMainDBFlowStore.getState();

        const field = await getCurrentMainField(user_id);

        // Debug logging
        // console.log('Loop - Current section:', section?.sectionTitle);
        // console.log('Loop - Current field:', field?.label);

        if (!field?.label) {
          return `**No more fields in this section...**\n\n_Send me anything to jump to the next section._`;
        }

        console.log('this is the field message: ', field.label);

        // Handle FlowFunc with active flow controller
        if (
          field.type === FieldType.flowfunc &&
          isInFlowFunc &&
          currentFlowController
        ) {
          const answers = await getCurrentChartFormAnswers(field.id);
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
      path: async (params: PathParams): Promise<string | null> => {
        const {
          getCurrentField,
          setIsInFlowFunc,
          isInFlowFunc,
          setStage,
          // stage,
          setQuestionBody,
        } = useMainDBFlowStore.getState();

        const current_state = await getCurrentState(user_id);
        if (!current_state) {
          console.warn("can't have a current state in loop's path");
          return 'end';
        }

        const section = await getCurrentMainSection(user_id);
        if (!section) {
          console.warn("can't have a current section in loop's path");
          return 'end';
        }

        const field = await getCurrentMainField(user_id);
        if (!field) {
          console.warn("can't have a current field in loop's path");
          return 'end';
        }

        // const stage = current_state?.stage;

        if (field?.nextfield === null) {
          if (field?.flowinjection?.type === 'ChartForm') {
            await fetchAndSetChartFormSubFlow(field.flowinjection.name);
            return 'chartForm';
          }

          if (field?.flowinjection?.type === 'OriginalSubFlow') {
            const dependencies = await getCurrentDependencies(user_id, field);

            await fetchAndSetOriginalSubFlow(
              user_id,
              field.flowinjection.name,
              dependencies,
            );
            return 'OriginalSubFlowLoop';
          }

          //HONE I THINK IT WILL MAKE AN ERROR AT THE LAST NODE
          //lezem ghayyer enno eza ma fi nextSection return false aw null w hott if statement hone la ta3mol return lal "end"
          // goToNextSection(); //i removed this function.... le2ila halle
          await goToNextMainSection(user_id);
          return 'setup';
        }

        // If we have user input, save it against the current question.
        if (params.userInput !== undefined) {
          let answerToSave = params.userInput; // Default to raw input
          if (field.type !== FieldType.flowfunc) {
            saveQuestionAnswer(
              user_id,
              answerToSave,
              field.id,
              null,
              field.extractiontype,
            );
          }
        }

        if (
          field.type === FieldType.flowfunc &&
          field.flowinjection &&
          field.flowinjection.type === 'ChartForm' &&
          !current_state?.is_flow_func
        ) {
          // console.log('Entering ChartForm flow');
          await fetchAndSetChartFormSubFlow(field.flowinjection.name);
          return 'chartForm';
        }

        // Handle OriginalSubFlow injection
        if (
          field.type === FieldType.flowfunc &&
          field.flowinjection &&
          field.flowinjection.type === 'OriginalSubFlow' &&
          !current_state?.is_flow_func
        ) {
          const dependencies = await getCurrentDependencies(user_id, field);
          await fetchAndSetOriginalSubFlow(
            user_id,
            field.flowinjection.name,
            dependencies,
          );
          return 'OriginalSubFlowLoop';
        }

        // Redirect back to OriginalSubFlow if we're in one
        if (
          field.type === FieldType.flowfunc &&
          field.flowinjection &&
          field.flowinjection.type === 'OriginalSubFlow' &&
          current_state?.is_flow_func
        ) {
          return 'OriginalSubFlowLoop';
        }

        if (
          field.type === FieldType.flowfunc &&
          current_state?.is_flow_func &&
          field.flowinjection?.type !== 'OriginalSubFlow'
        ) {
          if (params?.userInput !== undefined) {
            await AnswerChartFormQuestion(params.userInput);

            const dependencies = await getCurrentDependencies(user_id, field);
            const stage = dependencies?.investment_stage ?? null;

            if (stage) {
              setStage(stage); //for offline (no DB)
              setCurrentState({
                user_id: user_id,
                flow_type: '',
                current_chartform_id: null,
                is_flow_func: false,
              }); // for the database

              setIsInFlowFunc(false); // for ofline

              const nextField = goToNextMainField(user_id);

              if (!nextField) {
                const nextSection = await goToNextMainSection(user_id);
                return nextSection ? 'setup' : 'end';
              }
              return 'loop';
            }
            const questionBody = await getQuestionBody(user_id);
            setQuestionBody(questionBody);
            return 'loop';
          }
          return 'loop';
        }

        // Handle regular field types - only advance if user provided input or it's a non-input field
        if (
          params?.userInput !== undefined ||
          field.type === FieldType.file ||
          field.type === FieldType.video ||
          field.type === FieldType.dropdown
        ) {
          // console.log('Processing field and moving to next');
          await goToNextMainField(user_id);
          const nextField = getCurrentField();

          if (!nextField) {
            // console.log('No more fields, moving to next section');
            // goToNextSection();
            // const nextSection = getCurrentSection();
            const nextSection = goToNextMainSection(user_id);
            if (!nextSection) {
              return 'end';
            }
            return 'setup';
          }

          return 'loop';
        }

        // Stay in loop if no input provided for input fields
        return 'loop';
      },

      file: async (params: FileParams): Promise<void> => {
        // const { getCurrentField } = useFlowStore.getState();

        // const field = getCurrentField();
        const field = await getCurrentMainField(user_id);

        if (
          field?.type === FieldType.dropdown ||
          field?.type === FieldType.text ||
          field?.type === FieldType.url ||
          field?.type === FieldType.flowfunc
        ) {
          return;
        }

        if (field?.type === FieldType.file || field?.type === FieldType.video) {
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

      options: async () => {
        // const field = getCurrentField();
        const field = await getCurrentMainField(user_id);
        if (!field?.options) return [];
        return Object.values(field.options);
      },

      chatDisabled: async () => {
        // const { getCurrentField, isInFlowFunc } = useMainDBFlowStore.getState();

        const field = await getCurrentMainField(user_id);
        // const state = await getCurrentState(user_id);

        return Boolean(
          field?.type === FieldType.file ||
            field?.type === FieldType.video ||
            field?.type === FieldType.dropdown ||
            field?.type === FieldType.flowfunc,
        );
      },
      transition: async () => {
        // const { getCurrentField } = useMainDBFlowStore.getState();

        const field = await getCurrentMainField(user_id);
        if (field?.type === FieldType.flowfunc) {
          return 750;
        } else return null;
      },
    } as MarkdownRendererBlock,

    // === ChartForm block for flowinjection ===
    chartForm: {
      message: async (): Promise<string> => {
        const { getCurrentField, currentFlowController, isInFlowFunc } =
          useMainDBFlowStore.getState();

        const field = await getCurrentChartFormField(user_id);
        const current_state = await getCurrentState(user_id);

        if (!field?.question) {
          return `**No more subflow fields available.**`;
        }

        if (current_state?.is_flow_func) {
          const answers = await getCurrentChartFormAnswers(field.id);
          let body = '';
          if (answers.length > 0) {
            body += '**Please select one of the following options:**';
          }
          return `**${field.question}**\n\n${body}`;
        }

        return `**${field.question}**`;
      },
      renderMarkdown: ['BOT', 'USER'] as const,
      path: async (params: PathParams) => {
        const field = await getCurrentChartFormField(user_id);
        const state = await getCurrentState(user_id);

        if (!state) {
          console.warn('No extraxted states in the chart form object');
        }

        if (!field) {
          console.log(
            'No more fields in the chartform Flow. Returning to the main flow.',
          );
          await setCurrentState({
            user_id: user_id,
            is_flow_func: false,
            current_injected_flow_field_id: null,
            current_injected_flow_section_id: null,
            flow_type: '',
          });
          await goToNextMainSection(user_id);
          return (await getCurrentMainSection(user_id)) ? 'setup' : 'end';
        }

        // Handle user input in active subflow
        if (state?.is_flow_func && params?.userInput !== undefined) {
          const stage = await AnswerChartFormQuestion(params?.userInput);

          // const state = await getCurrentState(user_id);

          if (stage) {
            // Subflow completed
            const nextField = await goToNextMainField(user_id);

            if (!nextField) {
              await goToNextMainSection(user_id);
              return 'setup';
            }
            return 'loop';
          } else {
            return 'chartForm';
          }
        }

        if (state?.is_flow_func) {
          return 'chartForm';
        }

        console.warn(
          "Unexpected state in chartForm path. Returning 'end'.",
          state?.is_flow_func,
        );
        return 'end';
      },

      options: async () => {
        const { isInFlowFunc } = useMainDBFlowStore.getState();

        const field = await getCurrentChartFormField(user_id);
        if (!field) {
          console.warn('No field provided for options in chartform');
          return [];
        }

        const state = await getCurrentState(user_id);

        // If flow func: fetch possible answers
        if (state?.is_flow_func) {
          const answers = await getCurrentChartFormAnswers(field.id);
          const filtered_answers = answers.map((a) => a.answer);
          return filtered_answers;
        }

        // If field has static options
        if (field?.answers) {
          return Object.values(field.answers);
        }

        return [];
      },

      chatDisabled: true, //the chartform's input is only as a dropdown input so we don't need any chat here

      file: () => {
        return null;
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
        const field = await getCurrentInjectedField(user_id);
        const state = await getCurrentState(user_id);

        if (!field?.label) {
          return `**No more fields in this section...**\n\n_Send me anything to jump to the next section._`;
        }

        if (field.type === FieldType.flowfunc && state?.is_flow_func) {
          const answers = await getCurrentInjectedFlowAnswers(field.id);
          let body = '';

          if (answers.length > 0) {
            body += `**Please select one of the following options:**`;
          }
          return `**${field.label}**\n\n${body}`;
        }

        return `**${field.label}**\n\n${field.description || `Please provide ${field.label}`}`;
      },
      renderMarkdown: ['BOT', 'USER'] as const,
      path: async (params: PathParams): Promise<string> => {
        const subFlowField = await getCurrentInjectedField(user_id);

        if (!subFlowField) {
          // console.log('No SubFlowField found — returning to main flow');

          const mainField = await goToNextMainField(user_id);
          if (mainField === null || mainField === undefined) {
            const mainSection = await goToNextMainSection(user_id);
            if (mainSection === null || mainSection === undefined) return 'end';
          }

          return 'loop';
        }

        // Handle sequential subflow fields
        if (subFlowField.nextfield) {
          await goToNextInjectedField(user_id);
          return 'OriginalSubFlowLoop';
        }

        // Reached end of a subflow section, try to go to next subflow section
        const hasNextSubFlowSection = await goToNextInjectedSection(user_id);
        if (
          hasNextSubFlowSection === null ||
          hasNextSubFlowSection === undefined
        ) {
          // Subflow is done, go back to main flow
          await setCurrentState({
            user_id: user_id,
            is_flow_func: false,
            current_injected_flow_field_id: null,
            current_injected_flow_section_id: null,
            flow_type: '',
          });

          let mainField = await goToNextMainField(user_id);
          if (mainField === null || mainField === undefined) {
            const mainSection = await goToNextMainSection(user_id);
            if (mainSection === null || mainSection === undefined) return 'end';
            return 'setup';
          }

          return 'loop';
        }

        return 'OriginalSubFlowLoop';
      },

      file: async (params: FileParams): Promise<void> => {
        const field = await getCurrentInjectedField(user_id);

        if (
          field?.type === FieldType.dropdown ||
          field?.type === FieldType.text ||
          field?.type === FieldType.url ||
          field?.type === FieldType.flowfunc
        ) {
          return;
        }

        if (field?.type === FieldType.file || field?.type === FieldType.video) {
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

      options: async () => {
        const { currentFlowController, isInFlowFunc } =
          useInjectedDBFlowStore.getState();
        const field = await getCurrentInjectedField(user_id);

        const state = await getCurrentState(user_id);

        if (field?.type === FieldType.flowfunc && state?.is_flow_func) {
          return getCurrentInjectedFlowAnswers(field.id);
        }

        return field?.options || [];
      },

      chatDisabled: async () => {
        const { currentFlowController, isInFlowFunc } =
          useInjectedDBFlowStore.getState();
        const field = await getCurrentInjectedField(user_id); //getCurrentSubFlowField();

        const state = await getCurrentState(user_id);

        return Boolean(
          field?.type === FieldType.file ||
            field?.type === FieldType.video ||
            field?.type === FieldType.dropdown ||
            (field?.type === FieldType.flowfunc && state?.is_flow_func),
        );
      },
    } as MarkdownRendererBlock,
  };
};

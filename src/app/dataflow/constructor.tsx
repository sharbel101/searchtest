'use client';

import { Block, Flow } from 'react-chatbotify';
import { chatFlow, FieldType } from './flow';
import { flowInjection } from './flowInjection';
import { UploadFileHandler } from './UploadFileHandler';
import SectionComponent from '../UIcomponents/SectionComponent';
import { useFlowStore } from './FlowStore';

export const generateChatBotFlow = (): Record<string, Block> => {
  return {
    start: {
      component: () => {
        const { setSections } = useFlowStore.getState();

        const allSections = Object.values(chatFlow);
        setSections(allSections);

        if (allSections.length === 0) {
          return (
            <SectionComponent title="Error!" body="No Sections provided!" />
          );
        }
        return (
          <SectionComponent
            title="Hi, shall we begin?"
            body="Send me anything to continue"
          />
        );
      },
      path: 'setup',
      transition: () => {
        return 4000;
      },
    },

    setup: {
      component: () => {
        const {
          setSections,
          setSectionOpened,
          currentSectionIndex,
          resetFieldIndex,
          incrementField,
        } = useFlowStore.getState();

        const allSections = Object.values(chatFlow);
        setSections(allSections);
        setSectionOpened(currentSectionIndex);
        resetFieldIndex();

        const current = allSections[currentSectionIndex] || null;

        return (
          <SectionComponent
            title={`Starting section ${current?.sectionTitle ?? 'Unknown'}`}
            body=""
          />
        );
      },
      path: () => {
        const { getCurrentSection, incrementSection, resetFieldIndex } =
          useFlowStore.getState();

        const current = getCurrentSection();
        console.log(
          'DEBUG: this is the current section:' + current?.sectionTitle,
        );
        if (!current) return 'end';

        const fields = Object.values(current.fields);
        if (fields.length === 0) {
          useFlowStore.getState().advanceToNextSection();
          const newSection = useFlowStore.getState().getCurrentSection();
          console.log(
            'DEBUG: Advanced to next section. New section:',
            newSection,
          );
          return newSection ? 'setup' : 'end';
        }

        return 'loop';
      },

      transition: 1000,
    },

    loop: {
      component: (params: any) => {
        const {
          getCurrentField,
          getCurrentSection,
          setCurrentFlowController,
          setIsInFlowFunc,
          currentFlowController,
          isInFlowFunc,
        } = useFlowStore.getState();

        const field = getCurrentField();
        const section = getCurrentSection();

        console.log('DEBUG: this is the current Field:' + field);

        if (!field || !field.label) {
          console.warn('FIELD IS MISSING OR INVALID:', field);
          return (
            <SectionComponent
              title="No more fields in this section..."
              body="Send me anything to jump to the next section"
            />
          );
        }

        if (field.type === FieldType.FlowFunc && field.flowInjection) {
          //TODOs
          // const flowData= await fetchFlowInjectionData(field.flowInjection)
          // setInStore(flowData)

          if (!isInFlowFunc || !currentFlowController) {
            try {
              setCurrentFlowController(null);
              setIsInFlowFunc(false);

              let controller;
              if (typeof field.flowInjection === 'string') {
                if (field.flowInjection === 'investmentStageFlow') {
                  controller = flowInjection();
                } else {
                  throw new Error(
                    `Unknown flow injection: ${field.flowInjection}`,
                  );
                }
              } else if (typeof field.flowInjection === 'function') {
                controller = (field.flowInjection as () => any)();
              } else {
                throw new Error('Invalid flowInjection type');
              }

              setCurrentFlowController(controller);
              setIsInFlowFunc(true);
            } catch (error) {
              console.error(`Error initializing FlowFunc:`, error);
              return (
                <SectionComponent
                  title="Error"
                  body={`Error loading ${field.label}. Please try again.`}
                />
              );
            }
          }

          const controller = useFlowStore.getState().currentFlowController;
          if (controller) {
            const question = controller.getCurrentQuestion();
            const answers = controller.getCurrentAnswers();

            let body = question;
            if (answers.length > 0) {
              body += '\n\nPlease select one of the following options:';
              answers.forEach((answer: string, index: number) => {
                body += `\n${index + 1}. ${answer}`;
              });
            }

            return <SectionComponent title={field.label} body={body} />;
          }
        }

        return (
          <SectionComponent
            title={field.label}
            body={field.description || `Please provide ${field.label}`}
          />
        );
      },

      path: (params: any) => {
        const {
          getCurrentSection,
          getCurrentField,
          incrementField,
          incrementSection,
          resetFieldIndex,
          setSections,
          currentFlowController,
          isInFlowFunc,
          setCurrentFlowController,
          setIsInFlowFunc,
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

            const result = currentFlowController.OnSuccess();

            if (result !== 'Stage not available yet') {
              setIsInFlowFunc(false);
              setCurrentFlowController(null);
              incrementSection();
              resetFieldIndex();
              return 'setup';
            }

            return 'loop';
          }

          return 'loop';
        }

        if (params?.userInput) {
          const updatedSections = Object.values(chatFlow).map((sec) => {
            if (sec.sectionId === section.sectionId) {
              return {
                ...sec,
                fields: {
                  ...sec.fields,
                  [field.id]: {
                    ...sec.fields[field.id],
                    value: params.userInput,
                  },
                },
              };
            }
            return sec;
          });
          setSections(updatedSections);
        }

        incrementField();
        const nextField = getCurrentField();

        if (!nextField) {
          resetFieldIndex(); // reset field index so that getCurrentField() returns null
          incrementSection(); // advance to the next section

          const nextSection = getCurrentSection();
          return nextSection ? 'setup' : 'end';
        }

        return 'loop';
      },

      file: async (params: any) => {
        const { getCurrentField } = useFlowStore.getState();
        const f = getCurrentField();

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

      transition: () => {
        const {
          getCurrentField,
          getCurrentSection,
          setCurrentFlowController,
          setIsInFlowFunc,
          currentFlowController,
          isInFlowFunc,
        } = useFlowStore.getState();
        const field = getCurrentField();
        if (!field || !field.label) return 2000;
      },
    },

    end: {
      message: 'Thank you! All sections completed.',
      chatDisabled: true,
    },
  };
};

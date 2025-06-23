'use client';

import { Flow } from 'react-chatbotify';
import { chatFlow, FieldType } from './flow';
import { flowInjection } from './flowInjection';
import { UploadFileHandler } from './UploadFileHandler';
import SectionComponent from '../UIcomponents/SectionComponent';
import { useFlowStore } from './FlowStore';

// FlowFunc state management
let currentFlowController: any = null;
let isInFlowFunc = false;

export const generateChatBotFlow = (): Flow => ({
  start: {
    component: (
      <SectionComponent
        title="Hi, Let's Begin!"
        body="Send me anything to continue."
      />
    ),
    path: 'setup',
  },

  setup: {
    component: () => {
      const { setSections, setSectionOpened, currentSectionIndex } =
        useFlowStore.getState();

      // load all sections once
      const allSections = Object.values(chatFlow);
      setSections(allSections);

      // mark this section opened
      setSectionOpened(currentSectionIndex);

      const current = allSections[currentSectionIndex];
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
      if (!current) {
        // no sections at all
        return 'end';
      }

      const fields = Object.values(current.fields);
      if (fields.length === 0) {
        // skip empty section
        incrementSection();
        resetFieldIndex();
        return 'setup';
      }

      return 'loop';
    },
  },

  loop: {
    component: (params: any) => {
      const { getCurrentField, getCurrentSection } = useFlowStore.getState();

      const field = getCurrentField();
      const section = getCurrentSection();

      if (!field) {
        return (
          <SectionComponent
            title="No more fields in this section..."
            body="Send me anything to jump to the next section"
          />
        );
      }

      // Handle FlowFunc fields
      if (field.type === FieldType.FlowFunc && field.flowInjection) {
        if (!isInFlowFunc) {
          // Initialize the flow controller
          try {
            // Get the flow controller from flowInjection
            currentFlowController = flowInjection();
            isInFlowFunc = true;
            console.log(
              'DEBUG: FlowFunc controller initialized for:',
              field.flowInjection,
            );
          } catch (error) {
            console.error('DEBUG: Error initializing FlowFunc:', error);
            return (
              <SectionComponent
                title="Error"
                body={`Error loading ${field.label}. Please try again.`}
              />
            );
          }
        }

        if (currentFlowController) {
          // Get current question and answers
          const question = currentFlowController.getCurrentQuestion();
          const answers = Object.keys(
            currentFlowController.getCurrentAnswers(),
          );

          console.log('DEBUG: Current question:', question);
          console.log('DEBUG: Available answers:', answers);

          // Format the message with buttons for answers
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
      } = useFlowStore.getState();

      const section = getCurrentSection();
      if (!section) {
        return 'end';
      }

      const field = getCurrentField();

      // If no more fields in this section, advance to next
      if (!field) {
        incrementSection();
        resetFieldIndex();
        return useFlowStore.getState().getCurrentSection() ? 'setup' : 'end';
      }

      // Handle FlowFunc field responses
      if (
        field.type === FieldType.FlowFunc &&
        isInFlowFunc &&
        currentFlowController
      ) {
        if (params && params.input) {
          console.log('DEBUG: FlowFunc received answer:', params.input);

          // Process the answer through the controller
          currentFlowController.answerQuestion(params.input);

          // Check if the flow is complete
          const result = currentFlowController.OnSuccess();
          console.log('DEBUG: FlowFunc OnSuccess result:', result);

          if (result !== 'Stage not available yet') {
            // FlowFunc is complete - store the result
            console.log('DEBUG: FlowFunc completed with result:', result);

            // Update the section's field value in the store
            const updatedSections = Object.values(chatFlow).map((sec) => {
              if (sec.sectionId === section.sectionId) {
                return {
                  ...sec,
                  fields: {
                    ...sec.fields,
                    [field.id]: {
                      ...sec.fields[field.id],
                      value: result,
                    },
                  },
                };
              }
              return sec;
            });
            setSections(updatedSections);

            // Mark that we're done with this FlowFunc
            isInFlowFunc = false;
            currentFlowController = null;

            // Move to next field or section
            incrementField();
            const nextField = getCurrentField();
            if (!nextField) {
              incrementSection();
              resetFieldIndex();
              return getCurrentSection() ? 'setup' : 'end';
            }
            return 'loop';
          }
          // If not complete, stay in loop to show the next question
          return 'loop';
        }
        return 'loop';
      }

      // Handle regular field
      if (params && params.input) {
        // Update the section's field value in the store
        const updatedSections = Object.values(chatFlow).map((sec) => {
          if (sec.sectionId === section.sectionId) {
            return {
              ...sec,
              fields: {
                ...sec.fields,
                [field.id]: {
                  ...sec.fields[field.id],
                  value: params.input,
                },
              },
            };
          }
          return sec;
        });
        setSections(updatedSections);
      }

      // Move to next field or section
      incrementField();
      const nextField = getCurrentField();
      if (!nextField) {
        incrementSection();
        resetFieldIndex();
        return getCurrentSection() ? 'setup' : 'end';
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
      const { getCurrentField } = useFlowStore.getState();
      const field = getCurrentField();

      // Handle FlowFunc options
      if (
        field?.type === FieldType.FlowFunc &&
        isInFlowFunc &&
        currentFlowController
      ) {
        return Object.keys(currentFlowController.getCurrentAnswers());
      }

      // Handle regular field options
      return field?.options?.map((o) => o.value) || [];
    },

    chatDisabled: () => {
      const { getCurrentField } = useFlowStore.getState();
      const f = getCurrentField();
      return f?.type === FieldType.File || f?.type === FieldType.Video;
    },
  },

  end: {
    message: 'Thank you! All sections completed.',
    chatDisabled: true,
  },
});

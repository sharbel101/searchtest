'use client';
import { Flow } from 'react-chatbotify';
import { chatFlow, FieldType, FormField, FlowSection } from './flow';
import { UploadFileHandler } from './UploadFileHandler';
import SectionComponent from '../UIcomponents/SectionComponent';

// Track where we are in the flow

// Move those variables to Zustand store.
let currentSectionIndex = 0;
let currentFieldIndex = 0;
let sections: FlowSection[] = [];
let currentFields: FormField[] = [];
let currentAnswers: Record<string, { path?: string; setStage: string }>[] = [];

// Store active flow controllers for FlowFunc fields
let flowControllers: { [key: string]: any } = {};

export const generateChatBotFlow = (): Flow => {
  return {
    // 1. Start the flow
    start: {
      component: (
        <SectionComponent
          title={"Hi, Let's Begin!"}
          body={'Send me anyhting to continue.'}
        />
      ),
      path: 'setup',
    },

    // 2. Setup: Convert chatFlow object to arrays for easy looping
    setup: {
      component: () => {
        sections = Object.values(chatFlow);

        const currentSection = sections[currentSectionIndex];
        currentFields = Object.values(currentSection.fields);

        console.log(
          `DEBUG: Section ${currentSectionIndex}: ${currentSection.sectionTitle}`,
        );
        console.log(`DEBUG: Fields in section: ${currentFields.length}`);
        return (
          <SectionComponent
            title={`Starting section ${currentSection.sectionTitle}`}
            body={``}
          />
        );
      },
      path: () => {
        // If no more sections, end
        if (currentSectionIndex >= sections.length) {
          return 'completedSection';
        }

        // If current section has no fields, skip to next
        if (currentFields.length === 0) {
          currentSectionIndex++;
          currentFieldIndex = 0;
          return 'setup';
        }

        return 'loop';
      },
    },

    completedSection: {
      component: (
        <SectionComponent
          title="Section Completed"
          body="You have completed this section. Send me anything to continue."
        />
      ),
      path: 'loop',
    },

    // 3. Main loop: Handle each field one by one
    loop: {
      component: (params: any) => {
        // Safety check
        if (currentSectionIndex >= sections.length) {
          return <SectionComponent title={`No more sections!`} body={``} />;
        }

        const section = sections[currentSectionIndex];
        currentFields = Object.values(section.fields);

        // Check if we're past the last field in this section
        if (currentFieldIndex >= currentFields.length) {
          currentSectionIndex++;
          currentFieldIndex = 0;
          return (
            <SectionComponent
              title={`Completed!`}
              body={`This section is completed, Send me anything to continue`}
            />
          );
        }

        const field = currentFields[currentFieldIndex];

        console.log(
          `DEBUG: Processing field ${currentFieldIndex}: ${field.label} (${field.type})`,
        );

        // Handle FlowFunc fields
        if (field.type === FieldType.FlowFunc && field.flowInjection) {
          const controllerId = field.id;

          // Create controller if first time
          if (!flowControllers[controllerId]) {
            flowControllers[controllerId] = field.flowInjection((result) => {
              console.log(`FlowFunc completed with result: ${result}`);
            });
          }

          // Process user's answer if they gave one
          if (params.userInput) {
            flowControllers[controllerId].answerQuestion(params.userInput);
          }

          // Return current question
          return flowControllers[controllerId].getCurrentQuestion();
        }

        // For regular fields
        return field.description || `Please provide ${field.label}`;
      },

      path: (params: any) => {
        // Safety check
        if (currentSectionIndex >= sections.length) {
          return 'end';
        }

        const section = sections[currentSectionIndex];
        currentFields = Object.values(section.fields);

        // If we're past the last field, move to next section
        if (currentFieldIndex >= currentFields.length) {
          console.log(
            `DEBUG: Section ${currentSectionIndex} completed, moving to next`,
          );

          return 'setup';
        }

        const field = currentFields[currentFieldIndex];

        // Handle FlowFunc completion
        if (field.type === FieldType.FlowFunc) {
          const controller = flowControllers[field.id];
          if (controller) {
            const question = controller.getCurrentQuestion();

            // If FlowFunc is done, clean up and move to next field
            if (
              !question ||
              question.includes('complete') ||
              question.includes('done')
            ) {
              console.log(`DEBUG: FlowFunc ${field.id} completed`);
              delete flowControllers[field.id];
              currentFieldIndex++;
              return 'loop';
            }
          }

          // FlowFunc still has questions, stay in loop
          return 'loop';
        }

        // For regular fields, move to next field after getting input
        console.log(
          `DEBUG: Regular field completed, moving from field ${currentFieldIndex} to ${currentFieldIndex + 1}`,
        );
        currentFieldIndex++;
        return 'loop';
      },

      /*

        THIS COULD WORK IF WE HAVE FIELDS AS GLOBAL VARIABLE

      ...(field.type === FieldType.File && {
        file: (params: string) => UploadFileHandler(params),
      }),


      */
      file: async (params: any) => {
        const section = sections[currentSectionIndex];
        if (!section || !section.fields) {
          console.warn(
            'Invalid section or missing fields at index',
            currentSectionIndex,
          );
          return;
        }

        const currentFields = Object.values(section.fields);
        const field = currentFields[currentFieldIndex];

        if (field?.type === FieldType.File || field.type === FieldType.Video) {
          await UploadFileHandler(params); // handles upload side effect
        } else {
          console.warn('Expected file field, but got:', field?.type);
        }
      },

      options: () => {
        const section = sections[currentSectionIndex];
        if (!section || !section.fields) return [];

        const currentFields = Object.values(section.fields);
        const field = currentFields[currentFieldIndex];

        const allAnswers: string[] = [];

        if (field?.options) {
          field.options.forEach((option: { id: string; value: string }) => {
            allAnswers.push(option.value);
          });
        }

        return allAnswers;
      },

      // WHEN THE INPUT EXPECTED IS FILE IT WILL DISABLE THE INPUT TEXT BOX
      chatDisabled: () => {
        const section = sections[currentSectionIndex];
        const currentFields = Object.values(section.fields);
        const field = currentFields[currentFieldIndex];

        if (field.type === FieldType.File || field.type === FieldType.Video) {
          return true;
        }
        return false;
      },
    },

    // 4. End
    end: {
      message: 'Thank you! All sections completed.',
      chatDisabled: true,
    },
  };
};

'use client';

import { chatFlow, FieldType, FormField, FlowSection } from './flow';

// Track where we are in the flow
let currentSectionIndex = 0;
let currentFieldIndex = 0;
let sections: FlowSection[] = [];
let currentFields: FormField[] = [];

// Store active flow controllers for FlowFunc fields
let flowControllers: { [key: string]: any } = {};

export const generateChatBotFlow = () => {
  return {
    // 1. Start the flow
    start: {
      message: "Let's begin!",
      path: 'setup',
    },

    // 2. Setup: Convert chatFlow object to arrays for easy looping
    setup: {
      message: () => {
        sections = Object.values(chatFlow);

        // Check if we have sections
        if (currentSectionIndex >= sections.length) {
          return 'All sections completed!';
        }

        const currentSection = sections[currentSectionIndex];
        currentFields = Object.values(currentSection.fields);

        console.log(
          `DEBUG: Section ${currentSectionIndex}: ${currentSection.sectionTitle}`,
        );
        console.log(`DEBUG: Fields in section: ${currentFields.length}`);

        return `Starting section: ${currentSection.sectionTitle}`;
      },
      path: () => {
        // If no more sections, end
        if (currentSectionIndex >= sections.length) {
          return 'end';
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

    // 3. Main loop: Handle each field one by one
    loop: {
      message: (params: any) => {
        // Safety check
        if (currentSectionIndex >= sections.length) {
          return 'No more sections!';
        }

        const section = sections[currentSectionIndex];
        currentFields = Object.values(section.fields);

        // Check if we're past the last field in this section
        if (currentFieldIndex >= currentFields.length) {
          return 'This section is completed, moving to next section...';
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
          currentSectionIndex++;
          currentFieldIndex = 0;
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
    },

    // 4. End
    end: {
      message: 'Thank you! All sections completed.',
      chatDisabled: true,
    },
  };
};

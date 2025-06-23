'use client';

import { chatFlow } from './flow';

// Simple types matching your flow structure
type FormField = {
  type: string;
  id: string;
  label: string;
  description?: string;
  flowInjection?: (onSuccess: (result: string) => void) => {
    getCurrentQuestion: () => string;
    answerQuestion: (answer: string) => void;
  };
};

type FlowSection = {
  sectionTitle: string;
  fields: { [key: string]: FormField };
};

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
        sections = Object.values(chatFlow); // Get all sections as array
        currentSectionIndex = 0;
        currentFieldIndex = 0;
        return `Starting ${sections[0]?.sectionTitle || 'first section'}`;
      },
      path: 'loop',
    },

    // 3. Main loop: Handle each field one by one
    loop: {
      message: (params: any) => {
        // Get current section
        const section = sections[currentSectionIndex];
        if (!section) return 'All done!';

        // Get fields of current section as array
        currentFields = Object.values(section.fields);
        const field = currentFields[currentFieldIndex];
        if (!field) return 'Section complete!';

        // Handle FlowFunc fields (like your investment stage)
        if (field.type === 'flowfunc' && field.flowInjection) {
          const controllerId = field.id;

          // Create controller if first time
          if (!flowControllers[controllerId]) {
            flowControllers[controllerId] = field.flowInjection((result) => {
              console.log(`Got result: ${result}`);
              // Store result somewhere if needed
            });
          }

          // Process user's answer if they gave one
          if (params.userInput) {
            flowControllers[controllerId].answerQuestion(params.userInput);
          }

          // Return current question
          return flowControllers[controllerId].getCurrentQuestion();
        }

        // For regular fields, just show description
        return field.description || `Please provide ${field.label}`;
      },

      path: (params: any) => {
        const section = sections[currentSectionIndex];
        if (!section) return 'end'; // No more sections

        const field = currentFields[currentFieldIndex];
        if (!field) {
          // No more fields in section, go to next section
          currentSectionIndex++;
          currentFieldIndex = 0;
          return currentSectionIndex < sections.length ? 'setup' : 'end';
        }

        // For FlowFunc, check if it's done
        if (field.type === 'flowfunc') {
          const controller = flowControllers[field.id];
          const question = controller?.getCurrentQuestion();

          // If no more questions, move to next field
          if (!question || question.includes('complete')) {
            delete flowControllers[field.id]; // Clean up
            currentFieldIndex++;
            return 'loop';
          }

          return 'loop'; // Stay for next question
        }

        // For regular fields, move to next field after user input
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

'use client';
import { Flow } from 'react-chatbotify';
import { chatFlow, FieldType } from './flow';
import { UploadFileHandler } from './UploadFileHandler';
import SectionComponent from '../UIcomponents/SectionComponent';
import { useFlowStore } from './FlowStore';

export const generateChatBotFlow = (): Flow => {
  const currentFieldIndex = useFlowStore.getState().currentFieldIndex;
  const currentSectionIndex = useFlowStore.getState().currentSectionIndex;
  const setSections = useFlowStore.getState().setSections;
  const incrementField = useFlowStore.getState().incrementField;
  const incrementSection = useFlowStore.getState().incrementSection;
  const resetFieldIndex = useFlowStore.getState().resetFieldIndex;
  const getCurrentField = useFlowStore.getState().getCurrentField;
  const getCurrentSection = useFlowStore.getState().getCurrentSection;
  const setController = useFlowStore.getState().setController;
  const getController = useFlowStore.getState().getController;
  const clearController = useFlowStore.getState().clearController;

  return {
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
        const sections = Object.values(chatFlow);
        setSections(sections);

        const current = getCurrentSection();
        const sectionTitle = current?.sectionTitle ?? 'Unknown';
        return (
          <SectionComponent
            title={`Starting section ${sectionTitle}`}
            body=""
          />
        );
      },
      path: () => {
        const current = getCurrentSection();
        if (!current) return 'completedSection';

        const fields = Object.values(current.fields);
        if (fields.length === 0) {
          incrementSection();
          resetFieldIndex();
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

    loop: {
      component: (params: any) => {
        const field = getCurrentField();
        if (!field) {
          return <SectionComponent title="No more sections!" body="" />;
        }

        if (field.type === FieldType.FlowFunc && field.flowInjection) {
          const controllerId = field.id;
          let controller = getController(controllerId);

          if (!controller) {
            controller = field.flowInjection((result: string) => {
              console.log(`FlowFunc result: ${result}`);
            });
            setController(controllerId, controller);
          }

          if (params.userInput) controller.answerQuestion(params.userInput);
          return controller.getCurrentQuestion();
        }

        return field.description || `Please provide ${field.label}`;
      },

      path: (params: any) => {
        const field = getCurrentField();
        if (!field) return 'end';

        if (field.type === FieldType.FlowFunc) {
          const controller = getController(field.id);
          const question = controller?.getCurrentQuestion?.();

          if (!question || /complete|done/i.test(question)) {
            clearController(field.id);
            incrementField();
            return 'loop';
          }

          return 'loop';
        }

        incrementField();
        return 'loop';
      },

      file: async (params: any) => {
        const field = getCurrentField();
        if (field?.type === FieldType.File || field?.type === FieldType.Video) {
          await UploadFileHandler(params);
        } else {
          console.warn('Expected file field, got:', field?.type);
        }
      },

      options: () => {
        const field = getCurrentField();
        return field?.options?.map((opt) => opt.value) || [];
      },

      chatDisabled: () => {
        const field = getCurrentField();
        return (
          field?.type === FieldType.File || field?.type === FieldType.Video
        );
      },
    },

    end: {
      message: 'Thank you! All sections completed.',
      chatDisabled: true,
    },
  };
};

'use client';

import { Block } from 'react-chatbotify';
import { chatFlow, FieldType } from './flow';
import { useFlowStore } from './FlowStore';
import { createFlowController, QuestionNode } from './flowEngine';
import { UploadFileHandler } from './UploadFileHandler';
import MarkdownRenderer, {
  MarkdownRendererBlock,
} from '@rcb-plugins/markdown-renderer';
import SectionComponent from '../UIcomponents/SectionComponent';

export const generateChatBotFlow = (): Record<string, Block> => {
  return {
    start: {
      component: () => {
        const { setSections } = useFlowStore.getState();
        const allSections = Object.values(chatFlow);
        setSections(allSections);

        if (allSections.length !== 0) {
          return (
            <div className="p-4 bg-cyan-50 rounded-xl shadow">
              <h1 className="text-xl font-light text-cyan-600 mb-2">
                Hi! We&apos;re setting things up!
              </h1>
              <h3 className="text-sm font-light text-cyan-400">Loading...</h3>
            </div>
          );
        } else {
          return (
            <div className="p-4 bg-red-50 rounded-xl shadow">
              <h1 className="text-xl font-light text-red-600 mb-2">
                No section available!
              </h1>
              <h3 className="text-sm font-light text-red-400">Error...</h3>
            </div>
          );
        }
      },
      renderMarkdown: ['BOT', 'USER'],
      path: () => {
        const allSections = Object.values(chatFlow);
        return allSections.length !== 0 ? 'setup' : 'emptyFlow';
      },
      transition: 2000,
    } as MarkdownRendererBlock,

    setup: {
      component: () => {
        const { setSections, currentSectionIndex, resetFieldIndex } =
          useFlowStore.getState();
        const allSections = Object.values(chatFlow);
        setSections(allSections);
        resetFieldIndex();
        const current = allSections[currentSectionIndex] || null;

        return (
          <div className="p-4">
            <h2 className="text-xl font-light text-cyan-400">
              Starting section: {current?.sectionTitle ?? 'Unknown'}
            </h2>
          </div>
        );
      },
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
      transition: 2000,
    },

    loop: {
      component: () => {
        const {
          getCurrentField,
          getCurrentSection,
          setSubFlowByName,
          setCurrentFlowController,
          setIsInFlowFunc,
          currentFlowController,
          isInFlowFunc,
          setQuestionBody,
        } = useFlowStore.getState();

        const field = getCurrentField();
        const section = getCurrentSection();

        if (!field || !field.label) {
          return (
            <div className="p-4 bg-cyan-50 rounded-xl shadow-md">
              <h3 className="text-base font-light text-cyan-600 mb-2">
                No more fields in this section...
              </h3>
              <p className="text-xs text-gray-600">
                Send me anything to jump to the next section.
              </p>
            </div>
          );
        }

        // Handle injected flow (FlowFunc) start
        if (
          field.type === FieldType.FlowFunc &&
          field.flowInjection &&
          !isInFlowFunc
        ) {
          const subFlow =
            useFlowStore.getState().allSubFlows?.[field.flowInjection];
          if (subFlow) {
            setSubFlowByName(field.flowInjection);

            const flowController = createFlowController(subFlow);

            // Initialize controller in zustand
            setCurrentFlowController(flowController);
            setIsInFlowFunc(true);

            // Set initial question body to display
            const initialQuestion = flowController.getCurrentQuestion();
            setQuestionBody(initialQuestion);

            // Compose body with question and options for display
            const answers = flowController.getCurrentAnswers();
            let body = initialQuestion;
            if (answers.length > 0) {
              body += '\n\nPlease select one of the following options:';
              answers.forEach((answer: string, idx: number) => {
                body += `\n${idx + 1}. ${answer}`;
              });
            }

            return <SectionComponent title={field.label} body={body} />;
          } else {
            return <p>Subflow &quot;{field.flowInjection}&quot; not found.</p>;
          }
        }

        // When inside injected subflow, render current question and answers
        if (
          field.type === FieldType.FlowFunc &&
          isInFlowFunc &&
          currentFlowController
        ) {
          const question = currentFlowController.getCurrentQuestion();
          const answers = currentFlowController.getCurrentAnswers();

          let body = question;
          if (answers.length > 0) {
            body += '\n\nPlease select one of the following options:';
            answers.forEach((answer: string, idx: number) => {
              body += `\n${idx + 1}. ${answer}`;
            });
          }

          return <SectionComponent title={field.label} body={body} />;
        }

        // Default rendering for normal fields: use label + description
        return (
          <SectionComponent
            title={field.label}
            body={field.description || `Please provide ${field.label}`}
          />
        );
      },

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

        // Inside injected subflow flow
        if (
          field.type === FieldType.FlowFunc &&
          isInFlowFunc &&
          currentFlowController
        ) {
          if (params?.userInput !== undefined) {
            currentFlowController.answerQuestion(params.userInput);

            // Check if stage is set after answering
            const stageResult = currentFlowController.OnSuccess();
            if (stageResult !== 'Stage not available yet') {
              setStage(stageResult);

              // Exit subflow
              setIsInFlowFunc(false);
              setCurrentFlowController(null);

              // Continue main flow
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

            // Continue inside subflow if no stage set yet
            setQuestionBody(currentFlowController.getCurrentQuestion());
            return 'loop';
          }

          return 'loop';
        }

        // Normal flow: increment fields and sections
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
    },

    end: {
      component: () => (
        <div className="p-4 bg-green-50 rounded-xl shadow text-center">
          <h2 className="text-xl font-light text-green-600 mb-2">
            🎉 Thank you!
          </h2>
          <p className="text-xs text-gray-700">All sections completed.</p>
        </div>
      ),
      chatDisabled: true,
    },

    emptyFlow: {
      component: () => (
        <div className="p-4 bg-yellow-50 rounded-xl shadow text-center">
          <h2 className="text-xl font-light text-yellow-600 mb-2">
            No section available
          </h2>
          <p className="text-xs text-yellow-500">An error occurred.</p>
        </div>
      ),
      chatDisabled: true,
    },
  };
};

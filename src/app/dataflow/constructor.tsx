'use client';

import { Flow } from 'react-chatbotify';
import { chatFlow, FieldType } from './flow';
import { UploadFileHandler } from './UploadFileHandler';
import SectionComponent from '../UIcomponents/SectionComponent';
import { useFlowStore } from './FlowStore';

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
      const { getCurrentField } = useFlowStore.getState();

      const field = getCurrentField();
      if (!field) {
        return (
          <SectionComponent
            title="No more fields In this section..."
            body="Send me anything to jump to the next section"
          />
        );
      }

      if (field.type === FieldType.FlowFunc && field.flowInjection) {
        useFlowStore.getState().setSubFlow(field.flowInjection);
      }

      return field.description || `Please provide ${field.label}`;
    },

    path: (params: any) => {
      const {
        getCurrentSection,
        getCurrentField,
        incrementField,
        incrementSection,
        resetFieldIndex,
      } = useFlowStore.getState();

      const section = getCurrentSection();
      if (!section) {
        return 'end';
      }

      const field = getCurrentField();

      // 1) if no more fields in this section, advance to next
      if (!field) {
        incrementSection();
        resetFieldIndex();

        // if there *is* another section, go setup; else end
        return useFlowStore.getState().getCurrentSection() ? 'setup' : 'end';
      }

      // 2) if FlowFunc, only advance when complete
      // if (field.type === FieldType.FlowFunc) {

      //   }
      //   return 'loop';
      // }

      // 3) regular field → just step forward
      incrementField();
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
      return getCurrentField()?.options?.map((o) => o.value) || [];
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

'use client';

import React from 'react';
import { generateChatBotFlow } from '../../dataflow/constructor';
import { useFlowStore } from '@/components/Zustand store data/ZustandStores/MainFlowStore';
import ChatBotComponent, { Flow } from '@/ChatBotFork';
import MarkdownRenderer, { MarkdownRendererBlock } from '@/RCB_MarkDown';
import { styles } from './ChatStyles';

export default function Chat() {
  // ——————————————`
  // 1) STORE HOOKS
  // ——————————————
  const sections = useFlowStore((s) => s.sections);
  const currentIdx = useFlowStore((s) => s.currentSectionId);

  console.log('sections:', sections, 'currentIdx:', currentIdx);

  // ——————————————
  // 2) DERIVE STATE DIRECTLY
  // ——————————————
  // Calculate the current section title based on the store data.

  const currentSection = sections.find(
    (section) => section.sectionId === currentIdx,
  );
  const currentSectionTitle = currentSection?.sectionTitle || 'getting started';

  // ——————————————
  // 3) PLUGINS
  // ——————————————
  const pluginConfig = { autoConfig: true };
  //const plugins = [MarkdownRendererComponent(pluginConfig)];

  // ——————————————
  // 4) SETTINGS
  // ——————————————
  const settings = {
    notification: {
      disabled: false,
      defaultToggledOn: false,
      volume: 0.2,
      icon: () => {
        return (
          <span
            className="icon-notification-on"
            aria-label="notification-on"
            role="img"
          />
        );
      },
      iconDisabled: () => {
        return (
          <span
            className="icon-notification-off"
            aria-label="notification-off"
            role="img"
          />
        );
      },
    },
    voice: { disabled: true },

    header: {
      showAvatar: false,
      buttons: [],
      closeChatIcon: () => {
        return 'x';
      },
    },

    footer: {
      text: '',
    },

    userBubble: { simulateStream: true, streamSpeed: 50 },
    botBubble: { simulateStream: true, streamSpeed: 50 },

    simulateStream: true,
    isOpen: true,
    general: {
      embedded: true,
      primaryColor: '#42b0c5',
      secondaryColor: '#491d8d',
      fontFamily: 'Arial, sans-serif',
      showHeader: true,
    },
    chatHistory: {
      disabled: false,
      storageKey: 'concepts_settings',
    },
    chatWindow: { showScrollbar: true },
    device: { desktopEnabled: true },
    chatInput: {
      sendButtonIcon: () => {
        return (
          <span className="icon-SendButton" aria-label="Send" role="img" />
        );
      },
    },
    fileAttachment: {},
  };

  // ——————————————
  // 5) RENDER
  // ——————————————
  const customFlow = generateChatBotFlow();

  return (
    <ChatBotComponent
      // 🚨 Add key={currentIdx} to force the component to re-mount when the section index changes.
      //IT DID NOT WORK... Because it will rerender the whole chatbot and all the past history of other sections will disappear
      settings={settings}
      styles={styles}
      flow={customFlow as Flow} //not the best practice but it works
      plugins={[MarkdownRenderer()]}
    />
  );
}

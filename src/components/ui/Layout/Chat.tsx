'use client';

import React from 'react';
import { generateChatBotFlow } from '../../dataflow/constructor';
import { useFlowStore } from '../../dataflow/FlowStore';
import ChatBotComponent from 'react-chatbotify';
//import ChatBotComponent from '@/ChatBotFork';
import MarkdownRendererComponent from '@rcb-plugins/markdown-renderer';
import { styles } from './ChatStyles';

export default function Chat() {
  // ——————————————
  // 1) STORE HOOKS
  // ——————————————
  const sections = useFlowStore((s) => s.sections);
  const currentIdx = useFlowStore((s) => s.currentSectionIndex);
  console.log('sections:', sections, 'currentIdx:', currentIdx);
  const currentSection =
    sections[currentIdx]?.sectionTitle || 'Getting Started';

  // ——————————————
  // 2) PLUGINS
  // ——————————————
  const pluginConfig = { autoConfig: true };
  const plugins = [MarkdownRendererComponent(pluginConfig)];

  // ——————————————
  // 3) SETTINGS
  // ——————————————
  const settings = {
    notification: { disabled: true },
    voice: { disabled: true },

    header: {
      showAvatar: false,
      buttons: [],
      closeChatIcon: '×',
      title: (
        <div style={{ color: '#FFF', lineHeight: 1.2 }}>
          <span style={{ fontSize: 16, fontWeight: 600 }}>
            {currentSection}
          </span>
        </div>
      ),
    },

    footer: { text: '' },
    userBubble: { simulateStream: true, streamSpeed: 30 },
    botBubble: { simulateStream: true, streamSpeed: 30 },
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
      disabled: true, // disables chat history and hides the load chat history button
      storageKey: 'concepts_settings',
    },
    chatWindow: { showScrollbar: true },
    device: { desktopEnabled: true },
    chatInput: {
      sendButtonIcon: () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8h8M8 3l5 5-5 5"
            stroke="#FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  };

  const customFlow = generateChatBotFlow();

  return (
    <ChatBotComponent
      settings={settings}
      styles={styles}
      flow={customFlow}
      plugins={plugins}
    />
  );
}

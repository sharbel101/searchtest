'use client';

import React, { useEffect } from 'react';
import { generateChatBotFlow } from '../../dataflow/constructor';
import { useFlowStore } from '@/components/dataflow/FlowStore';
import dynamic from 'next/dynamic';
import ChatBotComponent from 'react-chatbotify';

import MarkdownRendererComponent from '@rcb-plugins/markdown-renderer';

export default function Chat() {
  // const {

  //   MarkdownRendererComponent,

  //   setMarkdownRendererComponent,
  // } = useFlowStore();

  // useEffect(() => {
  //   // Only load components if they haven't been loaded yet
  //   // This prevents re-importing on every re-render if they're already in the store
  //   if (  !MarkdownRendererComponent) {
  //     async function loadComponents() {

  //       const MarkdownRendererModule = await import(
  //         '@rcb-plugins/markdown-renderer'
  //       );
  //       setMarkdownRendererComponent(MarkdownRendererModule.default);
  //     }
  //     loadComponents();
  //   }
  // }, [

  //   MarkdownRendererComponent,

  //   setMarkdownRendererComponent,
  // ]); // Dependencies for useEffect

  // if ( !MarkdownRendererComponent) {
  //   return <div>Loading chatbot...</div>; // Show loading state while components are being fetched
  // }

  const pluginConfig = {
    autoConfig: true,
  };

  // Now use the components from the store
  const plugins = [MarkdownRendererComponent(pluginConfig)];

  const settings = {
    footer: {
      text: '',
    },
    userBubble: {
      simulateStream: true,
      streamSpeed: 30,
    },
    botBubble: {
      simulateStream: true,
      streamSpeed: 30,
    },
    simulateStream: true,
    isOpen: true,
    general: {
      embedded: true,
      primaryColor: '#42b0c5',
      secondaryColor: '#491d8d',
      fontFamily: 'Arial, sans-serif',
    },
    audio: {
      disabled: false,
    },
    chatHistory: {
      storageKey: 'concepts_settings',
    },
    chatWindow: {
      showScrollbar: true,
    },
    device: {
      desktopEnabled: true,
    },
  };

  const styles = {
    headerStyle: {
      background: '#1f2937',
      color: '#ffffff',
      padding: '12px 16px',
      fontWeight: '600',
      fontFamily: 'Inter, sans-serif',
      borderBottom: '1px solid #374151',
      borderRadius: '0px',
    },
    chatWindowStyle: {
      backgroundColor: '#111827',
      height: '100vh',
      width: 'auto',
      overflowY: 'auto' as const,
      fontFamily: 'Inter, sans-serif',
      borderRadius: '0px',
    },
    bodyStyle: {
      padding: '16px',
      backgroundColor: '#111827',
      color: '#f9fafb',
      fontFamily: 'Inter, sans-serif',
    },
    botBubbleStyle: {
      backgroundColor: '#1f2937',
      color: '#f9fafb',
      padding: '8px 12px',
      marginBottom: '8px',
      fontWeight: '500',
      maxWidth: '70%',
      borderRadius: '0px',
    },
    botCheckboxNextStyle: {
      backgroundColor: '#374151',
      color: '#ffffff',
      border: 'none',
      padding: '6px 10px',
      fontWeight: '500',
      borderRadius: '0px',
    },
    botCheckMarkSelectedStyle: {
      backgroundColor: '#4b5563',
      color: '#ffffff',
      borderRadius: '0px',
    },
    sendIconStyle: {
      color: '#f9fafb',
      fontSize: '20px',
      cursor: 'pointer',
    },
    closeChatButtonStyle: {
      backgroundColor: 'transparent',
      color: '#9ca3af',
      border: 'none',
      fontSize: '18px',
      cursor: 'pointer',
    },
    audioButtonStyle: {
      backgroundColor: '#374151',
      color: '#ffffff',
      border: 'none',
      padding: '6px 10px',
      cursor: 'pointer',
      borderRadius: '0px',
    },
    audioButtonDisabledStyle: {
      backgroundColor: '#1f2937',
      color: '#6b7280',
      cursor: 'not-allowed',
      borderRadius: '0px',
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

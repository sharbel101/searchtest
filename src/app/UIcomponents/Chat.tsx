'use client';

import React, { useState, useEffect } from 'react';
import ChatBot from '@/Chatbot/src';
import { generateChatBotFlow } from '../dataflow/constructor';

export default function Chat() {
  const settings = {
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

  return <ChatBot settings={settings} styles={styles} flow={customFlow} />;
}

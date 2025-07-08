'use client';

import React from 'react';

import dynamic from 'next/dynamic';
// import ChatBotComponent from "react-chatbotify";
const ChatInner = dynamic(() => import('./Chat'), {
  loading: () => <p>Loading chat...</p>, // Optional fallback
  ssr: false, // Set to false if the component requires window/document
});

export default function Chat() {
  return <ChatInner />;
}

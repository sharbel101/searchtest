'use client';

import React from 'react';

import dynamic from 'next/dynamic';

const ChatWrapper = dynamic(() => import('./Chat'), {
  loading: () => <p>Loading chat...</p>, // Optional fallback
  ssr: false, // Set to false if the component requires window/document
});

export default function Chat() {
  return <ChatWrapper />;
}

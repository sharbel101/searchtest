import * as React from 'react';

/**
 * Defines the attributes within a chat message.
 */
export type Message = {
  id: string;
  content: string | React.ReactNode; //JSX.Element
  sender: string;
  type: string;
  timestamp: string;
  tags?: Array<string>;
  contentWrapper?: React.ComponentType<{ children: React.ReactNode }>;
};

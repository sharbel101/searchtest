import { generateSecureUUID } from './idGenerator';
import * as React from 'react';

/**
 * Creates a new message with given content and sender.
 *
 * @param content content of the message
 * @param sender sender of the message
 */
export const createMessage = (
  content: string | React.JSX.Element,
  sender: string,
) => {
  return {
    id: generateSecureUUID(),
    content,
    sender,
    type: typeof content === 'string' ? 'string' : 'object',
    timestamp: new Date().toUTCString(),
    tags: [],
  };
};

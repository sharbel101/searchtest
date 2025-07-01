import type React from 'react';

/**
 * Defines the available attributes for a toast.
 */
export type Toast = {
  id: string;
  content: string | React.ReactElement;
  timeout?: number;
};

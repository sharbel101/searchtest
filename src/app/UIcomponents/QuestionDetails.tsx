import React from 'react';
import { chatFlow } from '../dataflow/flow';

interface QuestionDetailsProps {
  flowItem: (typeof chatFlow)[keyof typeof chatFlow];
}

export default function QuestionDetails({ flowItem }: QuestionDetailsProps) {
  return (
    <div className="mt-2 space-y-1">
      {flowItem.children.map((child, index) => {
        // Get the first (and only) key-value pair from each child object
        const [fieldKey, fieldConfig] = Object.entries(child)[0];

        return (
          <div
            key={`${fieldKey}-${index}`}
            className="text-sm text-gray-400 pl-2"
          >
            • {fieldConfig.label}
            {fieldConfig.required && (
              <span className="text-red-400 ml-1">*</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

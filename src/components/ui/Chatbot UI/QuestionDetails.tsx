import { chatFlow } from '@/components/dataflow/MainFlow/flow';
import React from 'react';

interface QuestionDetailsProps {
  flowItem: (typeof chatFlow)[keyof typeof chatFlow];
}

export default function QuestionDetails({ flowItem }: QuestionDetailsProps) {
  return (
    <div className="mt-2 space-y-1">
      {Object.entries(flowItem.fields).map(([fieldKey, fieldConfig]) => {
        return (
          <div key={fieldKey} className="text-sm text-gray-400 pl-4 mb-4">
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

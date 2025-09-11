import { DBFlowSection } from '@/components/database/DBtypes';
import { getAllMainFields } from '@/components/database/mainFlowDBfunc';
import { chatFlow } from '@/components/Zustand store data/MainFlow/flow';
import React from 'react';

interface QuestionDetailsProps {
  section: DBFlowSection;
}

export default async function QuestionDetails({
  section,
}: QuestionDetailsProps) {
  const allFields = await getAllMainFields(section.id); // returns an array
  return (
    <div className="mt-2 space-y-1">
      {allFields.map((field) => (
        <div key={field.id} className="text-sm text-gray-400 pl-4 mb-4">
          • {field.label}
          {field.required && <span className="text-red-400 ml-1">*</span>}
        </div>
      ))}
    </div>
  );
}

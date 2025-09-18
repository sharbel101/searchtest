'use client';

import { DBFlowSection } from '@/components/database/DBtypes';
import { useMainDBFlowStore } from '@/components/database/zustand_containers/MainFlowStore';
import { useMemo } from 'react';

interface QuestionDetailsProps {
  section: DBFlowSection;
}

export default function QuestionDetails({ section }: QuestionDetailsProps) {
  // use a selector that returns the object reference directly
  const sectionFieldsObj = useMainDBFlowStore(
    (state) => state.currentSectionFields[section.id],
  );

  // fallback to empty array safely
  const allFields = useMemo(() => {
    if (!sectionFieldsObj) return [];
    return Object.values(sectionFieldsObj);
  }, [sectionFieldsObj]);

  if (allFields.length === 0) {
    return (
      <div className="text-sm text-gray-400 pl-4">No fields available.</div>
    );
  }

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

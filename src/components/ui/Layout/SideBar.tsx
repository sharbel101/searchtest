'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/ShadCn/button';

import { useFlowStore } from '../../dataflow/FlowStore';
import QuestionDetails from '../Chatbot UI/QuestionDetails';

// Individual Section Component
interface SectionProps {
  section: any; // Replace with your actual section type
  index: number;
  isAccessible: boolean;
}

function SectionItem({ section, index, isAccessible }: SectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (isAccessible) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      className={`p-3 rounded-lg transition-colors duration-150 ${
        isAccessible
          ? 'bg-gray-700 hover:bg-gray-600 cursor-pointer'
          : 'bg-gray-900 opacity-50 cursor-not-allowed'
      }`}
      onClick={handleToggle}
    >
      <div className="font-medium text-gray-300 mb-1">
        {section.sectionTitle}
      </div>
      {isAccessible && isOpen && <QuestionDetails flowItem={section} />}
    </div>
  );
}

// Sections List Component
interface SectionsListProps {
  sections: any[]; // Replace with your actual section type
  currentSectionIndex: number;
}

function SectionsList({ sections, currentSectionIndex }: SectionsListProps) {
  return (
    <nav className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-64px)]">
      {sections.map((section, index) => (
        <SectionItem
          key={`${index}-${section.sectionTitle}`}
          section={section}
          index={index}
          isAccessible={index <= currentSectionIndex}
        />
      ))}
    </nav>
  );
}

// Main Sidebar Component
export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const sections = useFlowStore((state) => state.sections);
  const currentSectionIndex = useFlowStore(
    (state) => state.currentSectionIndex,
  );

  return (
    <div
      className={`h-screen transition-all ${
        collapsed ? 'w-16' : 'w-64'
      } bg-gray-800 text-white flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <span className="text-lg font-bold">
          {!collapsed && 'Chatbot Flow'}
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Section Navigation */}
      {!collapsed && (
        <SectionsList
          sections={sections}
          currentSectionIndex={currentSectionIndex}
        />
      )}
    </div>
  );
}

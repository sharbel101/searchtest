'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuestionDetails from './QuestionDetails';
import { useFlowStore } from '../dataflow/FlowStore';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openedQuestions, setOpenedQuestions] = useState<Set<string>>(
    new Set(),
  );

  const sections = useFlowStore((state) => state.sections);
  const currentSectionIndex = useFlowStore(
    (state) => state.currentSectionIndex,
  );

  const handleToggleDetails = (index: number) => {
    const section = sections[index];
    const key = `${index}-${section.sectionTitle}`;

    setOpenedQuestions((prevOpened) => {
      const newOpened = new Set(prevOpened);
      if (newOpened.has(key)) {
        newOpened.delete(key);
      } else {
        newOpened.add(key);
      }
      return newOpened;
    });
  };

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
        <nav className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-64px)]">
          {sections.map((section, index) => {
            const key = `${index}-${section.sectionTitle}`;
            const isOpen = openedQuestions.has(key);
            const isAccessible = index <= currentSectionIndex;

            return (
              <div
                key={key}
                className={`p-3 rounded-lg transition-colors duration-150 ${
                  isAccessible
                    ? 'bg-gray-700 hover:bg-gray-600 cursor-pointer'
                    : 'bg-gray-900 opacity-50 cursor-not-allowed'
                }`}
                onClick={() => {
                  if (isAccessible) handleToggleDetails(index);
                }}
              >
                <div className="font-medium text-gray-300 mb-1">
                  {section.sectionTitle}
                </div>
                {isAccessible && isOpen && (
                  <QuestionDetails flowItem={section} />
                )}
              </div>
            );
          })}
        </nav>
      )}
    </div>
  );
}

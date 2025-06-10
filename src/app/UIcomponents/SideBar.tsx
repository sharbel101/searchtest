'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { chatFlow } from '../dataflow/flow';
import QuestionDetails from './QuestionDetails';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  function handleOpenDetails(key: string) {
    setSelectedQuestion((prev) => (prev === key ? null : key));
  }

  return (
    <div
      className={`h-screen transition-all ${collapsed ? 'w-16' : 'w-64'} bg-gray-800 text-white`}
    >
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

      {!collapsed && (
        <nav className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-64px)]">
          {Object.entries(chatFlow).map(([key, flowItem]) => (
            <div key={key} className="p-3 bg-gray-700 rounded-lg">
              <div
                className="font-medium text-gray-300 mb-1 cursor-pointer"
                onClick={() => handleOpenDetails(key)}
              >
                {flowItem.sectionTitle}
              </div>
              {selectedQuestion === key && (
                <QuestionDetails flowItem={flowItem} />
              )}
            </div>
          ))}
        </nav>
      )}
    </div>
  );
}

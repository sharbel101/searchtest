'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/ShadCn/button';
import { useFlowStore } from '../../dataflow/FlowStore';
import QuestionDetails from '../Chatbot UI/QuestionDetails';

interface SectionProps {
  section: any;
  index: number;
  isAccessible: boolean;
  isActive: boolean;
}

function SectionItem({ section, isAccessible, isActive }: SectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => isAccessible && setIsOpen((o) => !o);

  return (
    <div
      onClick={toggle}
      style={{
        backgroundColor: isAccessible ? '#1F2937' : '#000',
        borderRadius: 12,
        padding: '12px 16px',
        cursor: isAccessible ? 'pointer' : 'not-allowed',
        opacity: isAccessible ? 1 : 0.5,
        borderLeft: isActive ? '4px solid #42B0C5' : '4px solid transparent',
        color: '#F9FAFB',
        fontWeight: isActive ? 600 : 400,
      }}
    >
      {section.sectionTitle}
      {isAccessible && isOpen && (
        <div style={{ marginTop: 8 }}>
          <QuestionDetails flowItem={section} />
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const sections = useFlowStore((s) => s.sections);
  const currentIdx = useFlowStore((s) => s.currentSectionIndex);

  return (
    <div
      style={{
        width: collapsed ? 64 : 256,
        backgroundColor: '#000',
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        transition: 'width 0.2s ease',
        overflow: 'hidden', // <- ensure nothing overflows
      }}
    >
      {/* Header */}
      <div
        style={{
          height: 80,
          background: 'linear-gradient(to left, #FF6EC4 0%, #3A86FF 100%)',
          borderTopLeftRadius: 0,
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {!collapsed && (
          <div style={{ fontSize: 16, fontWeight: 600, borderRadius: 0 }}>
            Chatbot Flow
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed((c) => !c)}
        >
          <Menu size={20} color="#FFF" />
        </Button>
      </div>

      {/* ONLY render the nav when expanded */}
      {!collapsed && (
        <nav
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {sections.map((sec, i) => (
            <SectionItem
              key={i}
              section={sec}
              index={i}
              isAccessible={i <= currentIdx}
              isActive={i === currentIdx}
            />
          ))}
        </nav>
      )}
    </div>
  );
}

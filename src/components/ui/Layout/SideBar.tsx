'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { useFlowStore } from '@/components/data/ZustandStores/MainFlowStore';
import QuestionDetails from '../Chatbot UI/QuestionDetails';

interface SectionProps {
  section: any;
  index: number;
  isAccessible?: boolean;
  isActive?: boolean;
}

function SectionItem({ section, isAccessible, isActive }: SectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => isAccessible && setIsOpen((o) => !o);

  return (
    <div
      onClick={toggle}
      style={{
        backgroundColor: isAccessible ? '#16181a' : '#080808',
        borderRadius: 12,
        padding: '14px 16px',
        cursor: isAccessible ? 'pointer' : 'not-allowed',
        opacity: isAccessible ? 1 : 0.4,
        borderLeft: isActive ? '4px solid #42B0C5' : '4px solid transparent',
        color: '#F9FAFB',
        fontWeight: isActive ? 600 : 400,
        transition: 'all 0.2s ease',
        boxShadow: isActive ? '0 4px 12px rgba(66, 176, 197, 0.15)' : 'none',
        marginBottom: 8,
      }}
    >
      {section.sectionTitle}
      {isAccessible && isOpen && (
        <div
          style={{
            marginTop: 12,
            paddingTop: 12,
            borderTop: '1px solid #374151',
          }}
        >
          <QuestionDetails flowItem={section} />
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const sections = useFlowStore((s) => s.sections);
  const currentIdx = useFlowStore((s) => s.currentSectionId);

  // Calculate progress percentage
  const currentSection = sections.find(
    (section) => section.sectionId === currentIdx,
  );
  const currentSectionTitle = currentSection?.sectionTitle || 'getting started';

  return (
    <div
      style={{
        width: collapsed ? 64 : 280,
        backgroundColor: '#000',
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        transition: 'width 0.3s ease',
        overflow: 'hidden',
        borderRight: '1px solid #1F2937',
      }}
    >
      {/* Header with Logo */}
      <div
        style={{
          height: 80,
          background: '#111',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        {!collapsed && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.5px',
              }}
            >
              CapBot Flow
            </div>
          </div>
        )}

        {collapsed && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button
              onClick={() => setCollapsed((c) => !c)}
              style={{
                backgroundColor: '#333',
                border: 'none',
                borderRadius: 8,
                padding: 8,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.backgroundColor = '#444';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLButtonElement;
                target.style.backgroundColor = '#333';
              }}
            >
              <Menu size={20} color="#FFF" />
            </button>
          </div>
        )}

        {!collapsed && (
          <button
            onClick={() => setCollapsed((c) => !c)}
            style={{
              backgroundColor: '#333',
              border: 'none',
              borderRadius: 8,
              padding: 8,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLButtonElement;
              target.style.backgroundColor = '#444';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLButtonElement;
              target.style.backgroundColor = '#333';
            }}
          >
            <Menu size={20} color="#FFF" />
          </button>
        )}
      </div>

      {/* Sections Navigation */}
      {!collapsed && (
        <nav
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px 16px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {sections.map((sec, i) => (
            <SectionItem
              key={i}
              section={sec}
              index={i}
              // isAccessible={i <= currentIdx}
              // isActive={i === currentIdx}
            />
          ))}
        </nav>
      )}
    </div>
  );
}

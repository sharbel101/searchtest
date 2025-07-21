'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
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
  const currentIdx = useFlowStore((s) => s.currentSectionIndex);

  // Calculate progress percentage
  const progressPercentage =
    sections.length > 0 ? ((currentIdx + 1) / sections.length) * 100 : 0;

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

      {/* Progress Bar */}
      {!collapsed && (
        <div
          style={{
            padding: '20px',
            borderBottom: '1px solid #1F2937',
            backgroundColor: '#111',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 12,
            }}
          >
            <span
              style={{
                fontSize: 12,
                color: '#9CA3AF',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Progress
            </span>
            <span
              style={{
                fontSize: 12,
                color: '#42B0C5',
                fontWeight: 600,
              }}
            >
              {currentIdx + 1} / {sections.length}
            </span>
          </div>

          <div
            style={{
              width: '100%',
              height: 6,
              backgroundColor: '#1F2937',
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div
              style={{
                width: `${progressPercentage}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #FF6EC4, #42B0C5)',
                borderRadius: 3,
                transition: 'width 0.5s ease-in-out',
                boxShadow: '0 0 10px rgba(66, 176, 197, 0.4)',
              }}
            />
          </div>

          <div
            style={{
              fontSize: 11,
              color: '#6B7280',
              textAlign: 'center',
              marginTop: 8,
              fontWeight: 500,
            }}
          >
            {Math.round(progressPercentage)}% Complete
          </div>
        </div>
      )}

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
              isAccessible={i <= currentIdx}
              isActive={i === currentIdx}
            />
          ))}
        </nav>
      )}

      {/* Collapsed State Indicator */}
      {collapsed && (
        <div
          style={{
            flex: 1,
            padding: '20px 8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
          }}
        >
          {sections.slice(0, Math.min(6, sections.length)).map((_, i) => (
            <div
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor:
                  i <= currentIdx
                    ? i === currentIdx
                      ? '#42B0C5'
                      : '#374151'
                    : '#1F2937',
                transition: 'all 0.2s ease',
                boxShadow:
                  i === currentIdx ? '0 0 8px rgba(66, 176, 197, 0.6)' : 'none',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

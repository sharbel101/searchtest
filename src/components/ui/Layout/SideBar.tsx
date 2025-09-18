'use client';

import { SidebarFlowStore } from '@/components/database/zustand_containers/SideBarFlowStore';
import { useState, useEffect, Suspense } from 'react';
import { Menu, X } from 'lucide-react';
import QuestionDetails from '../Chatbot UI/QuestionDetails';
import { DBFlowSection } from '@/components/database/DBtypes';

interface SectionProps {
  section: DBFlowSection;
  index: number;
  isAccessible: boolean;
  isActive: boolean;
  open: boolean;
  onToggle: () => void;
}

function SectionItem({
  section,
  isAccessible,
  isActive,
  open,
  onToggle,
}: SectionProps) {
  return (
    <div
      style={{
        marginBottom: 10,
        borderRadius: 12,
        background: isAccessible ? '#16181a' : '#080808',
        borderLeft: isActive ? '4px solid #42B0C5' : '4px solid transparent',
        opacity: isAccessible ? 1 : 0.5,
        cursor: isAccessible ? 'pointer' : 'not-allowed',
        overflow: 'hidden',
        boxShadow: isActive ? '0 2px 8px #42b0c522' : undefined,
        transition: 'background 0.2s, border 0.2s, box-shadow 0.2s',
      }}
      onClick={() => isAccessible && onToggle()}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          minHeight: 44,
          padding: '0 16px',
          fontWeight: isActive ? 700 : 500,
          color: '#F9FAFB',
          fontSize: 16,
          userSelect: 'none',
        }}
      >
        {section.sectiontitle}
      </div>
      {/* Inline expansion for fields */}
      {open && (
        <div
          style={{
            background: '#212325',
            borderTop: '1px solid #374151',
            padding: '12px 16px',
            animation: 'fadein 0.2s',
          }}
        >
          <QuestionDetails section={section} />
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const sections = SidebarFlowStore((s) => s.SideBarSections);
  const currentIdx = SidebarFlowStore((s) => s.currentSideBaSectionIndex);

  // Responsive state
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  // Which section is open (for field expansion)
  const [openSectionIdx, setOpenSectionIdx] = useState<number | null>(null);

  // Responsive effect
  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
      setOpenSectionIdx(null); // collapse on resize
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Overlay for mobile
  const overlay =
    isMobile && sidebarOpen ? (
      <div
        style={{
          position: 'fixed',
          zIndex: 99,
          left: 0,
          top: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.5)',
        }}
        onClick={() => setSidebarOpen(false)}
      />
    ) : null;

  // Sidebar width
  const sidebarWidth = sidebarOpen ? 280 : 0;

  // Progress
  const progressPct =
    sections.length > 0
      ? ((currentIdx ? currentIdx - 1 : 0) / sections.length) * 100
      : 0;

  return (
    <>
      {isMobile && !sidebarOpen && (
        <button
          aria-label="Open Menu"
          style={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: 100,
            width: 44,
            height: 44,
            borderRadius: 12,
            background: 'rgba(255,255,255,0.22)', // glassy
            border: '1.2px solid rgba(255,255,255,0.45)',
            boxShadow: '0 6px 24px 2px rgba(60,80,100,0.13)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(18px) saturate(120%)',
            WebkitBackdropFilter: 'blur(18px) saturate(120%)',
            transition: 'background 0.2s, box-shadow 0.2s',
          }}
          onClick={() => setSidebarOpen(true)}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = 'rgba(255,255,255,0.32)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')
          }
        >
          <Menu size={22} color="#fff" />
        </button>
      )}

      {overlay}

      <aside
        style={{
          position: isMobile ? 'fixed' : 'relative',
          zIndex: isMobile ? 100 : 10,
          left: 0,
          top: 0,
          width: sidebarWidth,
          minWidth: sidebarWidth,
          maxWidth: 350,
          height: '100vh',
          background: '#111',
          color: '#FFF',
          borderRight: '1px solid #1F2937',
          overflowY: 'auto',
          transition: 'width 0.3s, min-width 0.3s',
          boxShadow: isMobile && sidebarOpen ? '2px 0 12px #0004' : undefined,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: 64,
            padding: '0 18px',
            background: '#111',
            justifyContent: 'space-between',
            borderBottom: '1px solid #1F2937',
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: -1 }}>
            CapBot
          </div>
          {isMobile && (
            <button
              aria-label="Close Menu"
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                padding: 8,
                borderRadius: 8,
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onClick={() => setSidebarOpen(false)}
            >
              <X size={22} />
            </button>
          )}
        </div>

        {/* Progress */}
        <div style={{ padding: '16px 18px 6px', background: '#111' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 12,
              color: '#bbb',
              marginBottom: 6,
            }}
          >
            <span>Progress</span>
            <span>
              {currentIdx ? (
                currentIdx - 1
              ) : (
                <span className="animate-pulse text-gray-500">Loading...</span>
              )}{' '}
              / {sections.length}
            </span>
          </div>
          <div
            style={{
              width: '100%',
              height: 6,
              borderRadius: 4,
              background: '#23272b',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progressPct}%`,
                height: '100%',
                borderRadius: 4,
                background: 'linear-gradient(90deg,#42B0C5,#FF6EC4)',
                transition: 'width 0.4s',
              }}
            />
          </div>
          <div
            style={{
              fontSize: 10,
              color: '#6B7280',
              marginTop: 4,
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            {Math.round(progressPct)}% Complete
          </div>
        </div>

        {/* Section List */}
        <div
          style={{
            flex: 1,
            padding: '18px 10px 10px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {sections.map((sec: any, idx: number) => (
            <SectionItem
              key={idx}
              section={sec}
              index={idx}
              isAccessible={currentIdx !== null && idx <= currentIdx - 1}
              isActive={currentIdx !== null && idx === currentIdx - 1}
              open={openSectionIdx === idx}
              onToggle={() =>
                setOpenSectionIdx(openSectionIdx === idx ? null : idx)
              }
            />
          ))}
        </div>
      </aside>
    </>
  );
}

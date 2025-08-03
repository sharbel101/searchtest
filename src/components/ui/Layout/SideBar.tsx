'use client';

import { useFlowStore } from '@/components/data/ZustandStores/MainFlowStore';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
        // Better touch targets for mobile
        minHeight: 44,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ flex: 1 }}>
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
    </div>
  );
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const sections = useFlowStore((s) => s.sections);
  const currentIdx = useFlowStore((s) => s.currentSectionId);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setCollapsed(true); // Always collapse on mobile
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle overlay close on outside click (mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && isOverlayOpen) {
        const sidebar = document.getElementById('mobile-sidebar');
        if (sidebar && !sidebar.contains(event.target as Node)) {
          setIsOverlayOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, isOverlayOpen]);

  // Calculate progress percentage
  const currentSection = sections.find(
    (section) => section.sectionId === currentIdx,
  );
  const currentSectionTitle = currentSection?.sectionTitle || 'getting started';

  const toggleSidebar = () => {
    if (isMobile) {
      setIsOverlayOpen(!isOverlayOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  // Mobile overlay backdrop
  const MobileOverlay = () => (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 998,
        opacity: isOverlayOpen ? 1 : 0,
        visibility: isOverlayOpen ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.3s ease',
      }}
      onClick={() => setIsOverlayOpen(false)}
    />
  );

  const sidebarWidth = isMobile
    ? isOverlayOpen
      ? 280
      : 0
    : collapsed
      ? 64
      : 280;

  return (
    <>
      {/* Mobile Menu Button - Fixed position for mobile */}
      {isMobile && !isOverlayOpen && (
        <button
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: 1000,
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 12,
            padding: 10,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.2s ease',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            width: 44,
            height: 44,
          }}
        >
          <Menu size={20} color="#FFF" />
        </button>
      )}

      {/* Mobile Overlay */}
      {isMobile && <MobileOverlay />}

      {/* Sidebar */}
      <div
        id="mobile-sidebar"
        style={{
          width: sidebarWidth,
          backgroundColor: '#000',
          color: '#FFF',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          transition: 'all 0.3s ease',
          overflow: 'hidden',
          borderRight: '1px solid #1F2937',
          // Mobile-specific positioning
          position: isMobile ? 'fixed' : 'relative',
          top: isMobile ? 0 : 'auto',
          left: isMobile ? (isOverlayOpen ? 0 : -280) : 'auto',
          zIndex: isMobile ? 999 : 'auto',
          // Prevent content from showing when collapsed on mobile
          visibility: isMobile
            ? isOverlayOpen
              ? 'visible'
              : 'hidden'
            : 'visible',
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

          {collapsed && !isMobile && (
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button
                onClick={toggleSidebar}
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
                  minHeight: 40,
                  minWidth: 40,
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

          {(!collapsed || isMobile) && (
            <button
              onClick={toggleSidebar}
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
                minHeight: 40,
                minWidth: 40,
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
              {isMobile ? (
                <X size={20} color="#FFF" />
              ) : (
                <Menu size={20} color="#FFF" />
              )}
            </button>
          )}
        </div>

        {/* Sections Navigation */}
        {(!collapsed || isMobile) && (
          <nav
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px 16px',
              display: 'flex',
              flexDirection: 'column',
              // Improve scrolling on mobile
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {sections.map((sec, i) => (
              <SectionItem
                key={i}
                section={sec}
                index={i}
                //isAccessible={i <= currentIdx}
                //isActive={i === currentIdx}
              />
            ))}
          </nav>
        )}
      </div>
    </>
  );
}

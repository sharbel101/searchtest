import type React from 'react';

type Styles = { [key: string]: React.CSSProperties };

export const styles: Styles = {
  // Tooltip
  tooltipStyle: {
    backgroundColor: '#000',
    color: '#FFF',
    borderRadius: 4,
    padding: '6px 8px',
    fontFamily: 'Inter, sans-serif',
  },

  // Close Chat Button
  closeChatButtonStyle: {
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    borderRadius: '50%',
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },

  // Notification Badge
  notificationBadgeStyle: {
    backgroundColor: '#EF4444',
    color: '#FFF',
    fontSize: 12,
    borderRadius: 9999,
    padding: '0 6px',
    lineHeight: '18px',
    fontFamily: 'Inter, sans-serif',
  },

  // Chat Window
  chatWindowStyle: {
    backgroundColor: '#000',
    width: '100%',
    height: '100vh',
    borderRadius: 0,
    overflow: 'hidden',
  },

  // Header Bar
  headerStyle: {
    background: 'linear-gradient(to right, #FF6EC4 0%, #3A86FF 100%)',
    height: 80,
    minHeight: 80,
    boxSizing: 'border-box',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopRightRadius: 16,
    borderRadius: 0, // Base border-radius, overridden by borderTopRightRadius
  },

  // Body
  bodyStyle: {
    padding: 16,
    backgroundColor: '#000',
    color: '#FFF',
    fontFamily: 'Inter, sans-serif',
    scrollbarWidth: 'thin',
    scrollbarColor: '#333 #000',
  },

  // Custom scrollbar styles for webkit browsers

  // Footer
  footerStyle: {
    backgroundColor: '#000',
    borderTop: 'none',
    padding: 16,
    color: '#FFF',
  },

  // Chat History Button
  chatHistoryButtonStyle: {
    backgroundColor: '#1F2937',
    color: '#FFF',
    border: 'none',
    borderRadius: 4,
    padding: '8px 12px',
    cursor: 'pointer',
  },
  chatHistoryButtonHoveredStyle: {
    backgroundColor: '#374151',
  },

  // History Separator
  chatHistoryLineBreakStyle: {
    margin: '12px 0',
    borderTop: '1px solid #374151',
  },

  // Message Prompt
  chatMessagePromptStyle: {
    color: '#6B7280',
    fontStyle: 'italic',
    cursor: 'pointer',
  },
  chatMessagePromptHoveredStyle: {
    textDecoration: 'underline',
  },

  // Input Area
  chatInputAreaStyle: {
    flex: 1,
    backgroundColor: '#16181a',
    color: '#F9FAFB',
    border: '0.5px solid #fff',
    borderRadius: 8,
    outline: 'none',
    padding: '8px 12px',
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    lineHeight: '5px',
    boxShadow: 'none',
  },
  chatInputAreaFocusedStyle: {
    outline: 'none',
  },
  chatInputAreaDisabledStyle: {
    backgroundColor: '#1F2937',
    cursor: 'not-allowed',
  },

  // Character Count
  characterLimitStyle: {
    color: '#6B7280',
    fontSize: 12,
    marginLeft: 4,
  },
  characterLimitReachedStyle: {
    color: '#EF4444',
  },

  // File Attachment

  // Emoji
  emojiButtonStyle: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  emojiButtonDisabledStyle: {
    cursor: 'not-allowed',
  },
  emojiIconStyle: {
    color: '#FFF',
    fontSize: 20,
  },
  emojiIconDisabledStyle: {
    color: '#6B7280',
  },

  // Audio Button
  audioButtonStyle: {
    backgroundColor: '#374151',
    color: '#FFF',
    border: 'none',
    padding: '6px 10px',
    cursor: 'pointer',
    borderRadius: 4,
  },
  audioButtonDisabledStyle: {
    backgroundColor: '#1F2937',
    color: '#6B7280',
    cursor: 'not-allowed',
    borderRadius: 4,
  },
  audioIconStyle: {
    color: '#FFF',
    fontSize: 20,
  },
  audioIconDisabledStyle: {
    color: '#6B7280',
  },

  // Notification Toggle
  notificationButtonStyle: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  notificationButtonDisabledStyle: {
    cursor: 'not-allowed',
  },
  notificationIconStyle: {
    color: '#FFF',
    fontSize: 20,
  },
  notificationIconDisabledStyle: {
    color: '#6B7280',
  },

  // Voice Button
  voiceButtonStyle: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  voiceButtonDisabledStyle: {
    cursor: 'not-allowed',
  },
  voiceIconStyle: {
    color: '#FFF',
    fontSize: 20,
  },
  voiceIconDisabledStyle: {
    color: '#6B7280',
  },

  // Floating Chat Button
  chatButtonStyle: {
    backgroundColor: '#42B0C5',
    color: '#FFF',
    border: 'none',
    borderRadius: '50%',
    width: 56,
    height: 56,
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    cursor: 'pointer',
  },
  chatIconStyle: {
    color: '#FFF',
    fontSize: 24,
  },

  // Bot Bubble
  botBubbleStyle: {
    backgroundColor: '#2A2A2A',
    color: '#FFF',
    padding: '12px 16px',
    marginBottom: 12,
    maxWidth: '75%',
    borderRadius: 16,
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    alignSelf: 'flex-start',
  },

  // User Bubble
  userBubbleStyle: {
    backgroundColor: '#FFF',
    color: '#000',
    padding: '12px 16px',
    margin: '8px 0',
    maxWidth: '70%',
    alignSelf: 'flex-end',
    borderRadius: 16,
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
  },

  /*
        I commented this because it raises an error about someRef.current Because the chatbot already have it's
        own CSS and when we wrote this style it makes bugs... NEED TO DISCUSS THIS WITH TEO (JOE).
    */

  // Bot Options
  // Bot Options

  // Typing Indicator
  rcbTypingIndicatorContainerStyle: {
    backgroundColor: '#2A2A2A',
    borderRadius: 16,
    padding: '12px 16px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 12,
    maxWidth: '75%',
  },
  rcbTypingIndicatorDotStyle: {
    backgroundColor: '#9CA3AF',
    width: 8,
    height: 8,
    borderRadius: '50%',
    marginRight: 4,
  },

  // Loading Spinner
  loadingSpinnerStyle: {
    borderWidth: '4px',
    borderColor: '#374151',
    borderStyle: 'solid',
    borderTop: '4px solid #42B0C5',
    borderRadius: '50%',
    width: 24,
    height: 24,
    animation: 'spin 1s linear infinite',
  },

  // Media Display
  mediaDisplayContainerStyle: {
    maxWidth: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  },

  // Toasts
  toastPromptContainerStyle: {
    position: 'fixed',
    bottom: 80,
    right: 16,
    zIndex: 9999,
  },
  toastPromptStyle: {
    backgroundColor: '#1F2937',
    color: '#FFF',
    padding: '12px 16px',
    borderRadius: 8,
    marginTop: 8,
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    cursor: 'pointer',
  },
  toastPromptHoveredStyle: {
    opacity: 0.9,
  },
};

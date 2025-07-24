import { useState, MouseEvent } from 'react';
import { useSubmitInputInternal } from '../../../hooks/internal/useSubmitInputInternal';
import { useBotStatesContext } from '../../../context/BotStatesContext';
import { useSettingsContext } from '../../../context/SettingsContext';

import './SendButton.css';

const SendButton = () => {
  const { settings } = useSettingsContext();
  const { textAreaDisabled, isBotTyping } = useBotStatesContext();
  const { handleSubmitText } = useSubmitInputInternal();

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (textAreaDisabled || isBotTyping) return;
    await handleSubmitText();
  };

  const isDisabled = textAreaDisabled || isBotTyping;

  return (
    <button
      type="button"
      aria-label={settings.ariaLabel?.sendButton ?? 'send message'}
      disabled={isDisabled}
      onClick={handleClick}
      className={`rcb-send-button ${isDisabled ? 'rcb-send-button-disabled' : ''}`}
    >
      {isBotTyping ? (
        <div className="rcb-send-loading">
          <div className="rcb-loading-dot"></div>
          <div className="rcb-loading-dot"></div>
          <div className="rcb-loading-dot"></div>
        </div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="20"
          height="20"
        >
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      )}
    </button>
  );
};

export default SendButton;

import React, { Fragment } from 'react';

import { useSettingsContext } from '../../context/SettingsContext';
import { useStylesContext } from '../../context/StylesContext';

import './ChatBotFooter.css';

/**
 * Contains footer buttons and text.
 *
 * @param buttons list of buttons to render in the footer
 */
const ChatBotFooter = ({ buttons }: { buttons: React.ReactElement[] }) => {
  // handles settings
  const { settings } = useSettingsContext();

  // handles styles
  const { styles } = useStylesContext();

  return (
    <div
      data-testid="chatbot-footer-container"
      style={{ ...styles.footerStyle }}
      className="rcb-chat-footer-container"
    >
      <div className="rcb-chat-footer">
        {buttons?.map((button: React.ReactElement, index: number) => (
          <Fragment key={index}>{button}</Fragment>
        ))}
      </div>
      <span>{settings.footer?.text}</span>
    </div>
  );
};

export default ChatBotFooter;

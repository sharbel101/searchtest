import React, { Fragment } from 'react';

import { useSettingsContext } from '../../context/SettingsContext';
import { useStylesContext } from '../../context/StylesContext';
import { useFlowStore } from '@/components/dataflow/FlowStore ORIGINAL';
import './ChatBotHeader.css';

/**
 * Contains header buttons and avatar.
 *
 * @param buttons list of buttons to render in the header
 */
const ChatBotHeader = ({ buttons }: { buttons: React.ReactElement[] }) => {
  // handles settings
  const { settings } = useSettingsContext();

  // handles styles
  const { styles } = useStylesContext();

  // styles for header
  const headerStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${settings.general?.secondaryColor},
			${settings.general?.primaryColor})`,
    ...styles.headerStyle,
  };

  // JOE : making the header dynamically change with the sections.
  const currentSection = useFlowStore((state) => state.getCurrentSection());

  return (
    <div style={headerStyle} className="rcb-chat-header-container">
      <div className="rcb-chat-header">
        <img
          src="/assets/chatbot/v2/capbot_logo.png"
          alt="CapBot Logo"
          className="rcb-header-logo"
        />
        <h1 className="rcb-header-title">{currentSection?.sectionTitle}</h1>
      </div>
      <div className="rcb-chat-header">
        {buttons?.map((button: React.ReactElement, index: number) => (
          <Fragment key={index}>{button}</Fragment>
        ))}
      </div>
    </div>
  );
};

export default ChatBotHeader;

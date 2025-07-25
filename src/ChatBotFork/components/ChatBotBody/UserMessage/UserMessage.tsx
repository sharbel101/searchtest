import { CSSProperties } from 'react';
import { useSettingsContext } from '../../../context/SettingsContext';
import { useStylesContext } from '../../../context/StylesContext';
import { Message } from '../../../types/Message';

import './UserMessage.css';

const UserMessage = ({
  message,
  isNewSender,
}: {
  message: Message;
  isNewSender: boolean;
}) => {
  const { settings } = useSettingsContext();
  const { styles } = useStylesContext();

  const isStringContent = typeof message.content === 'string';
  const baseContent: React.ReactNode = message.content;

  const finalContent = message.contentWrapper ? (
    <message.contentWrapper>{baseContent}</message.contentWrapper>
  ) : (
    baseContent
  );

  // Determine if message is a file message (based on 📄 or extension)
  const isFileMessage = (message: Message): boolean => {
    if (typeof message.content === 'string') {
      const content = message.content.trim();
      return (
        content.startsWith('📄') ||
        /\.(pdf|png|jpe?g|docx?|xlsx?|pptx?|zip|txt)$/i.test(content)
      );
    }
    return false;
  };

  const isFile = isFileMessage(message);

  const userBubbleStyle: CSSProperties = {
    backgroundColor: isFile
      ? settings.general?.primaryColor || '#007bff'
      : '#fff',
    color: isFile ? '#fff' : '#000',
    border: isFile ? '2px solid #00B4D8' : 'none',
    maxWidth: settings.userBubble?.showAvatar ? '65%' : '70%',
    ...styles.userBubbleStyle,
  };

  const userBubbleEntryStyle = settings.userBubble?.animate
    ? 'rcb-user-message-entry'
    : '';

  const showAvatar = settings.userBubble?.showAvatar && isNewSender;

  const offsetStyle = `rcb-user-message${
    !isNewSender && settings.userBubble?.showAvatar
      ? ' rcb-user-message-offset'
      : ''
  }`;

  return (
    <div className="rcb-user-message-container">
      {isStringContent ? (
        <div
          style={userBubbleStyle}
          className={`${offsetStyle} ${userBubbleEntryStyle}`}
        >
          {finalContent}
        </div>
      ) : (
        <>{finalContent}</>
      )}
      {showAvatar && (
        <div
          style={{ backgroundImage: `url("${settings.userBubble?.avatar}")` }}
          className="rcb-message-user-avatar"
        />
      )}
    </div>
  );
};

export default UserMessage;

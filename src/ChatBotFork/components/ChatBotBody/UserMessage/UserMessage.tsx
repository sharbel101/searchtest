import { CSSProperties, useState } from 'react';
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
  const [showPreview, setShowPreview] = useState(false);

  const isStringContent = typeof message.content === 'string';
  const baseContent: React.ReactNode = message.content;

  const finalContent = message.contentWrapper ? (
    <message.contentWrapper>{baseContent}</message.contentWrapper>
  ) : (
    baseContent
  );

  const isFileMessage = (msg: Message): boolean => {
    if (typeof msg.content === 'string') {
      const content = msg.content.trim();
      return (
        content.startsWith('📄') ||
        /\.(pdf|png|jpe?g|gif|webp|docx?|xlsx?|pptx?|zip|txt)$/i.test(content)
      );
    }
    return false;
  };

  let fileName = '';
  let fileUrl = '';
  let fileType = '';
  let fileData = null;

  const isFile = isFileMessage(message);

  if (isFile) {
    const content =
      typeof message.content === 'string' ? message.content.trim() : '';
    const match = content.match(/📄\s*(.+)/);
    fileName = match?.[1] || '';

    fileUrl =
      message.tags?.[0] ||
      (message as any).attachment?.url ||
      (message as any).file?.url ||
      (message as any).fileUrl ||
      (message as any).data ||
      (message as any).src ||
      '';

    fileData =
      (message as any).attachment?.data ||
      (message as any).file?.data ||
      (message as any).fileData ||
      null;

    const ext = fileName.split('.').pop()?.toLowerCase() || '';
    fileType = ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp'].includes(ext)
      ? 'image'
      : ext === 'pdf'
        ? 'pdf'
        : 'other';
  }

  const displayUrl = fileData || fileUrl;
  const isValidUrl =
    displayUrl &&
    (displayUrl.startsWith('http') ||
      displayUrl.startsWith('data:') ||
      displayUrl.startsWith('blob:'));

  const handlePreviewToggle = () => setShowPreview(!showPreview);

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

  const renderFilePreview = () => {
    if (!showPreview) return null;

    return (
      <div
        className="rcb-file-preview-modal"
        onClick={() => setShowPreview(false)}
      >
        <div
          className="rcb-file-preview-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="rcb-file-preview-header">
            <h3>{fileName || 'File Preview'}</h3>
            <button
              className="rcb-file-preview-close"
              onClick={() => setShowPreview(false)}
            >
              ×
            </button>
          </div>
          <div className="rcb-file-preview-body">
            {fileType === 'image' && isValidUrl ? (
              <img
                src={displayUrl}
                alt={fileName}
                className="rcb-file-preview-image"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const errorDiv = e.currentTarget
                    .nextElementSibling as HTMLElement;
                  if (errorDiv) errorDiv.style.display = 'block';
                }}
              />
            ) : fileType === 'pdf' && isValidUrl ? (
              <iframe
                src={displayUrl}
                title={fileName}
                className="rcb-file-preview-iframe"
              />
            ) : (
              <div className="rcb-file-preview-unsupported">
                <span className="rcb-file-icon-large">❌</span>
                <p>File preview unavailable</p>
                <p>Type: {fileType}</p>
                <p>URL: {displayUrl}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="rcb-user-message-container">
        <div className="rcb-user-message-wrapper">
          {isFile ? (
            <div
              style={userBubbleStyle}
              className={`${offsetStyle} ${userBubbleEntryStyle} rcb-user-message-file`}
            >
              <div className="rcb-user-message-file-preview">
                {fileType === 'image' && isValidUrl ? (
                  <img
                    src={displayUrl}
                    alt={fileName}
                    className="rcb-user-message-file-thumb"
                  />
                ) : (
                  <span className="rcb-user-message-file-icon">
                    {fileType === 'pdf' ? '📄' : '📎'}
                  </span>
                )}
              </div>
              <div className="rcb-user-message-file-name">{fileName}</div>
              <button
                className="rcb-file-preview-button"
                onClick={handlePreviewToggle}
                title="Preview file"
              >
                👁️
              </button>
            </div>
          ) : isStringContent ? (
            <div
              style={userBubbleStyle}
              className={`${offsetStyle} ${userBubbleEntryStyle}`}
            >
              {finalContent}
            </div>
          ) : (
            <>{finalContent}</>
          )}
        </div>

        {showAvatar && (
          <div
            style={{ backgroundImage: `url("${settings.userBubble?.avatar}")` }}
            className="rcb-message-user-avatar"
          />
        )}
      </div>

      {renderFilePreview()}
    </>
  );
};

export default UserMessage;

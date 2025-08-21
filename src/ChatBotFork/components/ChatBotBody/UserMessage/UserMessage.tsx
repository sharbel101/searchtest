import { CSSProperties, useState, useEffect } from 'react';
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

  useEffect(() => {
    // Component mounted/updated
  });

  const isStringContent = typeof message.content === 'string';
  const content =
    isStringContent && message.content != null
      ? (message.content as string).trim()
      : '';

  const finalContent = message.contentWrapper ? (
    <message.contentWrapper>{message.content}</message.contentWrapper>
  ) : (
    message.content
  );

  const isFileMessage = (): boolean => {
    const isFile =
      typeof message.content === 'string' &&
      (content.startsWith('📄') ||
        /\.(pdf|png|jpe?g|gif|webp|docx?|xlsx?|pptx?|zip|txt|mp4|webm)$/i.test(
          content,
        ));
    return isFile;
  };

  const isFile = isFileMessage();

  let fileName = '';
  let fileUrl = '';
  let fileType = '';

  if (isFile) {
    const fileDataObj = (message as any).fileData;
    fileName = fileDataObj?.name || (message as any).fileName || '';
    fileUrl = fileDataObj?.previewUrl || (message as any).fileUrl || '';

    const mimeType = fileDataObj?.type || '';
    const ext = fileName.split('.').pop()?.toLowerCase() || '';

    if (
      mimeType.startsWith('image/') ||
      ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(ext)
    ) {
      fileType = 'image';
    } else if (mimeType.startsWith('video/') || ['mp4', 'webm'].includes(ext)) {
      fileType = 'video';
    } else if (mimeType === 'application/pdf' || ext === 'pdf') {
      fileType = 'pdf';
    } else if (mimeType.includes('word') || ['doc', 'docx'].includes(ext)) {
      fileType = 'word';
    } else if (mimeType.includes('excel') || ['xls', 'xlsx'].includes(ext)) {
      fileType = 'excel';
    } else if (
      mimeType.includes('powerpoint') ||
      ['ppt', 'pptx'].includes(ext)
    ) {
      fileType = 'powerpoint';
    } else if (
      mimeType.startsWith('text/') ||
      ['txt', 'json', 'xml', 'csv', 'md'].includes(ext)
    ) {
      fileType = 'text';
    } else {
      fileType = 'other';
    }
  }

  const isValidUrl =
    fileUrl.startsWith('http') ||
    fileUrl.startsWith('data:') ||
    fileUrl.startsWith('blob:');

  const handlePreviewToggle = () => {
    setShowPreview(!showPreview);
  };

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
  const offsetStyle = `rcb-user-message${!isNewSender && settings.userBubble?.showAvatar ? ' rcb-user-message-offset' : ''}`;

  const renderFilePreview = () => {
    if (!showPreview) {
      return null;
    }

    const isOfficeDoc = ['word', 'excel', 'powerpoint'].includes(fileType);
    const officeViewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`;

    // Fallback for PDFs if the URL is not a data/blob URL
    const pdfViewerUrl =
      fileUrl.startsWith('blob:') || fileUrl.startsWith('data:')
        ? fileUrl
        : `https://docs.google.com/gview?url=${encodeURIComponent(fileUrl)}&embedded=true`;

    return (
      <div
        className="rcb-file-preview-overlay"
        onClick={() => setShowPreview(false)}
      >
        <div
          className="rcb-file-preview-modal"
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
            {!isValidUrl ? (
              <div className="rcb-file-preview-unsupported">
                <span className="rcb-file-icon-large">❌</span>
                <p>Invalid or unsupported file URL for preview.</p>
                <p>URL: {fileUrl}</p>
              </div>
            ) : fileType === 'image' ? (
              <img
                src={fileUrl}
                alt={fileName}
                className="rcb-file-preview-image"
              />
            ) : fileType === 'video' ? (
              <video
                controls
                src={fileUrl}
                className="rcb-file-preview-video"
              />
            ) : fileType === 'pdf' ? (
              <iframe
                src={pdfViewerUrl}
                title={fileName}
                className="rcb-file-preview-iframe"
              />
            ) : isOfficeDoc ? (
              <iframe
                src={officeViewerUrl}
                title={fileName}
                className="rcb-file-preview-iframe"
              />
            ) : fileType === 'text' ? (
              <iframe
                src={fileUrl}
                title={fileName}
                className="rcb-file-preview-iframe"
              />
            ) : (
              <div className="rcb-file-preview-unsupported">
                <span className="rcb-file-icon-large">❌</span>
                <p>Preview for this file type is unavailable</p>
                <p>Type: {fileType}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Remove inline styles to let CSS handle the layout

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
                  <div className="rcb-user-message-file-thumb">
                    <img
                      src={fileUrl}
                      alt={fileName}
                      style={{
                        maxWidth: '40px',
                        maxHeight: '40px',
                        borderRadius: '4px',
                      }}
                      onError={(e) => {
                        // Thumbnail failed to load
                      }}
                    />
                  </div>
                ) : (
                  <div className="rcb-user-message-file-thumb">
                    {fileType === 'pdf'
                      ? '📄'
                      : fileType === 'word'
                        ? '📝'
                        : fileType === 'excel'
                          ? '📊'
                          : fileType === 'powerpoint'
                            ? '📈'
                            : fileType === 'video'
                              ? '🎞️'
                              : fileType === 'text'
                                ? '📃'
                                : '📎'}
                  </div>
                )}
                <div className="rcb-user-message-file-info">
                  <div className="rcb-user-message-file-name">{fileName}</div>
                </div>
                <button
                  className="rcb-file-preview-button"
                  onClick={handlePreviewToggle}
                >
                  View
                </button>
              </div>
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
          {showAvatar && (
            <div
              style={{
                backgroundImage: `url("${settings.userBubble?.avatar}")`,
              }}
              className="rcb-message-user-avatar"
            />
          )}
        </div>
      </div>
      {renderFilePreview()}
    </>
  );
};

export default UserMessage;

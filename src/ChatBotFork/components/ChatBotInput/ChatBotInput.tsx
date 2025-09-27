import React, {
  useState,
  ChangeEvent,
  KeyboardEvent,
  RefObject,
  MouseEvent,
  Fragment,
  useRef,
} from 'react';

import { useSubmitInputInternal } from '../../hooks/internal/useSubmitInputInternal';
import { useIsDesktopInternal } from '../../hooks/internal/useIsDesktopInternal';
import { useTextAreaInternal } from '../../hooks/internal/useTextAreaInternal';
import { useBotStatesContext } from '../../context/BotStatesContext';
import { useBotRefsContext } from '../../context/BotRefsContext';
import { useSettingsContext } from '../../context/SettingsContext';
import { useStylesContext } from '../../context/StylesContext';
import FileAttachmentButton from '../Buttons/FileAttachmentButton/FileAttachmentButton';
import { Message } from '../../types/Message';

import './ChatBotInput.css';

import { useFlowStore } from '@/components/Zustand store data/ZustandStores/MainFlowStore';
import { useSubFlowStore } from '@/components/Zustand store data/ZustandStores/InjectedFlowStore';
import { ChartFormUseFlowStore } from '@/components/Zustand store data/ZustandStores/ChartFormFlowStore';

import { useChartFormDBFlowStore } from '@/components/database/zustand_containers/ChartFormFlowStore';
import { useInjectedDBFlowStore } from '@/components/database/zustand_containers/InjectedFlowStore';
import { useMainDBFlowStore } from '@/components/database/zustand_containers/MainFlowStore';
import { FieldType } from '@/components/Zustand store data/MainFlow/flow';
import { DBchartFlowField, DBFlowField } from '@/components/database/DBtypes';

// const {
//   getCurrentField,
//   isInFlowFunc,
//   currentFlowController,
//   CurrentInjectionType,
// } = useFlowStore.getState();
// const { getCurrentSubFlowField } = useSubFlowStore.getState();
//const { getCurrentChartFormField } = ChartFormUseFlowStore.getStFate();

const { currentChartFormField } = useChartFormDBFlowStore.getState();
const { getCurrentInjectedField } = useInjectedDBFlowStore.getState();
const { getCurrentField, isInFlowFunc, CurrentInjectionType } =
  useMainDBFlowStore.getState();

//JOE MODIFIED HERE
export function getField(): DBFlowField /*| DBchartFlowField */ | null {
  let field: DBFlowField /*| DBchartFlowField */ | null = null;

  if (isInFlowFunc) {
    // if (CurrentInjectionType === "ChartForm") {
    //   field = currentChartFormField;
    //   if (!field) {
    //     console.warn("No field in getField() (Chart form)");
    //   }
    // } else
    if (CurrentInjectionType === 'OriginalSubFlow') {
      field = getCurrentInjectedField();
      if (!field) {
        console.warn('No field in getField() (Original sub flow)');
      }
    }
  } else {
    field = getCurrentField();
    if (!field) {
      console.warn('No field in getField() (Main flow)');
    }
  }

  return field;
}

/**
 * Contains chat input field for user to enter messages.
 *
 * @param buttons list of buttons to render in the chat input
 */
const ChatBotInput = ({ buttons }: { buttons: React.ReactElement[] }) => {
  // handles platform
  const isDesktop = useIsDesktopInternal();

  // handles settings
  const { settings } = useSettingsContext();

  // handles styles
  const { styles } = useStylesContext();

  // handles bot states
  const {
    textAreaDisabled,
    textAreaSensitiveMode,
    inputLength,
    hasFlowStarted,
    setHasFlowStarted,
    setInputLength,
  } = useBotStatesContext();

  // handles bot refs
  const { inputRef } = useBotRefsContext();

  // tracks if chat input is focused
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // tracks if text composition (like IME input) is in progress
  const [isComposing, setIsComposing] = useState<boolean>(false);

  // tracks if file upload modal is open
  const [showFileUploadModal, setShowFileUploadModal] = useState(false);

  // handles user input submission
  const { handleSubmitText } = useSubmitInputInternal();

  //handle textarea functionality
  const { setTextAreaValue } = useTextAreaInternal();

  const [pendingFiles, setPendingFiles] = useState<any[]>([]); // FileWithPreview[]
  const [previewFile, setPreviewFile] = useState<any | null>(null);

  // Find the file attachment button and replace it with our controlled version
  const fileAttachmentButtonIndex = buttons.findIndex(
    (button) => button.key === 'file-attachment',
  );
  let fileAttachmentButton = null;
  let otherButtons = buttons;

  //JOE MODIFIED HERE
  const currentField = getField();
  if (
    fileAttachmentButtonIndex !== -1 &&
    (currentField?.type === FieldType.file ||
      currentField?.type === FieldType.video)
  ) {
    fileAttachmentButton = (
      <FileAttachmentButton
        key="file-attachment"
        onShowUploadModal={setShowFileUploadModal}
      />
    );
    otherButtons = buttons.filter((button) => button.key !== 'file-attachment');
  } else {
    otherButtons = buttons;
    fileAttachmentButton = null;
  }

  // styles for text area
  const textAreaStyle: React.CSSProperties = {
    boxSizing: isDesktop ? 'content-box' : 'border-box',
    ...styles.chatInputAreaStyle,
  };

  // styles for focused text area
  const textAreaFocusedStyle: React.CSSProperties = {
    outline: !textAreaDisabled ? 'none' : '',
    boxShadow: !textAreaDisabled
      ? `0 0 5px ${settings.general?.primaryColor}`
      : '',
    boxSizing: isDesktop ? 'content-box' : 'border-box',
    ...styles.chatInputAreaStyle, // by default inherit the base style for input area
    ...styles.chatInputAreaFocusedStyle,
  };

  // styles for disabled text area
  const textAreaDisabledStyle: React.CSSProperties = {
    cursor: `url("${settings.general?.actionDisabledIcon}"), auto`,
    caretColor: 'transparent',
    boxSizing: isDesktop ? 'content-box' : 'border-box',
    ...styles.chatInputAreaStyle, // by default inherit the base style for input area
    ...styles.chatInputAreaDisabledStyle,
  };

  // styles for character limit
  const characterLimitStyle: React.CSSProperties = {
    color: '#989898',
    ...styles.characterLimitStyle,
  };

  // styles for character limit reached
  const characterLimitReachedStyle: React.CSSProperties = {
    color: '#ff0000',
    ...styles.characterLimitReachedStyle,
  };

  // styles for input placeholder
  const placeholder = textAreaDisabled
    ? settings.chatInput?.disabledPlaceholderText
    : settings.chatInput?.enabledPlaceholderText;

  /**
   * Handles focus event on chat input.
   */
  const handleFocus = () => {
    if (textAreaDisabled) {
      return;
    }
    setIsFocused(true);
  };

  /**
   * Handles blur event on chat input.
   */
  const handleBlur = () => {
    setIsFocused(false);
  };

  /**
   * Handles composition start event on chat input.
   */
  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  /**
   * Handles composition end event on chat input.
   */
  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  /**
   * Handles keyboard events and proceeds to submit user input if enter button is pressed.
   *
   * @param event keyboard event
   */
  const handleKeyDown = async (
    event: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement | null>,
  ) => {
    if (isComposing) {
      return;
    }
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        if (!settings.chatInput?.allowNewline) {
          event.preventDefault();
        }
        return;
      }
      event.preventDefault();
      await handleSubmitText();
    }
  };

  /**
   * Handles textarea value changes.
   *
   * @param event textarea change event
   */
  const handleTextAreaValueChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | null>,
  ) => {
    if (inputRef.current) {
      setTextAreaValue(event.target.value);
      setInputLength(inputRef.current.value.length);
    }
  };

  if (showFileUploadModal) {
    // Only render the file attachment button, which will show the modal
    return <div className="rcb-chat-input">{fileAttachmentButton}</div>;
  }

  return (
    <div
      aria-label={settings.ariaLabel?.inputTextArea ?? 'input text area'}
      role="textbox"
      onMouseDown={(event: MouseEvent) => {
        event.stopPropagation();
        // checks if user is interacting with chatbot for the first time
        if (
          !hasFlowStarted &&
          settings.general?.flowStartTrigger === 'ON_CHATBOT_INTERACT'
        ) {
          setHasFlowStarted(true);
        }
      }}
      style={{ ...styles.chatInputContainerStyle }}
      className="rcb-chat-input"
    >
      {fileAttachmentButton}
      {pendingFiles.length > 0 && (
        <div className="input-file-preview-bar">
          {pendingFiles.map((f) => (
            <div key={f.id} className="input-file-preview">
              {f.file.type.startsWith('image/') ? (
                <img
                  src={f.previewUrl}
                  alt={f.file.name}
                  style={{ maxWidth: 40, maxHeight: 40 }}
                />
              ) : (
                <span>{f.file.name}</span>
              )}
              <button onClick={() => setPreviewFile(f)}>👁️</button>
              <button
                onClick={() =>
                  setPendingFiles((prev) => prev.filter((pf) => pf.id !== f.id))
                }
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
      {previewFile && (
        <div>
          {/* Reuse the renderFilePreview logic from UserMessage here */}
          {/* Example: */}
          <div
            className="rcb-file-preview-overlay"
            onClick={() => setPreviewFile(null)}
          >
            <div
              className="rcb-file-preview-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rcb-file-preview-header">
                <h3>{previewFile.file.name || 'File Preview'}</h3>
                <button
                  className="rcb-file-preview-close"
                  onClick={() => setPreviewFile(null)}
                >
                  ×
                </button>
              </div>
              <div className="rcb-file-preview-body">
                {/* Use the same file type detection as in UserMessage */}
                {(() => {
                  const fileUrl = previewFile.previewUrl;
                  const fileName = previewFile.file.name;
                  const mimeType = previewFile.file.type;
                  const ext = fileName.split('.').pop()?.toLowerCase() || '';
                  let fileType = '';
                  if (
                    mimeType.startsWith('image/') ||
                    ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(ext)
                  ) {
                    fileType = 'image';
                  } else if (mimeType === 'application/pdf' || ext === 'pdf') {
                    fileType = 'pdf';
                  } else if (
                    mimeType.includes('word') ||
                    ['doc', 'docx'].includes(ext)
                  ) {
                    fileType = 'word';
                  } else if (
                    mimeType.includes('excel') ||
                    ['xls', 'xlsx'].includes(ext)
                  ) {
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
                  const isValidUrl =
                    fileUrl.startsWith('http') ||
                    fileUrl.startsWith('data:') ||
                    fileUrl.startsWith('blob:');
                  const embedOffice = `https://docs.google.com/gview?url=${encodeURIComponent(fileUrl)}&embedded=true`;
                  if (fileType === 'image' && isValidUrl) {
                    return (
                      <img
                        src={fileUrl}
                        alt={fileName}
                        className="rcb-file-preview-image"
                      />
                    );
                  } else if (fileType === 'pdf' && isValidUrl) {
                    return (
                      <iframe
                        src={fileUrl}
                        title={fileName}
                        className="rcb-file-preview-iframe"
                      />
                    );
                  } else if (fileType === 'word' && isValidUrl) {
                    return (
                      <iframe
                        src={embedOffice}
                        title={fileName}
                        className="rcb-file-preview-iframe"
                      />
                    );
                  } else if (fileType === 'excel' && isValidUrl) {
                    return (
                      <iframe
                        src={embedOffice}
                        title={fileName}
                        className="rcb-file-preview-iframe"
                      />
                    );
                  } else if (fileType === 'powerpoint' && isValidUrl) {
                    return (
                      <iframe
                        src={embedOffice}
                        title={fileName}
                        className="rcb-file-preview-iframe"
                      />
                    );
                  } else if (fileType === 'text' && isValidUrl) {
                    return (
                      <iframe
                        src={fileUrl}
                        title={fileName}
                        className="rcb-file-preview-iframe"
                      />
                    );
                  } else {
                    return (
                      <div className="rcb-file-preview-unsupported">
                        <span className="rcb-file-icon-large">❌</span>
                        <p>File preview unavailable</p>
                        <p>Type: {fileType}</p>
                        <p>URL: {fileUrl}</p>
                        <p>
                          Supported formats: Images, PDF, Word, Excel,
                          PowerPoint, Text files
                        </p>
                      </div>
                    );
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* textarea intentionally does not use the disabled property to prevent keyboard from closing on mobile */}
      {textAreaSensitiveMode && settings.sensitiveInput?.maskInTextArea ? (
        <input
          ref={inputRef as RefObject<HTMLInputElement>}
          type="password"
          className="rcb-chat-input-textarea"
          style={
            textAreaDisabled
              ? textAreaDisabledStyle
              : isFocused
                ? textAreaFocusedStyle
                : textAreaStyle
          }
          placeholder={placeholder}
          onChange={handleTextAreaValueChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
        />
      ) : (
        <textarea
          ref={inputRef as RefObject<HTMLTextAreaElement>}
          style={
            textAreaDisabled
              ? textAreaDisabledStyle
              : isFocused
                ? textAreaFocusedStyle
                : textAreaStyle
          }
          rows={1}
          className="rcb-chat-input-textarea"
          placeholder={placeholder}
          onChange={handleTextAreaValueChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
        />
      )}
      <>
        {otherButtons?.map((button: React.ReactElement, index: number) => (
          <Fragment key={index}>{button}</Fragment>
        ))}
        {settings.chatInput?.showCharacterCount &&
          settings.chatInput?.characterLimit != null &&
          settings.chatInput?.characterLimit > 0 && (
            <div
              className="rcb-chat-input-char-counter"
              style={
                inputLength >= settings.chatInput?.characterLimit
                  ? characterLimitReachedStyle
                  : characterLimitStyle
              }
            >
              {inputLength}/{settings.chatInput?.characterLimit}
            </div>
          )}
      </>
    </div>
  );
};

export default ChatBotInput;

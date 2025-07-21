import { ChangeEvent, useRef } from 'react';

import { getMediaFileDetails } from '../../../utils/mediaFileParser';
import { useToastsInternal } from '../../../hooks/internal/useToastsInternal';
import { useChatWindowInternal } from '../../../hooks/internal/useChatWindowInternal';
import { useSubmitInputInternal } from '../../../hooks/internal/useSubmitInputInternal';
import { useMessagesInternal } from '../../../hooks/internal/useMessagesInternal';
import { usePathsInternal } from '../../../hooks/internal/usePathsInternal';
import { useDispatchRcbEventInternal } from '../../../hooks/internal/useDispatchRcbEventInternal';
import { useTextAreaInternal } from '../../../hooks/internal/useTextAreaInternal';
import { useBotRefsContext } from '../../../context/BotRefsContext';
import { useSettingsContext } from '../../../context/SettingsContext';
import { useStylesContext } from '../../../context/StylesContext';
import { Flow } from '../../../types/Flow';
import { RcbEvent } from '../../../constants/RcbEvent';

import './FileAttachmentButton.css';

/**
 * Supports uploading of files from user.
 */
const FileAttachmentButton = () => {
  const { settings } = useSettingsContext();
  const { blockAllowsAttachment } = usePathsInternal();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (blockAllowsAttachment) {
      fileInputRef.current?.click();
    }
  };

  const {
    injectMessage,
    simulateStreamMessage,
    streamMessage,
    removeMessage,
    endStreamMessage,
  } = useMessagesInternal();
  const { getCurrPath, getPrevPath, goToPath } = usePathsInternal();
  const { flowRef, inputRef } = useBotRefsContext();
  const flow = flowRef.current as Flow;
  const { showToast, dismissToast } = useToastsInternal();
  const { dispatchRcbEvent } = useDispatchRcbEventInternal();
  const { toggleChatWindow } = useChatWindowInternal();
  const { setTextAreaValue } = useTextAreaInternal();
  const { handleSubmitText } = useSubmitInputInternal();

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) {
      return;
    }

    const files = Array.from(fileList);
    event.target.value = '';

    if (settings.event?.rcbUserUploadFile) {
      const rcbEvent = await dispatchRcbEvent(RcbEvent.USER_UPLOAD_FILE, {
        files,
      });
      if (rcbEvent.defaultPrevented) {
        return;
      }
    }

    const currPath = getCurrPath();
    if (!currPath) return;

    const block = flow[currPath];
    if (!block) return;

    const fileHandler = block.file;
    if (fileHandler) {
      const fileNames = [];
      for (const file of files) {
        fileNames.push(file.name);
        if (settings.fileAttachment?.showMediaDisplay) {
          const fileDetails = await getMediaFileDetails(file);
          if (fileDetails.fileType && fileDetails.fileUrl) {
            await injectMessage(
              <div />, // MediaDisplay placeholder
              'USER',
            );
          }
        }
      }
      await handleSubmitText(
        '📄 ' + fileNames.join(', '),
        settings.fileAttachment?.sendFileName,
      );
      await fileHandler({
        userInput: inputRef.current?.value as string,
        prevPath: getPrevPath(),
        currPath: getCurrPath(),
        goToPath,
        setTextAreaValue,
        injectMessage,
        simulateStreamMessage,
        streamMessage,
        removeMessage,
        endStreamMessage,
        toggleChatWindow,
        showToast,
        dismissToast,
        files,
      });
    }
  };

  return (
    <>
      <button
        type="button"
        aria-label={settings.ariaLabel?.fileAttachmentButton ?? 'upload file'}
        onClick={handleClick}
        disabled={!blockAllowsAttachment}
        className={`rcb-file-attachment-button ${
          !blockAllowsAttachment ? 'rcb-file-attachment-button-disabled' : ''
        }`}
      >
        <img src="/new/attachment.svg" alt="attach" />
      </button>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleUpload}
        multiple={settings.fileAttachment?.multiple}
        accept={settings.fileAttachment?.accept}
        style={{ display: 'none' }}
      />
    </>
  );
};

export default FileAttachmentButton;

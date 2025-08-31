import React, { ChangeEvent, useRef, useState, useEffect } from 'react';
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
import { handleValidate } from '@/components/validations/validateInput';
import { FieldType } from '@/components/Zustand store data/MainFlow/flow';
import { Message } from 'react-chatbotify';

interface FileWithPreview {
  file: File;
  previewUrl?: string;
  id: string;
}

/**
 * Supports uploading of files from user with automatic drag detection, upload progress, and file preview.
 */
const FileAttachmentButton = ({
  onShowUploadModal,
}: {
  onShowUploadModal?: (show: boolean) => void;
}) => {
  const { settings } = useSettingsContext();
  const { blockAllowsAttachment } = usePathsInternal();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showDropModal, setShowDropModal] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [filesWithPreview, setFilesWithPreview] = useState<FileWithPreview[]>(
    [],
  );
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [currentPreviewFile, setCurrentPreviewFile] =
    useState<FileWithPreview | null>(null);

  // Auto-detect file dragging over the entire window
  useEffect(() => {
    let dragCounter = 0;

    const handleDragEnter = (e: DragEvent) => {
      e.preventDefault();
      dragCounter++;

      // Check if dragged items contain files
      if (e.dataTransfer?.types?.includes('Files') && blockAllowsAttachment) {
        setIsDragOver(true);
        setShowDropModal(true);
        if (onShowUploadModal) onShowUploadModal(true);
      }
    };

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      dragCounter--;

      if (dragCounter === 0) {
        setIsDragOver(false);
        // Small delay to prevent flickering
        setTimeout(() => {
          if (dragCounter === 0) {
            setShowDropModal(false);
            if (onShowUploadModal) onShowUploadModal(false);
          }
        }, 100);
      }
    };

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleWindowDrop = (e: DragEvent) => {
      e.preventDefault();
      dragCounter = 0;
      setIsDragOver(false);
      setShowDropModal(false);
      if (onShowUploadModal) onShowUploadModal(false);
    };

    // Add event listeners to window for global drag detection
    window.addEventListener('dragenter', handleDragEnter);
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('drop', handleWindowDrop);

    return () => {
      window.removeEventListener('dragenter', handleDragEnter);
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('drop', handleWindowDrop);
    };
  }, [blockAllowsAttachment, onShowUploadModal]);

  // Cleanup preview URLs on unmount only (not on filesWithPreview changes)
  useEffect(() => {
    return () => {
      // console.log('🧹 Cleaning up file preview URLs on component unmount');
      filesWithPreview.forEach((fileWithPreview) => {
        if (fileWithPreview.previewUrl) {
          URL.revokeObjectURL(fileWithPreview.previewUrl);
        }
      });
    };
  }, []); // Empty dependency array - only run on unmount

  const handleClick = () => {
    if (blockAllowsAttachment) {
      setShowDropModal(true);
      if (onShowUploadModal) onShowUploadModal(true);
    }
  };

  const closeDropModal = () => {
    setShowDropModal(false);
    setIsDragOver(false);
    if (onShowUploadModal) onShowUploadModal(false);
  };

  const closePreviewModal = () => {
    setShowPreviewModal(false);
    setCurrentPreviewFile(null);
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const files = Array.from(event.dataTransfer.files);
    await handleFiles(files);
  };

  // Dummy upload promise function (to be implemented later)
  const simulateFileUpload = (files: File[]): Promise<void> => {
    return new Promise((resolve, reject) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 15;
        setUploadProgress(Math.min(progress, 100));

        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            resolve();
          }, 500);
        }
      }, 200);
    });
  };

  const createFilePreview = (file: File): FileWithPreview => {
    // console.log('🎨 Creating file preview for:', file.name, file.type);

    const fileWithPreview: FileWithPreview = {
      file,
      id: Math.random().toString(36).substr(2, 9),
    };

    // Create preview URL for various file types
    const supportedTypes = [
      'image/', // Images
      'application/pdf', // PDFs
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Excel .xlsx
      'application/vnd.ms-excel', // Excel .xls
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // Word .docx
      'application/msword', // Word .doc
      'application/vnd.openxmlformats-officedocument.presentationml.presentation', // PowerPoint .pptx
      'application/vnd.ms-powerpoint', // PowerPoint .ppt
      'text/', // Text files
      'application/json', // JSON files
      'application/xml', // XML files
      'text/csv', // CSV files
    ];

    const isSupported = supportedTypes.some(
      (type) => file.type.startsWith(type) || file.type === type,
    );

    if (isSupported) {
      try {
        // Validate that the file is a valid Blob before creating object URL
        if (file instanceof Blob) {
          fileWithPreview.previewUrl = URL.createObjectURL(file);
          // console.log(
          //   `🖼️ Created preview URL for ${file.type}:`,
          //   fileWithPreview.previewUrl,
          // );
        } else {
          console.warn(
            'File is not a valid Blob, skipping preview URL creation:',
            file,
          );
        }
      } catch (error) {
        console.error('Error creating preview URL:', error);
      }
    } else {
      // console.log(
      //   `📄 File type ${file.type} not supported for preview, no preview URL created`,
      // );
    }

    // console.log('📋 Final file preview object:', fileWithPreview);
    return fileWithPreview;
  };

  const handleFiles = async (files: File[]) => {
    // console.log('📁 Selected files:', files);
    files.forEach((file) => {
      // console.log('📎 File info:', file.name, file.type, file.size);
    });

    closeDropModal();
    setIsUploading(true);
    setUploadProgress(0);

    // Create file previews
    const newFilesWithPreview = files.map(createFilePreview);
    setFilesWithPreview(newFilesWithPreview);

    try {
      // Simulate upload process
      await simulateFileUpload(files);

      // mimic the old handleUpload logic
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
        const fileNamesList = [];
        for (const file of files) {
          fileNamesList.push(file.name);
          if (settings.fileAttachment?.showMediaDisplay) {
            const fileDetails = await getMediaFileDetails(file);
            if (fileDetails.fileType && fileDetails.fileUrl) {
              //
              //
              // JOE MODIFIED HERE
              //if validairon failed it should neither if client side, upload nor inject, or upload then delete
              // console.log(
              //   'attachmentButton - this is the file Details',
              //   fileDetails,
              // );
              const validated = handleValidate(fileDetails);
              if (validated.success) {
                const message: Message = {
                  id: crypto.randomUUID(), // or however you generate IDs
                  type: FieldType.file, // use your enum, not a string
                  content: file, // can be a File here
                  sender: 'USER',
                  timestamp: Date.now().toString(),
                };
                await injectMessage(message, 'USER');
                // await injectMessage("Hello-this is the file injected", 'USER');
              }
            }
          }
        }
        // Inject custom file messages directly
        for (const fileWithPreview of newFilesWithPreview) {
          // console.log(
          //   '📨 Injecting file message for:',
          //   fileWithPreview.file.name,
          // );
          // console.log('📦 File preview data:', fileWithPreview);

          // Create custom message object with file data
          const fileMessage = {
            id: Math.random().toString(36).substr(2, 9),
            sender: 'USER',
            type: 'file',
            content: '📄 ' + fileWithPreview.file.name,
            timestamp: new Date().toUTCString(),
            fileData: {
              name: fileWithPreview.file.name,
              type: fileWithPreview.file.type,
              size: fileWithPreview.file.size,
              previewUrl: fileWithPreview.previewUrl,
            },
            attachment: {
              url: fileWithPreview.previewUrl,
              data: fileWithPreview.previewUrl,
              type: fileWithPreview.file.type,
              name: fileWithPreview.file.name,
            },
            tags: fileWithPreview.previewUrl
              ? [fileWithPreview.previewUrl]
              : [],
          };
          //
          //
          //
          //JOE MODIFIED HERE
          // console.log('AttachButton - Custom file message:', fileMessage);
          const validated = handleValidate(fileMessage.content);
          // console.log('func right after handleValidate: ', validated.success);
          if (validated.success) {
            // console.log(
            //   'func right after handleValidate inside if success  ',
            //   validated.success,
            // );
            const message = {
              id: Math.random().toString(36).substr(2, 9),
              sender: 'USER',
              type: 'file',
              content: '📄 ' + fileWithPreview.file.name,
              timestamp: new Date().toUTCString(),
              fileData: {
                name: fileWithPreview.file.name,
                type: fileWithPreview.file.type,
                size: fileWithPreview.file.size,
                previewUrl: fileWithPreview.previewUrl,
              },
              attachment: {
                url: fileWithPreview.previewUrl,
                data: fileWithPreview.previewUrl,
                type: fileWithPreview.file.type,
                name: fileWithPreview.file.name,
              },
              tags: fileWithPreview.previewUrl
                ? [fileWithPreview.previewUrl]
                : [],
            };
            // console.log(
            //   'func right after message inside if success: ',
            //   message,
            //);
            await injectMessage(message, 'USER');
          }
          // Inject the custom message directly
          // await injectMessage(fileMessage as any, 'USER');
        }

        // Call file handler to process the files
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

        // Trigger bot response by sending a hidden message to continue the flow
        // console.log('🤖 Triggering bot response for file upload');
        const uploadedFileNames = newFilesWithPreview
          .map((fp) => fp.file.name)
          .join(', ');
        // console.log(
        //   '📝 Sending hidden message:',
        //   `Uploaded files: ${uploadedFileNames}`,
        // );

        // Use handleSubmitText to trigger the bot's response flow
        await handleSubmitText(`Uploaded files: ${uploadedFileNames}`, false);
      }
    } catch (error) {
      console.error('Upload failed:', error);
      showToast('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      // Don't clear files immediately - let them persist for preview
      // The file data is now stored in the message objects
      // console.log('✅ File upload completed, file data stored in messages');
    }
  };

  const handleFileInputChange = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const fileList = event.target.files;
    if (!fileList) return;
    const files = Array.from(fileList);
    event.target.value = '';
    await handleFiles(files);
  };

  const handlePreviewFile = (fileWithPreview: FileWithPreview) => {
    setCurrentPreviewFile(fileWithPreview);
    setShowPreviewModal(true);
  };

  const removeFile = (fileId: string) => {
    setFilesWithPreview((prev) => {
      const updated = prev.filter((f) => f.id !== fileId);
      // Revoke URL for removed file
      const removedFile = prev.find((f) => f.id === fileId);
      if (removedFile?.previewUrl) {
        URL.revokeObjectURL(removedFile.previewUrl);
      }
      return updated;
    });
  };

  const renderFilePreview = (fileWithPreview: FileWithPreview) => {
    const { file, previewUrl } = fileWithPreview;
    const isImage = file.type.startsWith('image/');
    const isPDF = file.type === 'application/pdf';
    const isVideo = file.type.startsWith('video/');
    const isAudio = file.type.startsWith('audio/');

    return (
      <div
        key={fileWithPreview.id}
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#3a3a3a',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '8px',
          border: '1px solid #555555',
        }}
      >
        {/* File Icon/Preview */}
        <div
          style={{
            width: '40px',
            height: '40px',
            marginRight: '12px',
            borderRadius: '4px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#555555',
          }}
        >
          {isImage && previewUrl ? (
            <img
              src={previewUrl}
              alt={file.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#888888">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
          )}
        </div>

        {/* File Info */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div
            style={{
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '500',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {file.name}
          </div>
          <div style={{ color: '#888888', fontSize: '12px' }}>
            {(file.size / 1024).toFixed(1)} KB
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => handlePreviewFile(fileWithPreview)}
            style={{
              background: 'transparent',
              border: '1px solid #42b0c5',
              color: '#42b0c5',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            Preview
          </button>
          <button
            onClick={() => removeFile(fileWithPreview.id)}
            style={{
              background: 'transparent',
              border: '1px solid #dc3545',
              color: '#dc3545',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            Remove
          </button>
        </div>
      </div>
    );
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

  return (
    <>
      <button
        type="button"
        aria-label={settings.ariaLabel?.fileAttachmentButton ?? 'upload file'}
        onClick={handleClick}
        disabled={!blockAllowsAttachment || isUploading}
        className={`rcb-file-attachment-button ${!blockAllowsAttachment ? 'rcb-file-attachment-button-disabled' : ''}`}
      >
        <img src="/new/attachment.svg" alt="attach" />
      </button>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileInputChange}
        multiple={settings.fileAttachment?.multiple}
        accept={settings.fileAttachment?.accept}
        style={{ display: 'none' }}
      />

      {/* File Upload Modal */}
      {showDropModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            overscrollBehavior: 'contain',
          }}
          onClick={closeDropModal}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
              padding: window.innerWidth <= 600 ? '40px 24px' : '60px 50px',
              borderRadius: '24px',
              minWidth: window.innerWidth <= 600 ? '320px' : '450px',
              minHeight: window.innerWidth <= 600 ? '280px' : '320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow:
                '0 32px 64px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)',
              border: isDragOver
                ? '2px solid #42b0c5'
                : '2px solid transparent',
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: isDragOver
                ? 'scale(1.05) translateY(-4px)'
                : 'scale(1) translateY(0)',
              animation: 'slideUpBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              maxWidth: '90vw',
              maxHeight: '85vh',
              width: '100%',
              boxSizing: 'border-box',
              position: 'relative',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
            onDrop={handleDrop}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDragEnter={() => setIsDragOver(true)}
            onDragLeave={() => setIsDragOver(false)}
          >
            {/* Animated background particles */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: isDragOver
                  ? 'radial-gradient(circle at 50% 50%, rgba(66, 176, 197, 0.1) 0%, transparent 70%)'
                  : 'transparent',
                transition: 'all 0.3s ease',
                pointerEvents: 'none',
              }}
            />

            {/* Upload Icon */}
            <div
              style={{
                width: window.innerWidth <= 600 ? '64px' : '80px',
                height: window.innerWidth <= 600 ? '64px' : '80px',
                borderRadius: '50%',
                background: isDragOver
                  ? 'linear-gradient(135deg, #42b0c5 0%, #3a9fb4 100%)'
                  : 'linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: window.innerWidth <= 600 ? '24px' : '32px',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: isDragOver
                  ? 'rotate(360deg) scale(1.1)'
                  : 'rotate(0deg) scale(1)',
                border: `3px solid ${isDragOver ? '#42b0c5' : '#4a4a4a'}`,
                boxShadow: isDragOver
                  ? '0 20px 40px rgba(66, 176, 197, 0.3), 0 0 0 4px rgba(66, 176, 197, 0.2)'
                  : '0 8px 16px rgba(0, 0, 0, 0.3)',
              }}
            >
              <svg
                width={window.innerWidth <= 600 ? '28' : '36'}
                height={window.innerWidth <= 600 ? '28' : '36'}
                viewBox="0 0 24 24"
                fill="none"
                stroke={isDragOver ? '#ffffff' : '#888888'}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: 'all 0.3s ease',
                  transform: isDragOver ? 'translateY(-2px)' : 'translateY(0)',
                }}
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>

            <div
              style={{
                fontSize: window.innerWidth <= 600 ? '20px' : '26px',
                fontWeight: '700',
                color: isDragOver ? '#42b0c5' : '#ffffff',
                marginBottom: window.innerWidth <= 600 ? '12px' : '16px',
                textAlign: 'center',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                wordBreak: 'break-word',
                letterSpacing: '-0.5px',
                transform: isDragOver ? 'translateY(-2px)' : 'translateY(0)',
              }}
            >
              {isDragOver ? '✨ Drop files here!' : 'Upload Your Files'}
            </div>

            <div
              style={{
                fontSize: window.innerWidth <= 600 ? '14px' : '16px',
                color: '#aaaaaa',
                marginBottom: window.innerWidth <= 600 ? '32px' : '40px',
                textAlign: 'center',
                lineHeight: '1.6',
                wordBreak: 'break-word',
                transition: 'all 0.3s ease',
                opacity: isDragOver ? 0.8 : 1,
              }}
            >
              {isDragOver
                ? 'Release to upload instantly'
                : 'Drag and drop files here or click to browse'}
            </div>

            <button
              style={{
                padding: window.innerWidth <= 600 ? '14px 28px' : '16px 36px',
                borderRadius: '16px',
                border: 'none',
                background: 'linear-gradient(135deg, #42b0c5 0%, #3a9fb4 100%)',
                color: '#ffffff',
                fontSize: window.innerWidth <= 600 ? '15px' : '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                marginBottom: window.innerWidth <= 600 ? '16px' : '20px',
                width: window.innerWidth <= 400 ? '100%' : 'auto',
                maxWidth: '100%',
                boxShadow: '0 8px 20px rgba(66, 176, 197, 0.3)',
                letterSpacing: '0.5px',
                minWidth: '140px',
              }}
              onClick={() => fileInputRef.current?.click()}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  'translateY(-3px) scale(1.02)';
                e.currentTarget.style.boxShadow =
                  '0 12px 30px rgba(66, 176, 197, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow =
                  '0 8px 20px rgba(66, 176, 197, 0.3)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform =
                  'translateY(-1px) scale(0.98)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform =
                  'translateY(-3px) scale(1.02)';
              }}
            >
              Browse Files
            </button>

            {/* Subtle close hint */}
            <div
              style={{
                fontSize: '12px',
                color: '#666666',
                textAlign: 'center',
                opacity: isDragOver ? 0 : 0.7,
                transition: 'opacity 0.3s ease',
              }}
            >
              Click outside to close
            </div>
          </div>
        </div>
      )}

      {/* Upload Progress Modal */}
      {isUploading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
              padding: window.innerWidth <= 600 ? '32px 24px' : '48px 40px',
              borderRadius: '24px',
              minWidth: window.innerWidth <= 600 ? '320px' : '450px',
              maxWidth: '90vw',
              maxHeight: '80vh',
              overflow: 'auto',
              boxShadow:
                '0 32px 64px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: 'slideUpBounce 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              {/* iOS-style loading spinner */}
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  margin: '0 auto 20px',
                  position: 'relative',
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  style={{
                    animation: 'iosSpinner 1s linear infinite',
                  }}
                >
                  {[...Array(12)].map((_, i) => (
                    <rect
                      key={i}
                      x="15"
                      y="2"
                      width="2"
                      height="6"
                      rx="1"
                      fill="#42b0c5"
                      style={{
                        transformOrigin: '16px 16px',
                        transform: `rotate(${i * 30}deg)`,
                        opacity: 1 - i * 0.08,
                      }}
                    />
                  ))}
                </svg>
              </div>

              <div
                style={{
                  color: '#ffffff',
                  fontSize: window.innerWidth <= 600 ? '20px' : '24px',
                  fontWeight: '700',
                  marginBottom: '8px',
                  letterSpacing: '-0.5px',
                }}
              >
                Uploading Files...
              </div>
              <div
                style={{
                  color: '#42b0c5',
                  fontSize: window.innerWidth <= 600 ? '15px' : '16px',
                  fontWeight: '600',
                }}
              >
                {Math.round(uploadProgress)}% Complete
              </div>
            </div>

            {/* Enhanced Progress Bar */}
            <div
              style={{
                width: '100%',
                height: '12px',
                backgroundColor: '#3a3a3a',
                borderRadius: '8px',
                marginBottom: '32px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div
                style={{
                  width: `${uploadProgress}%`,
                  height: '100%',
                  background:
                    'linear-gradient(90deg, #42b0c5 0%, #5bc0db 50%, #42b0c5 100%)',
                  transition:
                    'width 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  borderRadius: '8px',
                  position: 'relative',
                  boxShadow: '0 0 12px rgba(66, 176, 197, 0.5)',
                }}
              >
                {/* Animated shine effect */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background:
                      'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                    animation: 'shine 2s infinite',
                  }}
                />
              </div>
            </div>

            {/* File List - Simple text only */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontSize: '14px',
                color: '#aaaaaa',
              }}
            >
              {filesWithPreview.map((fileData, index) => (
                <div
                  key={index}
                  style={{
                    padding: '8px 12px',
                    background: '#333333',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#42b0c5',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      color: '#ffffff',
                      fontSize: '14px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {fileData.file.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUpBounce {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes iosSpinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        `,
        }}
      />
    </>
  );
};

export default FileAttachmentButton;

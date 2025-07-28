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

  // Cleanup preview URLs on unmount
  useEffect(() => {
    return () => {
      filesWithPreview.forEach((fileWithPreview) => {
        if (fileWithPreview.previewUrl) {
          URL.revokeObjectURL(fileWithPreview.previewUrl);
        }
      });
    };
  }, [filesWithPreview]);

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
    const fileWithPreview: FileWithPreview = {
      file,
      id: Math.random().toString(36).substr(2, 9),
    };

    // Create preview URL for images
    if (file.type.startsWith('image/')) {
      fileWithPreview.previewUrl = URL.createObjectURL(file);
    }

    return fileWithPreview;
  };

  const handleFiles = async (files: File[]) => {
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
        const fileNames = [];
        for (const file of files) {
          fileNames.push(file.name);
          if (settings.fileAttachment?.showMediaDisplay) {
            const fileDetails = await getMediaFileDetails(file);
            if (fileDetails.fileType && fileDetails.fileUrl) {
              await injectMessage(<div />, 'USER');
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
    } catch (error) {
      console.error('Upload failed:', error);
      showToast('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      // Clear files after successful upload
      setTimeout(() => {
        setFilesWithPreview([]);
      }, 2000);
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
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.2s ease-out',
          }}
          onClick={closeDropModal}
        >
          <div
            style={{
              background: '#2a2a2a',
              padding: '60px 40px',
              borderRadius: '16px',
              minWidth: '420px',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow:
                '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              border: isDragOver ? '2px dashed #42b0c5' : '2px dashed #555555',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isDragOver ? 'scale(1.02)' : 'scale(1)',
              animation: 'slideUp 0.3s ease-out',
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
            {/* Upload Icon */}
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                backgroundColor: isDragOver ? '#42b0c5' : '#3a3a3a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                transition: 'all 0.3s ease',
                transform: isDragOver ? 'rotate(10deg)' : 'rotate(0deg)',
                border: `2px solid ${isDragOver ? '#42b0c5' : '#555555'}`,
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isDragOver ? '#ffffff' : '#888888'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>

            <div
              style={{
                fontSize: '22px',
                fontWeight: '600',
                color: isDragOver ? '#42b0c5' : '#ffffff',
                marginBottom: '12px',
                textAlign: 'center',
                transition: 'color 0.3s ease',
              }}
            >
              {isDragOver ? 'Drop files here!' : 'Upload Your Files'}
            </div>

            <div
              style={{
                fontSize: '15px',
                color: '#888888',
                marginBottom: '32px',
                textAlign: 'center',
                lineHeight: '1.5',
              }}
            >
              {isDragOver
                ? 'Release to upload'
                : 'Drag and drop files here or click to browse'}
            </div>

            <button
              style={{
                padding: '12px 28px',
                borderRadius: '8px',
                border: '1px solid #42b0c5',
                background: '#42b0c5',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginBottom: '16px',
              }}
              onClick={() => fileInputRef.current?.click()}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#3a9fb4';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#42b0c5';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              Browse Files
            </button>

            <button
              style={{
                background: 'transparent',
                border: '1px solid #555555',
                color: '#888888',
                cursor: 'pointer',
                fontSize: '14px',
                padding: '8px 20px',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
              }}
              onClick={closeDropModal}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#3a3a3a';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#666666';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#888888';
                e.currentTarget.style.borderColor = '#555555';
              }}
            >
              Cancel
            </button>
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
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              background: '#2a2a2a',
              padding: '40px',
              borderRadius: '16px',
              minWidth: '400px',
              maxWidth: '600px',
              maxHeight: '80vh',
              overflow: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              border: '1px solid #555555',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '8px',
                }}
              >
                Uploading Files...
              </div>
              <div style={{ color: '#888888', fontSize: '14px' }}>
                {Math.round(uploadProgress)}% Complete
              </div>
            </div>

            {/* Progress Bar */}
            <div
              style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#555555',
                borderRadius: '4px',
                marginBottom: '24px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${uploadProgress}%`,
                  height: '100%',
                  backgroundColor: '#42b0c5',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>

            {/* File List */}
            {filesWithPreview.map(renderFilePreview)}
          </div>
        </div>
      )}

      {/* File Preview Modal */}
      {showPreviewModal && currentPreviewFile && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={closePreviewModal}
        >
          <div
            style={{
              background: '#2a2a2a',
              borderRadius: '16px',
              maxWidth: '90vw',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              border: '1px solid #555555',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Preview Header */}
            <div
              style={{
                padding: '20px',
                borderBottom: '1px solid #555555',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div
                  style={{
                    color: '#ffffff',
                    fontSize: '18px',
                    fontWeight: '600',
                  }}
                >
                  {currentPreviewFile.file.name}
                </div>
                <div style={{ color: '#888888', fontSize: '14px' }}>
                  {currentPreviewFile.file.type} •{' '}
                  {(currentPreviewFile.file.size / 1024).toFixed(1)} KB
                </div>
              </div>
              <button
                onClick={closePreviewModal}
                style={{
                  background: 'transparent',
                  border: '1px solid #555555',
                  color: '#888888',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>

            {/* Preview Content */}
            <div style={{ padding: '20px', textAlign: 'center' }}>
              {currentPreviewFile.file.type.startsWith('image/') &&
              currentPreviewFile.previewUrl ? (
                <img
                  src={currentPreviewFile.previewUrl}
                  alt={currentPreviewFile.file.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    borderRadius: '8px',
                  }}
                />
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '60px',
                    color: '#888888',
                  }}
                >
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ marginBottom: '16px' }}
                  >
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                  <div style={{ fontSize: '18px', marginBottom: '8px' }}>
                    Preview not available
                  </div>
                  <div style={{ fontSize: '14px' }}>
                    This file type cannot be previewed in the browser
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FileAttachmentButton;

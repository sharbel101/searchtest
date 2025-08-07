export async function UploadFileHandler(
  file: File,
): Promise<{ status: 'success'; previewUrl: string }> {
  // console.log('📤 Received file for upload:', file);
  // console.log(`Starting upload for: ${file?.name}…`);

  if (!file) {
    throw new Error('No file provided to UploadFileHandler.');
  }

  if (!(file instanceof Blob)) {
    throw new Error(
      'Invalid file input passed to UploadFileHandler. File must be a Blob instance.',
    );
  }

  let previewUrl: string;
  try {
    previewUrl = URL.createObjectURL(file);
    console.log('🖼️ Created preview URL:', previewUrl);
  } catch (error) {
    console.error('❌ Failed to create preview URL:', error);
    throw new Error(`Failed to create preview URL for file: ${file.name}`);
  }

  await new Promise<void>((resolve) => setTimeout(resolve, 2000));

  // console.log(`File: ${file.name} has been uploaded!`);
  return { status: 'success', previewUrl };
}

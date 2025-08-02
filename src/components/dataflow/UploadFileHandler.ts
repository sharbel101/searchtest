/**
 * Simulates uploading a File and returns a blob URL
 * so your UI can instantly preview it.
 */
export async function UploadFileHandler(
  file: File,
): Promise<{ status: 'success'; previewUrl: string }> {
  console.log(`Starting upload for: ${file.name}…`);

  // Create a blob URL for preview
  const previewUrl = URL.createObjectURL(file);

  // Simulate a 2-second upload delay
  await new Promise<void>((resolve) => setTimeout(resolve, 2000));

  console.log(`File: ${file.name} has been uploaded!`);
  return { status: 'success', previewUrl };
}

interface FileParams {
  userInput?: string;
}

export const UploadFileHandler = (userInput: FileParams) => {
  console.log('File:' + userInput + ' have been uploaded!');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Success!');
    }, 2000);
  });
};

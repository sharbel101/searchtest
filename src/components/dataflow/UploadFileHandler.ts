//make it async add a timer and return a promise
export const UploadFileHandler = (userInput: string) => {
  console.log('File:' + userInput + ' have been uploaded!');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Success!');
    }, 2000);
  });
};

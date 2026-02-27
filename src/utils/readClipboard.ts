export const readClipboard = (): Promise<string> => {
  return navigator.clipboard.readText().catch((err) => {
    console.log(err);
    return '';
  });
};

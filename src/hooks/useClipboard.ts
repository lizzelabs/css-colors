import { CssColorsUtils } from '@/utils';
import { useEffect, useRef, useState } from 'react';

export const useClipboard = (): string => {
  const prev = useRef<string | null>(null);
  const [clipboard, setClipboard] = useState('');

  useEffect(() => {
    if (!navigator.clipboard || !navigator.clipboard.readText) {
      console.info('Clipboard not supported here.');
      return;
    }

    const paste = (event: ClipboardEvent) => {
      const text = event.clipboardData?.getData('text');
      setClipboard(text);
    };

    const readClipboard = () => {
      if (document.hasFocus()) {
        navigator.clipboard
          .readText()
          .then((value) => {
            if (value !== prev.current) {
              prev.current = value;
              setClipboard(value);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };

    const browser = CssColorsUtils.getBrowser();
    let interval = 0;

    if (browser === 'chrome') {
      interval = setInterval(readClipboard, 500);
    }

    window.addEventListener('click', readClipboard);
    window.addEventListener('paste', paste);

    return () => {
      clearInterval(interval);
      window.removeEventListener('click', readClipboard);
      window.removeEventListener('paste', paste);
    };
  }, []);

  return clipboard;
};

import { useEffect, useRef, useState } from 'react';

export const useClipboard = (): string => {
  const prev = useRef<string | null>(null);
  const [clipboard, setClipboard] = useState('');

  useEffect(() => {
    if (!navigator.clipboard || !navigator.clipboard.readText) {
      console.info('Clipboard not supported here.');
      return;
    }

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

    const interval = setInterval(readClipboard, 500);

    window.addEventListener('focus', readClipboard);

    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', readClipboard);
    };
  }, []);

  return clipboard;
};

import { CssColorsUtils } from '@/utils';
import { useEffect, useRef, useState } from 'react';

export const useClipboard = (): string => {
  const intervalId = useRef<any>(null);
  const [clipboard, setClipboard] = useState('');

  useEffect(function onPaste() {
    const onPaste = (event) => {
      event.preventDefault();
      setClipboard(event.clipboardData.getData('text'));
    };

    document.addEventListener('paste', onPaste);

    return () => {
      document.removeEventListener('paste', onPaste);
    };
  }, []);

  useEffect(function onFocus() {
    const browser = CssColorsUtils.getBrowser();

    if (browser !== 'chrome') {
      return;
    }

    const onFocus = async () => {
      try {
        if (document.hasFocus() === false) {
          return;
        }

        clearInterval(intervalId.current);
        intervalId.current = setInterval(async () => {
          const text = await navigator.clipboard.readText();
          setClipboard((prev) => (prev !== text ? text : prev));
        }, 500);
      } catch {
        console.warn(
          'Auto-paste blocked on focus. This is expected in some browsers',
        );
      }
    };

    window.addEventListener('focus', onFocus);

    return () => {
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  return clipboard;
};

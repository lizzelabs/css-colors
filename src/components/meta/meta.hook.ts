import { useEffect } from 'react';
import { MetaProperties } from './meta.types';
import { usePieceProvider } from '@lizzelabs/react-harmony';
import { Theme } from '@/theme';

export const useMeta = (_: MetaProperties) => {
  const { theme } = usePieceProvider<Theme>();

  useEffect(() => {
    let meta = document.querySelector(
      `meta[name='theme-color']`,
    ) as HTMLMetaElement | null;

    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }

    document.body.style.transition = theme.transitions.default;
    document.body.style.backgroundColor = theme.getCurrentPallete().color.raw;
    document.documentElement.style.backgroundColor =
      theme.getCurrentPallete().color.raw;
    meta.setAttribute('content', theme.getCurrentPallete().color.raw);

    return () => {
      document.head.removeChild(meta);
    };
  }, [theme]);

  return {};
};

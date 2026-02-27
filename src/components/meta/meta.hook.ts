import { useInsertionEffect } from 'react';
import { MetaProperties } from './meta.types';
import { usePieceProvider } from '@lizzelabs/react-harmony';
import { Theme } from '@/theme';

export const useMeta = (_: MetaProperties) => {
  const { theme } = usePieceProvider<Theme>();

  useInsertionEffect(() => {
    const meta = document.querySelector(
      `meta[name='theme-color']`,
    ) as HTMLMetaElement | null;

    if (meta) {
      meta.content = theme.color.raw;
    } else {
      const metaTheme = document.createElement('meta');
      metaTheme.name = 'theme-color';
      metaTheme.content = theme.color.raw;
      document.head.appendChild(metaTheme);
    }
  }, [theme]);

  return {};
};

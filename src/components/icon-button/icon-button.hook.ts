import { Theme } from '@/theme';
import type { IconButtonProps } from './icon-button.types';
import { usePieceProvider, WithStyle } from '@lizzelabs/react-harmony';
import { useMemo } from 'react';

export const useIconButton = (props: IconButtonProps) => {
  const { theme } = usePieceProvider<Theme>();
  const pallete = useMemo(() => theme.getCurrentPallete(), [theme]);
  const current = useMemo(
    () => ({
      color: props.color || pallete.color.raw,
      text: props.text || pallete.text.raw,
      highlight: props.highlight || pallete.highlight.raw,
    }),
    [
      props.color,
      props.text,
      pallete.color.raw,
      pallete.text.raw,
      pallete.highlight.raw,
    ],
  );

  const styles = useMemo(
    () =>
      ({
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flex: `0 0 ${(props.size || 0) + 10}px`,
        background: current.color,
        color: current.text,
        fontSize: `${Math.round(props.size * 0.7)}px`,
        borderRadius: props.round ? '50%' : undefined,
        aspectRatio: '1 / 1',
        outline: 'none',
        boxSizing: 'border-box',
        '&:hover': {
          background: current.highlight,
        },
      }) satisfies WithStyle,
    [current],
  );

  return {
    current,
    theme,
    styles,
  };
};

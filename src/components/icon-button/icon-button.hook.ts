import { Theme } from '@/theme';
import type { IconButtonProps } from './icon-button.types';
import { usePieceProvider, WithStyle } from '@lizzelabs/react-harmony';
import { useMemo } from 'react';

export const useIconButton = (props: IconButtonProps) => {
  const { theme } = usePieceProvider<Theme>();
  const current = useMemo(
    () => ({
      color: props.color || theme.color.raw,
      text: props.text || theme.text.raw,
      highlight: props.highlight || theme.highlight.raw,
    }),
    [
      props.color,
      props.text,
      theme.color.raw,
      theme.text.raw,
      theme.highlight.raw,
    ],
  );

  const styles = useMemo(
    () =>
      ({
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flex: `0 0 ${props.noPadding ? props.size : (props.size || 0) + 10}px`,
        padding: props.noPadding ? undefined : '10px',
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

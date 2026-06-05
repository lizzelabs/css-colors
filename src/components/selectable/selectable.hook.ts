import { useCallback, useMemo } from 'react';
import { SelectableProperties } from './selectable.types';
import { WithStyle } from '@lizzelabs/react-harmony';
import { Theme } from '@/theme';

export const useSelectable = (props: SelectableProperties) => {
  const container = useCallback(
    (theme: Theme) =>
      ({
        alignItems: 'center',
        justifyContent: 'center',
        background: props.color,
        fontWeight: props.active ? 'bold' : '500',
        padding: '8px',
        fontSize: `0.72rem`,
        cursor: 'pointer',
        color: props.text,
        '&:hover': {
          background: props.active ? props.color : props.highlight,
        },
      }) satisfies WithStyle,
    [props.active, props.color, props.highlight],
  );

  return {
    container,
  };
};

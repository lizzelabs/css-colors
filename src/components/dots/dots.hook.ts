import { useCallback, useMemo } from 'react';
import { DotsProperties } from './dots.types';
import { WithStyle } from '@lizzelabs/react-harmony';
import { Theme } from '@/theme';

export const useDots = (props: DotsProperties) => {
  const containerStyle = useMemo(
    () =>
      ({
        flex: '1 0 auto',
        display: 'flex',
        gap: '8px',
        justifyContent: 'center',
        alignItems: 'center',
      }) satisfies WithStyle,
    [],
  );

  const dotStyle = useCallback(
    (index: number) => (theme: Theme) =>
      ({
        width: '6px',
        height: '6px',
        flex: '0 0 6px',
        borderRadius: '50%',
        opacity: 0.9,
        border: 'none',
        cursor: 'pointer',
        background: props.active === index ? theme.text.raw : theme.shadow.raw,
        boxShadow:
          props.active === index
            ? `0px 0px 3px 3px ${theme.shadow.raw}`
            : 'none',
        transform: props.active === index ? 'scale(1.3)' : 'initial',
      }) satisfies WithStyle,
    [props.color, props.active],
  );

  const dots = useMemo(
    () => Array.from({ length: props.total }),
    [props.total],
  );

  return {
    dots,
    containerStyle,
    dotStyle,
  };
};

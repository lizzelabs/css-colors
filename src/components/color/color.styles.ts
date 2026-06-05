import { useCallback, useMemo } from 'react';
import { ColorProps, UseColorResult } from './color.types';
import { WithStyle } from '@lizzelabs/react-harmony';
import { Theme } from '@/theme';

export const useColorStyles = (props: ColorProps, { mode }: UseColorResult) => {
  const current = useMemo(
    () => ({
      ...props.theme[props.theme.activeAccent],
      background: {
        color: props.theme[props.theme.activeAccent][`${mode}Screen`],
        text: props.theme[props.theme.activeAccent][`${mode}ScreenText`],
      },
    }),
    [props.theme, props.theme.activeAccent, mode],
  );

  const containerStyle = useMemo(
    () =>
      ({
        containerType: 'inline-size',
        containerName: 'card',
        position: 'relative',
        flexDirection: 'column',
        cursor: 'pointer',
        background: current.background.color.raw,
        color: current.background.text.raw,
        flex: '1 0 250px',
        maxWidth: '500px',
        margin: '0 auto',
        borderRadius: '15px',
        boxShadow: props.selected
          ? 'none'
          : `8px 8px 13px 0px rgba(0, 0, 0, 0.2)`,
        border: props.selected ? `5px solid ${current.highlight.raw}` : 'none',
        boxSizing: 'content-box',
      }) satisfies WithStyle,
    [current, props.selected],
  );

  const contentStyle = useMemo(
    () =>
      ({
        background: current.color.raw,
        flexDirection: 'column',
      }) satisfies WithStyle,
    [current],
  );

  const rowSelectsStyle = useMemo(
    () =>
      ({
        width: '100%',
        flexDirection: 'row',
        '@container card (max-width: 399px)': {
          flexDirection: 'column',
        },
        '@container card (min-width: 400px)': {},
      }) satisfies WithStyle,
    [],
  );

  const rowInputStyle = useCallback(
    (theme: Theme) => ({
      padding: `${theme.padding.small}px`,
      '@container card (max-width: 399px)': {
        alignItems: 'center',
      },
      '@container card (min-width: 400px)': {
        flex: '1 0 auto',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
    [],
  );

  const sideButtonsStyle = useMemo(
    () => ({
      background: current.highlight.raw,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 50px',
      gap: '10px',
    }),
    [current],
  );

  const alertStyle = useMemo(
    () => ({
      fontSize: '0.7rem',
      padding: '5px',
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    [],
  );

  const successStyle = useMemo(
    () => [
      alertStyle,
      {
        background: current.success.raw,
        color: current.text.raw,
      },
    ],
    [alertStyle],
  );

  const warningStyle = useMemo(
    () => [
      alertStyle,
      {
        background: current.warning.raw,
        color: current.text.raw,
      },
    ],
    [alertStyle],
  );

  const infoStyle = useMemo(
    () => [
      alertStyle,
      {
        background: current.info.raw,
        color: current.text.raw,
      },
    ],
    [alertStyle],
  );

  const errorStyle = useMemo(
    () => [
      alertStyle,
      {
        background: current.error.raw,
        color: current.text.raw,
      },
    ],
    [alertStyle],
  );

  return {
    current,
    containerStyle,
    contentStyle,
    rowSelectsStyle,
    rowInputStyle,
    sideButtonsStyle,
    successStyle,
    warningStyle,
    infoStyle,
    errorStyle,
  };
};

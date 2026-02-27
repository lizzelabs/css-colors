import { useCallback, useMemo } from 'react';
import { CssColorsUtils } from '@/utils';
import { HexInputProps } from './hex-input.types';
import { InputsUtils } from '../inputs.utils';
import { WithStyle } from '@lizzelabs/react-harmony';
import { Theme } from '@/theme';

export const useHexInput = (props: HexInputProps) => {
  const gradient = useMemo(
    () => [
      'rgba(0, 0, 0, 0.4)',
      'rgba(51, 51, 51, 0.4)',
      'rgba(102, 102, 102, 0.4)',
      'rgba(153, 153, 153, 0.4)',
      'rgba(204, 204, 204, 0.4)',
      'rgba(255, 255, 255, 0.4)',
    ],
    [],
  );

  const containerStyle = useMemo(
    () =>
      ({
        flexDirection: 'column',
        gap: '10px',
        height: '100%',
        justifyContent: 'center',
      }) satisfies WithStyle,
    [],
  );

  const markerStyle = useCallback(
    (theme: Theme) =>
      ({
        display: 'block',
        alignSelf: 'flex-end',
        fontSize: `${theme.textSize.small}rem`,
        fontWeight: 'bold',
        padding: `${theme.padding.big}px`,
        textAlign: 'center',
        borderRadius: '5px',
        userSelect: 'none',
        transition: theme.transitions.default,
        animation: '$textTyping 0.3s step-start',
        color: props.text ? props.text : theme.text.raw,
      }) satisfies WithStyle,
    [],
  );

  const value = (props.hex?.raw || '').replace('#', '');
  const alpha =
    value.length >= 8
      ? CssColorsUtils.round(parseInt(value.substring(6, 8), 16) / 255, 1)
      : 1;

  const onChange = useCallback(
    (input?: string) => {
      return InputsUtils.getInputOrColor(input, 'HEX', 'string')
        .ifInputIsAColor((domainColor) => {
          if (props.onChange) {
            props.onChange(domainColor);
          }
        })
        .ifInputIsAValue((hex) => {
          if (props.onChange) {
            props.onChange({
              type: 'HEX',
              raw: `#${hex}`,
            });
          }
        });
    },
    [props],
  );

  const onAlphaChange = useCallback(
    (alpha: number) => {
      const alphaAsHex = Math.round(alpha * 255)
        .toString(16)
        .slice(-2)
        .padStart(2, '0')
        .toUpperCase();

      if (props.onChange) {
        props.onChange({
          type: 'HEX',
          raw: `#${value.length >= 8 ? value.substring(0, 6) + alphaAsHex : value + alphaAsHex}`,
        });
      }
    },
    [value, props],
  );

  return {
    markerStyle,
    containerStyle,
    gradient,
    value,
    onChange,
    alpha,
    onAlphaChange,
  };
};

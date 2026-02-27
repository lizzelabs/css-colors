/* eslint-disable @typescript-eslint/no-explicit-any */
import { CssColorsFactories } from '@/factories';
import { useCallback, useMemo } from 'react';
import { RGBInputProps } from './rgb-input.types';
import type { RGB, RGBA } from '@/types';
import { InputsUtils } from '../inputs.utils';
import { WithStyle } from '@lizzelabs/react-harmony';

export const useRgbInput = <HasAlpha extends boolean>({
  hasAlpha,
  value,
  onChange,
}: RGBInputProps<HasAlpha>) => {
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

  const onRedChange = useCallback(
    (input: string | undefined) => {
      return InputsUtils.getInputOrColor(
        input,
        hasAlpha ? 'RGBA' : 'RGB',
        'number',
      )
        .ifInputIsAColor((domainColor) => {
          if (onChange) {
            onChange(domainColor as HasAlpha extends true ? RGBA : RGB);
          }
        })
        .ifInputIsAValue((red) => {
          if (onChange) {
            onChange(
              InputsUtils.updateColorObject(
                value as HasAlpha extends true ? RGBA : RGB,
                {
                  red,
                  raw: CssColorsFactories.makeCssColorString(
                    value as HasAlpha extends true ? RGB : RGBA,
                    { red },
                  ),
                },
              ) as HasAlpha extends true ? RGBA : RGB,
            );
          }
        });
    },
    [onChange, hasAlpha],
  );

  const onGreenChange = useCallback(
    (input: string | undefined) => {
      return InputsUtils.getInputOrColor(
        input,
        hasAlpha ? 'RGBA' : 'RGB',
        'number',
      )
        .ifInputIsAColor((domainColor) => {
          if (onChange) {
            onChange(domainColor as HasAlpha extends true ? RGBA : RGB);
          }
        })
        .ifInputIsAValue((green) => {
          if (onChange) {
            onChange(
              InputsUtils.updateColorObject(
                value as HasAlpha extends true ? RGBA : RGB,
                {
                  green,
                  raw: CssColorsFactories.makeCssColorString(
                    value as HasAlpha extends true ? RGB : RGBA,
                    { green },
                  ),
                },
              ) as HasAlpha extends true ? RGBA : RGB,
            );
          }
        });
    },
    [onChange, hasAlpha],
  );

  const onBlueChange = useCallback(
    (input: string | undefined) => {
      return InputsUtils.getInputOrColor(
        input,
        hasAlpha ? 'RGBA' : 'RGB',
        'number',
      )
        .ifInputIsAColor((domainColor) => {
          if (onChange) {
            onChange(domainColor as HasAlpha extends true ? RGBA : RGB);
          }
        })
        .ifInputIsAValue((blue) => {
          if (onChange) {
            onChange(
              InputsUtils.updateColorObject(
                value as HasAlpha extends true ? RGBA : RGB,
                {
                  blue,
                  raw: CssColorsFactories.makeCssColorString(
                    value as HasAlpha extends true ? RGB : RGBA,
                    { blue },
                  ),
                },
              ) as HasAlpha extends true ? RGBA : RGB,
            );
          }
        });
    },
    [onChange, hasAlpha],
  );

  const onAlphaChange = useCallback(
    (alpha: number) => {
      if (onChange && hasAlpha) {
        onChange(
          InputsUtils.updateColorObject(
            value as HasAlpha extends true ? RGBA : RGB,
            {
              alpha,
              raw: CssColorsFactories.makeCssColorString(
                value as HasAlpha extends true ? RGB : RGBA,
                { alpha },
              ),
            },
          ) as HasAlpha extends true ? RGBA : RGB,
        );
      }
    },
    [onChange, hasAlpha],
  );

  return {
    hasAlpha,
    gradient,
    containerStyle,
    red: value?.red || 0,
    green: value?.green || 0,
    blue: value?.blue || 0,
    alpha: (value as RGBA).alpha === undefined ? 1 : (value as RGBA).alpha,
    onRedChange,
    onGreenChange,
    onBlueChange,
    onAlphaChange,
  };
};

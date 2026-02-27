/* eslint-disable @typescript-eslint/no-explicit-any */
import { CssColorsFactories } from '@/factories';
import { useCallback, useMemo } from 'react';
import type { HSL, HSLA } from '@/types';
import { HSLInputProps } from './hsl-input.types';
import { InputsUtils } from '../inputs.utils';
import { WithStyle } from '@lizzelabs/react-harmony';

export const useHslInput = <HasAlpha extends boolean>(
  props: HSLInputProps<HasAlpha>,
) => {
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

  const onHueChange = useCallback(
    (input: string | undefined) => {
      return InputsUtils.getInputOrColor(
        input,
        props.hasAlpha ? 'HSLA' : 'HSL',
        'number',
      )
        .ifInputIsAColor((domainColor) => {
          if (props.onChange) {
            props.onChange(domainColor as HasAlpha extends true ? HSLA : HSL);
          }
        })
        .ifInputIsAValue((hue) => {
          if (props.onChange) {
            props.onChange(
              InputsUtils.updateColorObject(
                props.value as HasAlpha extends true ? HSLA : HSL,
                {
                  hue,
                  raw: CssColorsFactories.makeCssColorString(
                    props.value as HasAlpha extends true ? HSLA : HSL,
                    { hue },
                  ),
                },
              ) as HasAlpha extends true ? HSLA : HSL,
            );
          }
        });
    },
    [props],
  );

  const onSaturationChange = useCallback(
    (input: string | undefined) => {
      return InputsUtils.getInputOrColor(
        input,
        props.hasAlpha ? 'HSLA' : 'HSL',
        'number',
      )
        .ifInputIsAColor((domainColor) => {
          if (props.onChange) {
            props.onChange(domainColor as HasAlpha extends true ? HSLA : HSL);
          }
        })
        .ifInputIsAValue((saturation) => {
          if (props.onChange) {
            props.onChange(
              InputsUtils.updateColorObject(
                props.value as HasAlpha extends true ? HSLA : HSL,
                {
                  saturation,
                  raw: CssColorsFactories.makeCssColorString(
                    props.value as HasAlpha extends true ? HSLA : HSL,
                    { saturation },
                  ),
                },
              ) as HasAlpha extends true ? HSLA : HSL,
            );
          }
        });
    },
    [props],
  );

  const onLightnessChange = useCallback(
    (input: string | undefined) => {
      return InputsUtils.getInputOrColor(
        input,
        props.hasAlpha ? 'HSLA' : 'HSL',
        'number',
      )
        .ifInputIsAColor((domainColor) => {
          if (props.onChange) {
            props.onChange(domainColor as HasAlpha extends true ? HSLA : HSL);
          }
        })
        .ifInputIsAValue((lightness) => {
          if (props.onChange) {
            props.onChange(
              InputsUtils.updateColorObject(
                props.value as HasAlpha extends true ? HSLA : HSL,
                {
                  lightness,
                  raw: CssColorsFactories.makeCssColorString(
                    props.value as HasAlpha extends true ? HSLA : HSL,
                    { lightness },
                  ),
                },
              ) as HasAlpha extends true ? HSLA : HSL,
            );
          }
        });
    },
    [props],
  );

  const onAlphaChange = useCallback(
    (alpha: number) => {
      if (props.onChange) {
        props.onChange(
          InputsUtils.updateColorObject(
            props.value as HasAlpha extends true ? HSLA : HSL,
            {
              alpha,
              raw: CssColorsFactories.makeCssColorString(
                props.value as HasAlpha extends true ? HSLA : HSL,
                { alpha },
              ),
            },
          ) as HasAlpha extends true ? HSLA : HSL,
        );
      }
    },
    [props],
  );

  return {
    hasAlpha: props.hasAlpha,
    currentColor: props.hasAlpha
      ? `hsla(${props.value?.hue || 0}, ${props.value?.saturation || 0}%, ${props.value?.lightness || 0}%, ${(props.value as HSLA).alpha})`
      : `hsl(${props.value?.hue || 0}, ${props.value?.saturation || 0}%, ${props.value?.lightness || 0}%)`,
    hue: props.value?.hue || 0,
    saturation: props.value?.saturation || 0,
    lightness: props.value?.lightness || 0,
    alpha:
      (props.value as HSLA).alpha === undefined
        ? 1
        : (props.value as HSLA).alpha,
    onHueChange,
    onSaturationChange,
    onLightnessChange,
    onAlphaChange,
    gradient,
    containerStyle,
  };
};

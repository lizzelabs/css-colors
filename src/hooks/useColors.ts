import { HSL, HSLA } from '@/types';
import { useCallback } from 'react';
import { ColorTheme, ColorThemeAccents } from './types';
import { WheelColor } from '@/components';
import { CssColorsFactories } from '@/factories';
import { LIGHTNESS_MAP, SATURATION_MAP } from './static';
import { ThemeColor } from '@/theme';

export const useColors = () => {
  const clampColor = useCallback(
    (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x)) * 100,
    [],
  );

  const shade = useCallback(
    (color: HSL | HSLA, light: number, scale: number): HSLA => {
      const hue = color.hue;
      const saturation = clampColor(color.saturation * scale);
      const lightness = clampColor(light);

      return {
        type: 'HSLA',
        hue,
        saturation,
        lightness,
        alpha: (color as HSLA).alpha,
        raw: `hsla(${hue}, ${saturation}%, ${lightness}%, ${(color as HSLA).alpha})`,
      } as HSLA;
    },
    [clampColor],
  );

  const numberToOrdinalString = useCallback((num) => {
    const words = [
      'Primary',
      'Secondary',
      'Tertiary',
      'Quaternary',
      'Quinary',
      'Senary',
      'Septenary',
      'Octonary',
      'Novenary',
      'Denary',
      'Undenary',
      'Duodenary',
    ];

    return words[num] || `${num}th`;
  }, []);

  const makeColorAccents = useCallback(
    (input: WheelColor, title: string | number): ColorTheme => {
      const parsedColor = CssColorsFactories.makeCurrentColorTo(
        input.color,
        'HSLA',
      );

      return (
        [
          '900',
          '800',
          '700',
          '600',
          'main',
          '400',
          '300',
          '200',
          '100',
        ] satisfies ColorThemeAccents[]
      ).reduce(
        (output, accent) => {
          const current =
            accent === 'main'
              ? parsedColor
              : shade(
                  parsedColor,
                  LIGHTNESS_MAP[accent],
                  SATURATION_MAP[accent],
                );

          const rgba = CssColorsFactories.makeCurrentColorTo(current, 'RGBA');
          const luminance = CssColorsFactories.makeLuminance(rgba);
          const highlight = CssColorsFactories.makeHighlightFromLuminance(
            rgba,
            luminance,
            'RGBA',
          );
          const text = CssColorsFactories.makeTextColorFromLuminance(luminance);
          const warning = CssColorsFactories.makeWarningColor(rgba, luminance);
          const success = CssColorsFactories.makeSuccessColor(rgba, luminance);
          const info = CssColorsFactories.makeInfoColor(rgba);
          const error = CssColorsFactories.makeErrorColor(rgba, luminance);
          const shadow = CssColorsFactories.takeFromColor(
            rgba,
            0.7,
            0.7,
            0.7,
            0.6,
          );
          const lightScreen = CssColorsFactories.makeWhiteColor(rgba);
          const darkScreen = CssColorsFactories.makeBlackColor(rgba);
          const darkScreenText = CssColorsFactories.makeTextColorFromLuminance(
            CssColorsFactories.makeLuminance(darkScreen),
          );
          const lightScreenText = CssColorsFactories.makeTextColorFromLuminance(
            CssColorsFactories.makeLuminance(lightScreen),
          );
          const lightGrey = CssColorsFactories.makeLightGreyFromColor(rgba);
          const darkGrey = CssColorsFactories.makeDarkGreyFromColor(rgba);
          const disabled = CssColorsFactories.makeRgbaFromLuminance(
            luminance,
            0.2,
          );

          return {
            ...output,
            [accent]: {
              color: rgba,
              highlight,
              text,
              shadow,
              warning,
              success,
              info,
              error,
              darkScreen,
              lightScreen,
              darkScreenText,
              lightScreenText,
              disabled,
              lightGrey,
              darkGrey,
              default: 'dark',
            } satisfies ThemeColor,
          };
        },
        {
          title:
            typeof title === 'string' ? title : numberToOrdinalString(title),
          id: input.id,
          activeAccent: 'main',
          kind: 'RGBA',
          applyTo: 'color',
        } as any as ColorTheme,
      );
    },
    [numberToOrdinalString],
  );

  return {
    clampColor,
    shade,
    makeColorAccents,
  };
};

import type { HSL, RGB } from '@/types';
import { CssColorsUtils } from '@/utils';

const getColors = (
  hue: number,
  chroma: number,
  helper: number,
  offset: number,
) => {
  const { red, green, blue } = (() => {
    if (0 <= hue && hue < 60) {
      return { red: chroma, green: helper, blue: 0 };
    }

    if (60 <= hue && hue < 120) {
      return { red: helper, green: chroma, blue: 0 };
    }

    if (120 <= hue && hue < 180) {
      return { red: 0, green: chroma, blue: helper };
    }

    if (180 <= hue && hue < 240) {
      return { red: 0, green: helper, blue: chroma };
    }

    if (240 <= hue && hue < 300) {
      return { red: helper, green: 0, blue: chroma };
    }

    if (300 <= hue && hue < 360) {
      return { red: chroma, green: 0, blue: helper };
    }

    return { red: 0, green: 0, blue: 0 };
  })();

  return {
    red: CssColorsUtils.round((red + offset) * 255, 0),
    green: CssColorsUtils.round((green + offset) * 255, 0),
    blue: CssColorsUtils.round((blue + offset) * 255, 0),
  };
};

export const makeRgbFromHsl = (color: HSL): RGB => {
  const saturation = color.saturation / 100;
  const lightness = color.lightness / 100;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const hue = color.hue;
  const helper = chroma * (1 - Math.abs(((hue / 60) % 2) - 1));
  const offset = lightness - chroma / 2;
  const { red, green, blue } = getColors(hue, chroma, helper, offset);

  return {
    type: 'RGB',
    red,
    green,
    blue,
    raw: `rgb(${red}, ${green}, ${blue})`,
  };
};

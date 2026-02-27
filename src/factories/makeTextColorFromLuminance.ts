import type { Luminance, RGBA } from '@/types';
import { CssColorsUtils } from '@/utils';

export const makeTextColorFromLuminance = (luminance: Luminance): RGBA => {
  const isDark = luminance.total > 0.5;

  const getColor = (value: number) => {
    return isDark
      ? CssColorsUtils.getBetweenRange(Math.round(value * 55), 0, 55)
      : CssColorsUtils.getBetweenRange(Math.round(value * 225), 225, 245);
  };

  const red = getColor(luminance.red);
  const green = getColor(luminance.green);
  const blue = getColor(luminance.blue);

  return {
    type: 'RGBA',
    red,
    green,
    blue,
    alpha: 1,
    raw: `rgba(${red}, ${green}, ${blue}, 1)`,
  };
};

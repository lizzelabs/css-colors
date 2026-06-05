import { AnyValidColor, Luminance, RGB } from '@/types';
import { makeCurrentColorTo } from './makeCurrentColorTo';
import { CssColorsUtils } from '@/utils';

export const makeWarningColor = (
  color: AnyValidColor,
  luminance: Luminance,
): RGB => {
  const isDark = luminance.total > 0.5;
  const rgb = makeCurrentColorTo(color, 'RGB');
  const maxRed = Math.max(rgb.red, rgb.green, rgb.blue);
  const red = CssColorsUtils.getBetweenRange(maxRed + 50, 50, 255);
  const green = CssColorsUtils.round(isDark ? red * 0.7 : red * 0.4);
  const blue = CssColorsUtils.round(isDark ? red * 0.4 : red * 0.15);

  return {
    type: 'RGB',
    red,
    green,
    blue,
    raw: `rgb(${red}, ${green}, ${blue})`,
  } satisfies RGB;
};

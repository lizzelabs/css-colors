import { AnyValidColor, Luminance, RGB } from '@/types';
import { makeCurrentColorTo } from './makeCurrentColorTo';
import { CssColorsUtils } from '@/utils';

export const makeErrorColor = (
  color: AnyValidColor,
  luminance: Luminance,
): RGB => {
  const rgb = makeCurrentColorTo(color, 'RGB');
  const isDark = luminance.total > 0.5;
  const factor = isDark ? 0.2 : 0.3;
  const maxLight = Math.max(rgb.red, rgb.green, rgb.blue);
  const red = CssColorsUtils.getBetweenRange(maxLight + 30, 30, 255);
  const maximum = red * 0.5;
  const green = CssColorsUtils.round(
    CssColorsUtils.getBetweenRange(rgb.green * factor, 0, maximum),
  );
  const blue = CssColorsUtils.round(
    CssColorsUtils.getBetweenRange(rgb.blue * factor, 0, maximum),
  );

  return {
    type: 'RGB',
    red,
    green,
    blue,
    raw: `rgb(${red}, ${green}, ${blue})`,
  } satisfies RGB;
};

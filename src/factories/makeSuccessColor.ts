import { AnyValidColor, Luminance, RGB } from '@/types';
import { makeCurrentColorTo } from './makeCurrentColorTo';
import { CssColorsUtils } from '@/utils';

export const makeSuccessColor = (
  color: AnyValidColor,
  luminance: Luminance,
): AnyValidColor => {
  const rgb = makeCurrentColorTo(color, 'RGB');
  const isDark = luminance.total > 0.5;
  const factor = isDark ? 0.5 : 0.3;
  const green = CssColorsUtils.getBetweenRange(
    Math.max(rgb.red, rgb.green, rgb.blue) - 35,
    35,
    255,
  );
  const maximum = green * 0.5;
  const red = CssColorsUtils.round(
    CssColorsUtils.getBetweenRange(green * factor, 0, maximum),
  );
  const blue = CssColorsUtils.round(
    CssColorsUtils.getBetweenRange(green * factor, 0, maximum),
  );

  return {
    type: 'RGB',
    red,
    green,
    blue,
    raw: `rgb(${red}, ${green}, ${blue})`,
  } satisfies RGB;
};

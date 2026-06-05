import { AnyValidColor, RGB } from '@/types';
import { makeCurrentColorTo } from './makeCurrentColorTo';
import { CssColorsUtils } from '@/utils';

export const makeInfoColor = (color: AnyValidColor): RGB => {
  const rgb = makeCurrentColorTo(color, 'RGB');
  const maxLight = Math.max(rgb.red, rgb.green, rgb.blue);
  const blue = CssColorsUtils.getBetweenRange(maxLight + 90, 90, 255);
  const maximum = blue * 0.5;
  const red = CssColorsUtils.round(
    CssColorsUtils.getBetweenRange(blue * 0.42, 0, maximum),
  );
  const green = CssColorsUtils.round(
    CssColorsUtils.getBetweenRange(blue * 0.76, 0, maximum),
  );

  return {
    type: 'RGB',
    red,
    green,
    blue,
    raw: `rgb(${red}, ${green}, ${blue})`,
  } satisfies RGB;
};

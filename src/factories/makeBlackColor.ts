import { AnyValidColor, RGBA } from '@/types';
import { makeCurrentColorTo } from './makeCurrentColorTo';
import { CssColorsUtils } from '@/utils';

export const makeBlackColor = (color: AnyValidColor): RGBA => {
  const rgba = makeCurrentColorTo(color, 'RGBA');
  const red = CssColorsUtils.round(rgba.red * 0.1 + 75 * 0.9);
  const green = CssColorsUtils.round(rgba.green * 0.1 + 75 * 0.9);
  const blue = CssColorsUtils.round(rgba.blue * 0.1 + 75 * 0.9);
  const alpha = rgba.alpha;
  const raw = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

  return {
    type: 'RGBA',
    red,
    green,
    blue,
    alpha,
    raw,
  };
};

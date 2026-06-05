import { AnyValidColor, Luminance, ValidColors } from '@/types';
import { makeCurrentColorTo } from './makeCurrentColorTo';
import { CssColorsUtils } from '@/utils';

export const makeHighlightFromLuminance = (
  color: AnyValidColor,
  luminance: Luminance,
  to: ValidColors,
): AnyValidColor => {
  const isDark = luminance.total > 0.5;
  const rgba = makeCurrentColorTo(color, 'RGBA');

  const red = CssColorsUtils.round(isDark ? rgba.red * 0.6 : rgba.red * 0.8);
  const green = CssColorsUtils.round(
    isDark ? rgba.green * 0.6 : rgba.green * 0.8,
  );
  const blue = CssColorsUtils.round(isDark ? rgba.blue * 0.6 : rgba.blue * 0.8);

  return makeCurrentColorTo(
    {
      type: 'RGBA',
      red,
      green,
      blue,
      alpha: rgba.alpha,
      raw: `rgba(${red}, ${green}, ${blue}, ${rgba.alpha})`,
    },
    to,
  );
};

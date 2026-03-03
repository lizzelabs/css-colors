import { AnyValidColor, Luminance, ValidColors } from '@/types';
import { makeCurrentColorTo } from './makeCurrentColorTo';

export const makeShadowFromLuminance = (
  color: AnyValidColor,
  luminance: Luminance,
  to: ValidColors,
): AnyValidColor => {
  const isDark = luminance.total > 0.5;
  const rgba = makeCurrentColorTo(color, 'RGBA');

  const red = isDark ? rgba.red * 0.85 : rgba.red * 0.6;
  const green = isDark ? rgba.green * 0.85 : rgba.green * 0.6;
  const blue = isDark ? rgba.blue * 0.85 : rgba.blue * 0.6;

  return makeCurrentColorTo(
    {
      type: 'RGBA',
      red,
      green,
      blue,
      alpha: 0.2,
      raw: `rgba(${red}, ${green}, ${blue}, 0.2)`,
    },
    to,
  );
};

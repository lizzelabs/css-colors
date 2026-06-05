import { AnyValidColor, RGBA } from '@/types';
import { makeCurrentColorTo } from './makeCurrentColorTo';
import { CssColorsUtils } from '@/utils';

export const takeFromColor = (
  color: AnyValidColor,
  redPercentage: number,
  greenPercentage: number,
  bluePercentage: number,
  alphaPercentage: number,
): RGBA => {
  const rgba = makeCurrentColorTo(color, 'RGBA');
  const red = CssColorsUtils.round(rgba.red * redPercentage);
  const green = CssColorsUtils.round(rgba.green * greenPercentage);
  const blue = CssColorsUtils.round(rgba.blue * bluePercentage);
  const alpha = rgba.alpha * alphaPercentage;
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

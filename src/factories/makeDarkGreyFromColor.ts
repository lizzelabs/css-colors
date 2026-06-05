import { AnyValidColor, RGBA } from '@/types';
import { makeCurrentColorTo } from './makeCurrentColorTo';
import { CssColorsUtils } from '@/utils';

export const makeDarkGreyFromColor = (color: AnyValidColor): RGBA => {
  const rgba = makeCurrentColorTo(color, 'RGBA');
  const red = CssColorsUtils.round(rgba.red * 0.299);
  const green = CssColorsUtils.round(rgba.green * 0.587);
  const blue = CssColorsUtils.round(rgba.blue * 0.114);

  return {
    ...rgba,
    red,
    green,
    blue,
    alpha: rgba.alpha,
    raw: `rgba(${red}, ${green}, ${blue}, ${rgba.alpha})`,
  };
};

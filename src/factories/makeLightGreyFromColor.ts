import { AnyValidColor, RGBA } from '@/types';
import { makeCurrentColorTo } from './makeCurrentColorTo';
import { CssColorsUtils } from '@/utils';

export const makeLightGreyFromColor = (color: AnyValidColor): RGBA => {
  const rgba = makeCurrentColorTo(color, 'RGBA');
  const baseRed = CssColorsUtils.round(rgba.red * 0.299);
  const baseGreen = CssColorsUtils.round(rgba.green * 0.587);
  const baseBlue = CssColorsUtils.round(rgba.blue * 0.114);
  const total = baseRed + baseGreen + baseBlue;
  const grey = CssColorsUtils.round(total * 0.15 + 255 * 0.8);

  return {
    ...rgba,
    red: grey,
    green: grey,
    blue: grey,
    alpha: rgba.alpha,
    raw: `rgba(${grey}, ${grey}, ${grey}, ${rgba.alpha})`,
  };
};

import { AnyValidColor, ValidColors } from '@/types';
import { makeCurrentColorTo } from './makeCurrentColorTo';

const convertType = (type: ValidColors): ValidColors => {
  const map = {
    RGB: 'RGBA',
    HSL: 'HSLA',
  };

  return map[type] === undefined ? type : map[type];
};

export const changeOpacity = (
  color: AnyValidColor,
  alpha: number,
): AnyValidColor => {
  const parsed = makeCurrentColorTo(color, 'RGBA');

  return makeCurrentColorTo(
    {
      ...parsed,
      alpha,
      raw: `rgba(${parsed.red}, ${parsed.green}, ${parsed.blue}, ${alpha})`,
    },
    convertType(color.type),
  );
};

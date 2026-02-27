import { AnyValidColor, ColorValue, ValidColors } from '@/types';
import { HandleWith } from './inputs.types';
import { CssColorsFactories } from '@/factories';
import { CssColorsUtils } from '@/utils';

export const InputsUtils = {
  getInputOrColor: <
    V extends HandleWith,
    C extends ValidColors,
    T extends ColorValue<C>,
  >(
    value: string | undefined,
    color: C,
    handleWith: V,
  ) => {
    const input = CssColorsFactories.makeColorFromString(value);
    const root = {
      ifInputIsAColor: (colorCallback: (value: T) => void) => {
        if (input.type !== 'INVALID') {
          colorCallback(
            CssColorsFactories.makeCurrentColorTo(
              input as AnyValidColor,
              color,
            ) as T,
          );
        }

        return root;
      },
      ifInputIsAValue: (
        valueCallback: (value: V extends 'string' ? string : number) => void,
      ) => {
        const safeValue =
          handleWith === 'string'
            ? (value || '').replace('#', '')
            : +(value || '').replace(/[^0-9.]+/g, '') || 0;

        if (input.type === 'INVALID') {
          valueCallback(safeValue as V extends 'string' ? string : number);
        }

        return root;
      },
    } as const;

    return root;
  },
  updateColorObject(
    current: AnyValidColor,
    update: Partial<AnyValidColor>,
  ): AnyValidColor {
    return CssColorsUtils.assign(
      {},
      current,
      CssColorsUtils.omitBy(
        update,
        (value) => CssColorsUtils.isNil(value) || CssColorsUtils.isNaN(value),
      ),
    ) as AnyValidColor;
  },
};

import { AnyValidColor, Position, Size } from '@/types';
import { useCallback } from 'react';
import {
  Picker,
  WheelComputedSize,
  WheelOutput,
  WheelOutputAccents,
} from './wheel.types';
import { CssColorsUtils } from '@/utils';
import { CssColorsFactories } from '@/factories';

export const useWheel = () => {
  const calculeSizes = useCallback(({ width, height }: Size) => {
    const dpr = window.devicePixelRatio || 1;
    const min = Math.min(width, height);
    const size = Math.abs(min * 0.5);
    const totalSize = Math.round(Math.round(size * dpr) * 0.85);
    const radius = totalSize / 2;
    const pickerRadius = CssColorsUtils.round(totalSize * 0.04);
    const center = {
      x: totalSize / 2,
      y: totalSize / 2,
    } satisfies Position;

    return {
      radius,
      pickerRadius,
      center,
      dpr,
      totalSize,
    };
  }, []);

  const generateAngles = useCallback(
    (length: number, angle: number): number[] => {
      return Array.from({ length }, (_, index) =>
        angle === 360 ? 1 : index * angle,
      );
    },
    [],
  );

  const degToRad = useCallback((deg: number): number => {
    return (deg * Math.PI) / 180;
  }, []);

  const rotate = useCallback(
    (center: Position, position: Position, theta: number): Position => {
      const cosTheta = Math.cos(theta);
      const sinTheta = Math.sin(theta);
      const x =
        cosTheta * (position.x - center.x) -
        sinTheta * (position.y - center.y) +
        center.x;
      const y =
        sinTheta * (position.x - center.x) +
        cosTheta * (position.y - center.y) +
        center.y;

      return { x, y };
    },
    [],
  );

  const makePickers = useCallback(
    (
      pickers: number,
      distanceBetweenEachOne: number,
      computed: WheelComputedSize,
      starts: Position | undefined = undefined,
    ): Picker[] => {
      const angles = generateAngles(pickers, distanceBetweenEachOne);
      const startPosition = !starts
        ? ({
            x: computed.center.x,
            y: computed.center.y + computed.radius / 3,
          } satisfies Position)
        : starts;

      return angles.map((item, index) => {
        const id = CssColorsUtils.newId();

        if (index === 0) {
          return {
            ...startPosition,
            id,
          };
        } else {
          return {
            ...rotate(computed.center, startPosition, degToRad(item)),
            id,
          };
        }
      });
    },
    [generateAngles, degToRad, rotate],
  );

  const isColorPresent = useCallback(
    (color: AnyValidColor, output: WheelOutput[]): boolean => {
      if (output.length <= 0) {
        return true;
      }

      const accents = [
        'main',
        '100',
        '200',
        '300',
        '400',
        '600',
        '700',
        '800',
        '900',
      ] as WheelOutputAccents[];

      const source = output.flatMap((current) =>
        accents.flatMap((accent) => [
          CssColorsFactories.makeCurrentColorTo(
            current[accent].color,
            color.type,
          ).raw.replace(/\s/g, ''),
          CssColorsFactories.makeCurrentColorTo(
            current[accent].highlight,
            color.type,
          ).raw.replace(/\s/g, ''),
          CssColorsFactories.makeCurrentColorTo(
            current[accent].text,
            color.type,
          ).raw.replace(/\s/g, ''),
          CssColorsFactories.makeCurrentColorTo(
            current[accent].shadow,
            color.type,
          ).raw.replace(/\s/g, ''),
        ]),
      );

      return source.some((current) => current === color.raw.replace(/\s/g, ''));
    },
    [],
  );

  return {
    calculeSizes,
    makePickers,
    isColorPresent,
  };
};

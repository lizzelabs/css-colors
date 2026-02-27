import { useCallback, useLayoutEffect, useState, type RefObject } from 'react';
import { debounce, isEqual } from 'lodash';
import { Size } from '@/types';

export const useObserveResize = (
  element: RefObject<HTMLElement | null>,
  initialValue: Size,
) => {
  const [measure, setMeasure] = useState<Size>({
    width: initialValue.width,
    height: initialValue.height,
  });

  useLayoutEffect(
    function onResize() {
      const container = element.current;

      if (container === null) {
        return;
      }

      const observer = new ResizeObserver(
        debounce((entries) => {
          for (const entry of entries) {
            const { width, height } = entry.contentRect;

            if (width <= 0 || height <= 0) {
              return;
            }

            const measure = { width, height };

            setMeasure((prev) => (isEqual(prev, measure) ? prev : measure));
          }
        }, 10),
      );

      observer.observe(container);

      return () => {
        observer.unobserve(container);
        observer.disconnect();
      };
    },
    [element.current],
  );

  const computeContainerSize = useCallback(() => {
    const container = element.current;

    if (container === null) {
      return;
    }

    const { width, height } = container.getBoundingClientRect();
    const measure = { width, height };

    setMeasure((prev) => (isEqual(measure, prev) ? prev : measure));
  }, []);

  return { ...measure, computeContainerSize };
};

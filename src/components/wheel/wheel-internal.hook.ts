import {
  PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { Picker, WheelComputedSize, WheelProps } from './wheel.types';
import { WheelSource } from './wheel.source';
import { WheelUtils } from './wheel.utils';
import { CssColorsUtils } from '@/utils';

export const useWheelInternal = (props: WheelProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawingRef = useRef(false);
  const movementRef = useRef(0);
  const drawRef = useRef(0);
  const downRef = useRef(0);
  const cache = useMemo(
    () =>
      new OffscreenCanvas(props.computed.totalSize, props.computed.totalSize),
    [props.computed.totalSize],
  );

  const move = useCallback(
    (
      event: PointerEvent,
      pickers: Picker[],
      selectedPicker: string,
      selectedIndex: number,
      distanceBetweenEachPicker: number,
      computed: WheelComputedSize,
      freeMove: boolean,
    ) => {
      if (selectedIndex === -1) {
        return;
      }

      const canvas = canvasRef.current;

      if (canvas === null) {
        return;
      }

      const mouse = WheelUtils.getMousePosition(canvas, event);

      if (freeMove) {
        props.onPickersMove(
          WheelUtils.freeMove(pickers, selectedPicker, computed, mouse),
        );
      } else {
        props.onPickersMove(
          WheelUtils.move(
            pickers,
            selectedPicker,
            selectedIndex,
            distanceBetweenEachPicker,
            computed,
            mouse,
          ),
        );
      }
    },
    [],
  );

  const onPointerMove = useCallback(
    CssColorsUtils.throttle((event: PointerEvent) => {
      cancelAnimationFrame(movementRef.current);
      movementRef.current = requestAnimationFrame(() =>
        move(
          event,
          props.pickers,
          props.selectedPicker,
          props.selectedIndex,
          props.distanceBetweenEachPicker,
          props.computed,
          props.freeMove,
        ),
      );
    }, 16),
    [
      move,
      props.pickers,
      props.selectedPicker,
      props.selectedIndex,
      props.distanceBetweenEachPicker,
      props.computed,
      props.freeMove,
    ],
  );

  const onPointerUp = useCallback(
    (event: ReactPointerEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;

      if (canvas !== null && canvas.hasPointerCapture(event.pointerId)) {
        canvas.releasePointerCapture(event.pointerId);
      }

      props.onSelectedPickerChange(-1, undefined);
    },
    [props.onSelectedPickerChange],
  );

  const onPointerDown = useCallback(
    (event: ReactPointerEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;

      if (canvas === null) {
        return;
      }

      canvas.setPointerCapture(event.pointerId);

      const mouse = WheelUtils.getMousePosition(canvas, event);
      const selectedIndex = props.pickers.findIndex((picker) =>
        WheelUtils.intersects(mouse, picker, props.computed.pickerRadius),
      );
      const selectedPicker = props.pickers[selectedIndex]?.id;

      props.onSelectedPickerChange(selectedIndex, selectedPicker);

      cancelAnimationFrame(downRef.current);
      downRef.current = requestAnimationFrame(() =>
        move(
          event as any,
          props.pickers,
          selectedPicker,
          selectedIndex,
          props.distanceBetweenEachPicker,
          props.computed,
          props.freeMove,
        ),
      );
    },
    [
      props.pickers,
      props.computed,
      onPointerMove,
      move,
      props.distanceBetweenEachPicker,
      props.freeMove,
    ],
  );

  useEffect(
    function draw() {
      if (drawingRef.current) {
        return;
      }

      const canvas = canvasRef.current;

      if (canvas === null) {
        return;
      }

      if (props.computed.totalSize <= 0) {
        return;
      }

      const { context: render2d } = WheelUtils.getCanvasContext(canvas, '2d', {
        willReadFrequently: true,
        premultipliedAlpha: false,
      });

      const { context: webGL } = WheelUtils.getCanvasContext(cache, 'webgl2', {
        preserveDrawingBuffer: false,
        willReadFrequently: true,
      });

      drawingRef.current = true;
      cancelAnimationFrame(drawRef.current);
      drawRef.current = requestAnimationFrame(async () => {
        const context = WheelSource.draw({
          canvas,
          props,
          cache,
          render2d,
          webGL,
        });

        props.onChange(WheelUtils.getWheelOutput(context));

        drawingRef.current = false;
      });
    },
    [
      props.computed,
      props.pickers,
      props.darkness,
      props.freeMove,
      props.onChange,
    ],
  );

  useEffect(
    function registerMovement() {
      const canvas = canvasRef.current;

      if (canvas === null) {
        return;
      }

      if (props.selectedIndex !== -1) {
        canvas.onpointermove = onPointerMove;
      } else {
        canvas.onpointermove = null;
      }
    },
    [props.selectedIndex, onPointerMove],
  );

  return { canvasRef, onPointerDown, onPointerUp, onPointerMove };
};

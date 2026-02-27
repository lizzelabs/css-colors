import {
  PointerEvent as ReactPointerEvent,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { SliderProps } from './slider.types';
import { CssColorsUtils } from '@/utils';
import { WithStyle } from '@lizzelabs/react-harmony';
import { Theme } from '@/theme';

export const useSlider = ({
  value,
  direction,
  color,
  max,
  min,
  step,
  deg,
  colors,
  text,
  onChange,
}: SliderProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const handlerRef = useRef<HTMLDivElement | null>(null);

  const gradient = useMemo(
    () => `linear-gradient(${deg}deg, ${colors.join(',')})`,
    [deg, colors],
  );

  const totalSteps = useMemo(() => max / step, [max, step]);

  const move = useMemo(
    () =>
      Math.min(
        Math.max(
          CssColorsUtils.round(
            (value / max) * 100 <= 10 ? -10 : (value / max) * 100,
          ),
          5,
        ),
        95,
      ),
    [value, max],
  );

  const containerStyle = useMemo(
    () =>
      ({
        height: '100%',
        width: '100%',
        flex: `1 1 auto`,
        borderRadius: '8px',
        justifySelf: 'center',
        userSelect: 'none',
        background: gradient,
        border: `1px solid rgba(6, 6, 6, 0.5)`,
        position: 'relative',
        touchAction: 'none',
        justifyContent: 'center',
        overflow: 'initial',
      }) satisfies WithStyle,
    [gradient],
  );

  const toggleStyle = useCallback(
    (theme: Theme) =>
      ({
        position: 'absolute',
        touchAction: 'none',
        userSelect: 'none',
        borderRadius: '5px',
        cursor: 'grab',
        width: direction === 'horizontal' ? '28px' : '100%',
        height: direction === 'horizontal' ? '100%' : '28px',
        fontWeight: 'bold',
        color: text || theme.text.raw,
        fontSize: `0.48rem`,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        transform: 'translate(-50% -50%)',
        boxShadow: `0px 0px 20px 4px rgba(0,0,0,0.75)`,
        left: direction === 'horizontal' ? `${move}%` : null,
        top: direction === 'vertical' ? `${move}%` : null,
        background: color || 'rgba(0, 0, 0, 0.6)',
      }) satisfies WithStyle,
    [direction, color, move, text],
  );

  const onMove = useCallback(
    (event?: PointerEvent) => {
      const track = trackRef.current;

      if (track === null) {
        return;
      }

      const rect = track.getBoundingClientRect();

      const percent =
        direction === 'horizontal'
          ? (event.clientX - rect.left) / rect.width
          : (event.clientY - rect.top) / rect.height;

      onChange(
        CssColorsUtils.round(Math.min(Math.max(percent * max, min), max), 1),
      );
    },
    [onChange, step, max, min],
  );

  const onExit = useCallback((move: (event: PointerEvent) => void) => {
    const handler = handlerRef.current;

    const exit = (event: PointerEvent) => {
      if (handler?.hasPointerCapture(event.pointerId)) {
        handler?.releasePointerCapture(event.pointerId);
      }

      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', exit);
    };

    return exit;
  }, []);

  const onClick = useCallback(
    (move: (event: PointerEvent) => void) =>
      (event: ReactPointerEvent<HTMLDivElement>) => {
        event.stopPropagation();

        const handler = handlerRef.current;

        if (handler !== null) {
          handler.setPointerCapture(event.pointerId);
        }

        window.addEventListener('pointermove', move, { passive: true });
        window.addEventListener('pointerup', onExit(move), { passive: true });
      },
    [],
  );

  return {
    trackRef,
    handlerRef,
    totalSteps,
    gradient,
    move,
    onClick,
    onExit,
    onMove,
    containerStyle,
    toggleStyle,
  };
};

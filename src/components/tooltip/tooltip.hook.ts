import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TooltipProps } from './tooltip.types';
import { WithStyle } from '@lizzelabs/react-harmony';
import { Theme } from '@/theme';

export const useTooltip = (_: TooltipProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLSpanElement | null>(null);
  const [show, setShow] = useState(false);

  const containerMeasures = containerRef.current?.getBoundingClientRect();
  const tooltipMeasures = tooltipRef.current?.getBoundingClientRect();

  const tooltipHeight = tooltipMeasures?.height || 0;
  const tooltipWidth = tooltipMeasures?.width || 0;
  const bottom = (containerMeasures?.bottom || 0) + window.scrollY;
  const left = (containerMeasures?.left || 0) + window.scrollX;
  const renderTopAt =
    bottom + tooltipHeight > window.innerHeight + window.scrollY
      ? bottom - tooltipHeight
      : bottom;

  const renderLeftAt =
    left + tooltipWidth > window.innerWidth
      ? window.innerWidth - tooltipWidth
      : left < 15
        ? 15
        : left;

  const containerStyle = useMemo(
    () =>
      ({
        position: 'relative',
        zIndex: 0,
      }) satisfies WithStyle,
    [],
  );

  const tooltipStyle = useCallback(
    (theme: Theme) =>
      ({
        display: show ? 'table' : 'none',
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
        zIndex: theme.zIndex.tooltip,
        height: show ? 'auto' : 0,
        width: show ? 'auto' : 0,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: `${theme.textSize.small}rem`,
        background: `rgba(6, 6, 6, 0.8)`,
        filter: 'blur(0)',
        transform: 'translateZ(0)',
        padding: `${theme.padding.medium}px`,
        borderRadius: '5px',
        position: 'absolute',
        margin: '15px',
        whiteSpace: 'nowrap',
        transition: theme.transitions.default,
        top: `${renderTopAt}px`,
        left: `${renderLeftAt}px`,
      }) satisfies WithStyle,
    [show, renderTopAt, renderLeftAt],
  );

  const onMouseEnter = useCallback((event: MouseEvent) => {
    event.preventDefault();
    setShow(true);
  }, []);

  const onMouseLeave = useCallback((event: MouseEvent) => {
    event.preventDefault();
    setShow(false);
  }, []);

  useEffect(function assignMouseEvents() {
    const container = containerRef.current;

    if (container === null) {
      return;
    }

    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mouseleave', onMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return {
    show,
    containerRef,
    tooltipRef,
    containerStyle,
    tooltipStyle,
  };
};

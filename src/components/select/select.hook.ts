import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { SelectProps, SelectValue } from './select.types';
import { usePieceProvider, WithStyle } from '@lizzelabs/react-harmony';
import { Theme } from '@/theme';

export const useSelect = <T>(props: SelectProps<T>) => {
  const { theme } = usePieceProvider<Theme>();
  const [selectVisibility, setSelectVisibility] = useState<
    'visible' | 'hidden'
  >('hidden');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const currentValueIndex = useMemo(
    () => props.options.findIndex((value) => value.id === props.value.id),
    [props.value, props.options],
  );

  const current = useMemo(
    () => ({
      color: props.color || theme.color.raw,
      text: props.text || theme.text.raw,
      highlight: props.highlight || theme.highlight.raw,
    }),
    [
      props.color,
      props.text,
      props.highlight,
      theme.color.raw,
      theme.text.raw,
      theme.highlight.raw,
    ],
  );

  const containerStyle = useMemo(
    () =>
      ({
        containerType: 'inline-size',
        containerName: 'select',
        cursor: 'pointer',
        flex: '1 1 100%',
        background: current.color,
        color: current.text,
        '&:hover': {
          background: current.highlight,
        },
      }) satisfies WithStyle,
    [current],
  );

  const textStyle = useMemo(
    () => ({
      textAlign: 'center',
      margin: '8px',
      fontWeight: 'bold',
      color: current.text,
      flex: '1 1 auto',
      alignItems: 'center',
      fontSize: '0.7rem',
      textTransform: props.uppercase ? 'uppercase' : 'none',
      '@container select (max-width: 300px)': {
        fontSize: '0.6rem',
      },
    }),
    [current.text, props.uppercase],
  );

  const listStyle = useCallback(
    (theme: Theme) =>
      ({
        visibility: selectVisibility === 'visible' ? 'visible' : 'hidden',
        zIndex: theme.zIndex.selectItems,
        gap: '5px',
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        background: current.color,
        color: current.text,
      }) satisfies WithStyle,
    [selectVisibility, current.color, current.text],
  );

  const optionStyle = useCallback(
    (theme: Theme) =>
      ({
        cursor: 'pointer',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '0 0 50px',
        fontSize: '0.75rem',
        padding: `${theme.padding.medium}px`,
        color: current.text,
        '&:hover': {
          background: current.highlight,
        },
      }) satisfies WithStyle,
    [current.highlight, current.text],
  );

  const setPreviousValue = useCallback(
    (event?: React.MouseEvent) => {
      event.stopPropagation();

      props.onChange(
        props.options[
          currentValueIndex <= 0
            ? props.options.length - 1
            : currentValueIndex - 1
        ],
      );
    },
    [props.options, props.onChange, currentValueIndex],
  );

  const setNextValue = useCallback(
    (event?: React.MouseEvent) => {
      event?.stopPropagation();

      props.onChange(
        props.options[
          currentValueIndex >= props.options.length - 1
            ? 0
            : currentValueIndex + 1
        ],
      );
    },
    [props.options, props.onChange, currentValueIndex],
  );

  const onOptionSelect = useCallback(
    (value: SelectValue<T>) => (event: React.MouseEvent) => {
      event.stopPropagation();
      props.onChange(value);
      setSelectVisibility('hidden');
    },
    [props.onChange],
  );

  const openSelect = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectVisibility('visible');
  }, []);

  const closeSelect = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectVisibility('hidden');
  }, []);

  const onDownArrow = useCallback(() => {
    if (selectVisibility === 'hidden') {
      setSelectVisibility('visible');
    } else {
      setNextValue();
    }
  }, [selectVisibility, setNextValue]);

  const selectKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const main = {
        ArrowDown: onDownArrow,
        ArrowLeft: setPreviousValue,
        ArrowRight: setNextValue,
        Enter: closeSelect as any,
      } satisfies { [key: string]: () => void };

      const fn = main[event.key as keyof typeof main];

      if (fn) {
        fn();
      }
    },
    [onDownArrow, setPreviousValue, setNextValue, closeSelect],
  );

  useEffect(
    function registerEvents() {
      const container = containerRef.current;

      if (container === null) {
        return;
      }

      container.addEventListener('keydown', selectKeyDown);

      return () => {
        container.removeEventListener('keydown', selectKeyDown);
      };
    },
    [onDownArrow, setPreviousValue, setNextValue, closeSelect],
  );

  return {
    current,
    theme,
    containerRef,
    setPreviousValue,
    setNextValue,
    openSelect,
    closeSelect,
    selectVisibility,
    onOptionSelect,
    currentValueIndex,
    containerStyle,
    textStyle,
    listStyle,
    optionStyle,
  };
};

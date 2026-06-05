import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ColorProps, UseColorResult } from './color.types';
import { SelectValue } from '../select';
import { exportTheme, ThemeColorAccents } from '@/theme';
import { AnyValidColor, ValidColors } from '@/types';
import { ApplyTo, ColorAccents, KindColor } from './color.static';
import { useNotification } from '../notifications';
import { ColorThemeAccents } from '@/hooks';

export const useColor = (props: ColorProps): UseColorResult => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const [mode, setMode] = useState<'dark' | 'light'>(
    props.theme[props.theme.activeAccent].default,
  );
  const { info } = useNotification();

  const color = props.theme[props.theme.activeAccent][props.theme.applyTo];

  const applyTo = useMemo(
    () => ApplyTo.find((apply) => apply.value === props.theme.applyTo),
    [props.theme.applyTo],
  );

  const kind = useMemo(
    () => KindColor.find((kind) => kind.value === props.theme.kind),
    [props.theme.kind],
  );

  const colorAccent = useMemo(
    () =>
      ColorAccents.find((accent) => accent.value === props.theme.activeAccent),
    [props.theme.activeAccent],
  );

  const onChangeActiveAccent = useCallback(
    (value: SelectValue<ColorThemeAccents>) => {
      props.onChangeAccent(props.theme, value.value);
    },
    [props.onChangeAccent, props.theme],
  );

  const onChangeApply = useCallback(
    (value: SelectValue<ThemeColorAccents>) => {
      props.onChangeApplyOn(props.theme, value.value);
    },
    [props.theme],
  );

  const onChangeColorKind = useCallback(
    (value: SelectValue<ValidColors>) => {
      props.onChangeColorKind(props.theme, value.value);
    },
    [props.theme],
  );

  const onColorChange = useCallback(
    (value: AnyValidColor) => {
      props.onColorChange(props.theme, value);
    },
    [props.theme],
  );

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(color.raw);
      info('It successfully copied to your clipboard 😉');
    } catch (e) {
      console.error(e);
    }
  }, [color]);

  const onExport = useCallback(() => {
    const objToExport = exportTheme(props.theme[props.theme.activeAccent]);
    const blob = new Blob([JSON.stringify(objToExport)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    window.open(url);
    URL.revokeObjectURL(url);
  }, [props.theme]);

  const onClick = useCallback(() => {
    props.onSelect(props.theme);
  }, [props.onSelect, props.theme]);

  const onModeChange = useCallback(() => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const onDelete = useCallback(() => {
    props.onDelete(props.theme);
  }, [props.onDelete, props.theme]);

  useEffect(
    function onTitleChange() {
      const title = titleRef.current.innerHTML;

      if (title !== props.theme.title) {
        props.onChangeTitle &&
          props.onChangeTitle({
            ...props.theme,
            title,
          });
      }
    },
    [titleRef, props.theme.title],
  );

  useEffect(function onRender() {
    const container = containerRef.current;

    if (container === null) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            props.onVisible();
          }
        }
      },
      {
        root: null,
        threshold: 0.75,
      },
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
      observer.disconnect();
    };
  }, []);

  return {
    titleRef,
    containerRef,
    color,
    applyTo,
    colorAccent,
    kind,
    mode,
    onChangeActiveAccent,
    onChangeApply,
    onChangeColorKind,
    onColorChange,
    onCopy,
    onExport,
    onClick,
    onModeChange,
    onDelete,
  };
};

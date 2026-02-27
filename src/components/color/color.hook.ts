import { useCallback, useEffect, useMemo, useRef } from 'react';
import { ColorProps } from './color.types';
import { WheelOutputAccents } from '../wheel';
import { SelectValue } from '../select';
import { Theme, ThemeColorAccents } from '@/theme';
import { AnyValidColor, ValidColors } from '@/types';
import { ApplyTo, ColorAccents, KindColor } from './color.static';
import { useNotification } from '../notifications';
import { CssColorsFactories } from '@/factories';
import { WithStyle } from '@lizzelabs/react-harmony';

export const useColor = (props: ColorProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { info } = useNotification();

  const current = useMemo(
    () => props.theme[props.theme.activeAccent],
    [props.theme, props.theme.activeAccent],
  );

  const containerStyle = useMemo(
    () =>
      ({
        containerType: 'inline-size',
        containerName: 'card',
        position: 'relative',
        cursor: 'pointer',
        flex: '1 0 250px',
        margin: '10px',
        background: current.color.raw,
        borderRadius: '15px',
        boxShadow: props.selected
          ? 'none'
          : `0px 0px 5px 3px ${current.shadow.raw}`,
        border: props.selected ? `2px solid ${current.shadow.raw}` : 'none',
      }) satisfies WithStyle,
    [current],
  );

  const contentStyle = useMemo(
    () =>
      ({
        '@container card (max-width: 399px)': {
          flexDirection: 'column',
        },
        '@container card (min-width: 400px)': {
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
      }) satisfies WithStyle,
    [],
  );

  const rowSelectsStyle = useMemo(
    () =>
      ({
        flex: '1 0 calc(100% - 50px)',
        height: '50px',
        width: '100%',
        '@container card (max-width: 399px)': {
          height: '35px',
          flex: '0 0 35px',
        },
      }) satisfies WithStyle,
    [],
  );

  const rowInputStyle = useCallback(
    (theme: Theme) => ({
      padding: `${theme.padding.small}px`,
      '@container card (max-width: 399px)': {
        alignItems: 'center',
      },
      '@container card (min-width: 400px)': {
        flex: '1 0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100% - 50px)',
      },
    }),
    [],
  );

  const sideButtonsStyle = useMemo(
    () => ({
      background: current.highlight.raw,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 30px',
      padding: '25px',
      gap: '15px',
      '@container card (max-width: 399px)': {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
    }),
    [current],
  );

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
    (value: SelectValue<WheelOutputAccents>) => {
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
    const keys = ColorAccents.map((accent) => accent.value);
    const applyTo = ApplyTo.map((kind) => kind.value);

    const objToExport = (
      Object.keys(props.theme) as WheelOutputAccents[]
    ).reduce((current, property) => {
      if (keys.includes(property as any) === false) {
        return current;
      }

      return {
        ...current,
        [property]: applyTo.map((apply) => ({
          [apply]: CssColorsFactories.makeCurrentColorTo(
            props.theme[property][apply],
            props.theme.kind,
          ),
        })),
      };
    }, {});

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
    containerRef,
    containerStyle,
    contentStyle,
    rowSelectsStyle,
    rowInputStyle,
    sideButtonsStyle,
    current,
    color,
    applyTo,
    colorAccent,
    kind,
    onChangeActiveAccent,
    onChangeApply,
    onChangeColorKind,
    onColorChange,
    onCopy,
    onExport,
    onClick,
  };
};

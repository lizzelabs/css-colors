/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCallback, useEffect, useMemo, useRef } from 'react';
import { CssColorsUtils } from '@/utils';
import { BaseInputProps, BaseInputValue } from './base-input.types';
import { Theme } from '@/theme';
import { WithStyle } from '@lizzelabs/react-harmony';

export const useBaseInput = <Type extends 'text' | 'number'>(
  props: BaseInputProps<Type>,
) => {
  const labelRef = useRef<HTMLInputElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const labelId = useMemo(() => CssColorsUtils.newId(), []);
  const id = useMemo(() => CssColorsUtils.newId(), []);

  const containerStyle = useCallback(
    () =>
      ({
        flex: '1 0 auto',
        flexDirection: 'column',
        height: '100%',
        touchAction: 'none',
        width: '100%',
        minWidth: `${props.minWidth}px`,
        margin: props.margin ? props.margin : 'unset',
      }) satisfies WithStyle,
    [props.minWidth, props.margin],
  );

  const labelStyle = useCallback(
    (theme: Theme) =>
      ({
        flex: '1 0 auto',
        pointerEvents: 'none',
        touchAction: 'none',
        fontSize: `${theme.textSize.small}rem`,
        userSelect: 'none',
        border: '1px solid transparent',
        textAlign: props.labelAlign ? props.labelAlign : 'center',
        borderRight: 'none',
        borderRadius: '3px',
        fontWeight: 'bold',
        cursor: 'default',
        padding: `${theme.padding.small}px 0px`,
        paddingLeft: '5px',
        background: props.highlight ? props.highlight : theme.highlight.raw,
        color: props.text || theme.text.raw,
        ...(props.disableLeftRadius
          ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
          : {}),
        ...(props.disableRightRadius
          ? { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
          : {}),
        '&:focus': {
          outline: 'none',
          boxShadow: 'none',
        },
      }) satisfies WithStyle,
    [
      props.highlight,
      props.disableLeftRadius,
      props.disableRightRadius,
      props.labelAlign,
    ],
  );

  const inputStyle = useCallback(
    (theme: Theme) => ({
      flex: '1 1 auto',
      width: `100%`,
      fontSize: `${theme.textSize.small}rem`,
      fontWeight: 'bold',
      background: 'transparent',
      touchAction: 'none',
      textAlign: props.textAlign ? props.textAlign : 'center',
      boxShadow: 'none',
      outline: 'none',
      border: `1px solid transparent`,
      borderLeft: 'none',
      padding: `${theme.padding.small}px 0px`,
      paddingLeft: '5px',
      borderRadius: '3px',
      color: props.text || theme.text.raw,
      ...(props.disableLeftRadius
        ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
        : {}),
      ...(props.disableRightRadius
        ? { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
        : {}),
      appearance: 'none',
      '-webkit-appearance': 'none',
      '-moz-appearence': 'none',
      '&:disabled': {
        background: `${props.color} !important`,
        cursor: 'default',
      },
      '&::-webkit-outer-spin-button': {
        margin: 0,
        appearance: 'none',
        '-webkit-appearance': 'none',
      },
      '&::-webkit-inner-spin-button': {
        margin: 0,
        appearance: 'none',
        '-webkit-appearance': 'none',
      },
      '&:-internal-autofill-selected': {
        background: props.highlight ? props.highlight : theme.highlight.raw,
      },
      '&:hover': {
        background: props.highlight ? props.highlight : theme.highlight.raw,
      },
      '&:focus': {
        background: props.highlight ? props.highlight : theme.highlight.raw,
        outline: 'none',
        boxShadow: 'none',
      },
      '&:focus-visible': {
        background: props.highlight ? props.highlight : theme.highlight.raw,
        outline: 'none',
        boxShadow: 'none',
      },
      '&:active': {
        background: props.highlight ? props.highlight : theme.highlight.raw,
      },
    }),
    [
      props.highlight,
      props.disableLeftRadius,
      props.disableRightRadius,
      props.textAlign,
    ],
  );

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (props.onChange) {
        props.onChange(
          event.target.value.length === 0
            ? undefined
            : props.type === 'number'
              ? (+(event.target.value || 0) as BaseInputValue<Type>)
              : ((event.target.value || '') as BaseInputValue<Type>),
        );
      }
    },
    [props],
  );

  useEffect(function onRender() {
    const label = labelRef.current;
    const input = inputRef.current;

    if (label === null || input === null) {
      return;
    }

    const cancelWheel = (event: WheelEvent) => {
      event.preventDefault();
      input.blur();
      label.blur();
    };

    input.addEventListener('wheel', cancelWheel, { passive: false });
    label.addEventListener('wheel', cancelWheel, { passive: false });

    return () => {
      input.removeEventListener('wheel', cancelWheel);
      label.removeEventListener('wheel', cancelWheel);
    };
  }, []);

  return {
    id,
    labelId,
    labelRef,
    inputRef,
    props,
    onChange,
    labelStyle,
    inputStyle,
    containerStyle,
  };
};

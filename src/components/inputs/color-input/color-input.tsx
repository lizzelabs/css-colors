import type { HEX, RGB, RGBA, ValidColors } from '@/types';
import { ColorInputProps } from './color-input.types';
import { useColorInput } from './color-input.hook';
import { withPieceAsContainer } from '@lizzelabs/react-harmony';
import { Fragment } from 'react';
import { HexInput } from '../hex-input';
import { RgbInput } from '../rgb-input';
import { HslInput } from '../hsl-input';

export const ColorInput = withPieceAsContainer(
  <T extends ValidColors>(props: ColorInputProps<T>) => {
    const { value, onHexInputChange, onRgbInputChange, onHslInputChange } =
      useColorInput(props);

    return (
      <Fragment>
        {props.type === 'HEX' && (
          <HexInput
            key='hex'
            hex={value as HEX}
            onChange={onHexInputChange}
            text={props.text}
            highlight={props.highlight}
          ></HexInput>
        )}
        {(props.type === 'RGB' || props.type === 'RGBA') && (
          <RgbInput
            key='rgb'
            value={value as RGB | RGBA}
            onChange={onRgbInputChange}
            hasAlpha={props.type === 'RGBA'}
            text={props.text}
            highlight={props.highlight}
          ></RgbInput>
        )}
        {(props.type === 'HSL' || props.type === 'HSLA') && (
          <HslInput
            key='hsl'
            value={value as any}
            onChange={onHslInputChange}
            hasAlpha={props.type === 'HSLA'}
            text={props.text}
            highlight={props.highlight}
          ></HslInput>
        )}
      </Fragment>
    );
  },
);

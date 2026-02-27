import { BaseInput } from '../base-input';
import { useHexInput } from './hex-input.hook';
import { HexInputProps } from './hex-input.types';
import { Piece } from '@lizzelabs/react-harmony';
import { Slider } from '@/components';

export const HexInput = (props: HexInputProps) => {
  const {
    gradient,
    value,
    alpha,
    containerStyle,
    markerStyle,
    onChange,
    onAlphaChange,
  } = useHexInput(props);

  return (
    <Piece withStyle={containerStyle}>
      <Piece flex='0 0 45px'>
        <Piece
          flex='0 0 35px'
          withStyle={markerStyle}
        >
          <b>#</b>
        </Piece>
        <BaseInput
          type='text'
          label='HEX'
          value={value}
          text={props.text}
          highlight={props.highlight}
          color={`#${value}`}
          onChange={onChange as any}
          textAlign='left'
          disableLeftRadius
          disableRightRadius
        />
      </Piece>
        <Piece flex='0 0 15px' >
      <Slider
        max={1}
        min={0}
        step={0.1}
        deg={90}
        direction='horizontal'
        colors={gradient}
        value={alpha}
        onChange={onAlphaChange}
      ></Slider>
      </Piece>
    </Piece>
  );
};

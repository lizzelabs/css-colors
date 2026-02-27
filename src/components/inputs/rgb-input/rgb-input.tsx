import { BaseInput } from '../base-input';
import { RGBInputProps } from './rgb-input.types';
import { useRgbInput } from './rgb-input.hook';
import { Piece } from '@lizzelabs/react-harmony';
import { Slider } from '@/components';

export const RgbInput = <T extends boolean>(props: RGBInputProps<T>) => {
  const {
    red,
    green,
    blue,
    alpha,
    gradient,
    containerStyle,
    onAlphaChange,
    onRedChange,
    onGreenChange,
    onBlueChange,
  } = useRgbInput(props);

  return (
    <Piece withStyle={containerStyle}>
      <Piece flex='0 0 45px'>
        <BaseInput
          key='red'
          type='text'
          label='RED'
          value={red}
          text={props.text}
          onChange={onRedChange as any}
          highlight={props.highlight}
          disableRightRadius
          disableLeftRadius
          min={0}
          max={255}
        />
        <BaseInput
          key='green'
          type='text'
          label='GREEN'
          value={green}
          text={props.text}
          onChange={onGreenChange as any}
          highlight={props.highlight}
          disableLeftRadius
          disableRightRadius
          min={0}
          max={255}
        />
        <BaseInput
          key='blue'
          type='text'
          label='BLUE'
          value={blue}
          text={props.text}
          onChange={onBlueChange as any}
          highlight={props.highlight}
          disableRightRadius
          disableLeftRadius
          min={0}
          max={255}
        />
      </Piece>
      {props.hasAlpha && (
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
      )}
    </Piece>
  );
};

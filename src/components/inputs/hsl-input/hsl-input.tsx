import { Slider } from '@/components';
import { BaseInput } from '../base-input';
import { useHslInput } from './hsl-input.hook';
import { HSLInputProps } from './hsl-input.types';
import { Piece } from '@lizzelabs/react-harmony';

export const HslInput = <T extends boolean>(props: HSLInputProps<T>) => {
  const {
    hue,
    saturation,
    lightness,
    alpha,
    gradient,
    containerStyle,
    onHueChange,
    onSaturationChange,
    onLightnessChange,
    onAlphaChange,
    currentColor,
  } = useHslInput(props);

  return (
    <Piece withStyle={containerStyle}>
      <Piece flex='0 0 45px'>
        <BaseInput
          type='text'
          label='HUE'
          value={hue}
          text={props.text}
          highlight={props.highlight}
          color={currentColor}
          onChange={onHueChange as any}
          disableLeftRadius
          disableRightRadius
          min={0}
          max={360}
        />
        <BaseInput
          type='text'
          label='Chroma'
          value={saturation}
          text={props.text}
          highlight={props.highlight}
          color={currentColor}
          onChange={onSaturationChange as any}
          disableLeftRadius
          disableRightRadius
          min={0}
          max={100}
        />
        <BaseInput
          type='text'
          label='Tone'
          value={lightness}
          text={props.text}
          highlight={props.highlight}
          color={currentColor}
          onChange={onLightnessChange as any}
          disableLeftRadius
          disableRightRadius
          min={0}
          max={100}
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

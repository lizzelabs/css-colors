import { Piece } from '@lizzelabs/react-harmony';
import { SliderProps } from './slider.types';
import { useSlider } from './slider.hook';

export const Slider = (props: SliderProps) => {
  const { containerStyle, toggleStyle, trackRef, handlerRef, onClick, onMove } =
    useSlider(props);

  return (
    <Piece
      ref={trackRef}
      as='div'
      draggable={false}
      withStyle={containerStyle}
    >
      <Piece
        ref={handlerRef}
        draggable={false}
        withStyle={toggleStyle}
        onPointerDown={onClick(onMove)}
      >
        {props.value}
      </Piece>
    </Piece>
  );
};

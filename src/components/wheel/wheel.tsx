import { ReactNode } from 'react';
import { WheelProps } from './wheel.types';
import { Piece } from '@lizzelabs/react-harmony';
import { useWheelInternal } from './wheel-internal.hook';

export const Wheel = (props: WheelProps): ReactNode => {
  const { canvasRef, onPointerDown, onPointerUp } = useWheelInternal(props);

  return (
    <Piece
      position='relative'
      justifyContent='center'
      atRow={props.atRow}
    >
      <Piece
        ref={canvasRef}
        tabIndex={-1}
        as='canvas'
        position='absolute'
        left='50%'
        top='50%'
        transform='translate(-50%, -50%)'
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      ></Piece>
    </Piece>
  );
};

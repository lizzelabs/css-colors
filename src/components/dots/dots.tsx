import { Piece, withPieceAsContainer } from '@lizzelabs/react-harmony';
import { ReactNode } from 'react';
import { DotsProperties } from './dots.types';
import { useDots } from './dots.hook';

export const Dots = withPieceAsContainer(
  (props: DotsProperties): ReactNode => {
    const { dots, containerStyle, dotStyle } = useDots(props);

    return (
      <Piece withStyle={containerStyle}>
        {dots.map((_, index) => (
          <Piece
            key={index}
            withStyle={dotStyle(index)}
          ></Piece>
        ))}
      </Piece>
    );
  },
  { flex: '1 0 auto' },
);

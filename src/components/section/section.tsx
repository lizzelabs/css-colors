import { Piece, WithStyle } from '@lizzelabs/react-harmony';
import { SectionProperties } from './section.types';
import { ReactNode, useMemo } from 'react';

export const Section = (props: SectionProperties): ReactNode => {
  const withStyle = useMemo(
    () =>
      ({
        height: '100%',
        width: '100%',
        flex: '0 0 100%',
        scrollSnapAlign: 'start',
        display: 'grid',
        gridTemplateRows: props.contentRows,
        gridTemplateColumns: props.contentColumns,
        alignItems: props.align,
        justifyContent: props.justify,
      }) satisfies WithStyle,
    [props.contentColumns, props.contentRows, props.align, props.justify],
  );

  return (
    <Piece
      ref={props.ref}
      as='section'
      withStyle={withStyle}
    >
      {props.children}
    </Piece>
  );
};

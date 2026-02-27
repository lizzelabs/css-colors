import { Piece, withPieceAsContainer } from '@lizzelabs/react-harmony';
import { BaseInputProps } from './base-input.types';
import { useBaseInput } from './base-input.hook';

export const BaseInput = withPieceAsContainer(
  <T extends 'text' | 'number'>(props: BaseInputProps<T>) => {
    const {
      onChange,
      id,
      labelId,
      labelStyle,
      inputStyle,
      containerStyle,
      inputRef,
      labelRef,
    } = useBaseInput(props);

    return (
      <Piece withStyle={containerStyle}>
        {props.label && (
          <Piece
            ref={labelRef}
            id={labelId}
            as='input'
            aria={{ 'aria-label': 'Label' }}
            type='text'
            value={props.label}
            autoComplete='off'
            disabled
            withStyle={labelStyle}
          ></Piece>
        )}
        <Piece>
          <Piece
            ref={inputRef}
            as='input'
            id={id}
            type={props.type}
            value={
              props.value === undefined || props.value === null
                ? ''
                : props.value
            }
            autoComplete='off'
            autoCorrect='off'
            min={props.min}
            max={props.max}
            aria={{ 'aria-label': 'Value' }}
            onChange={onChange}
            withStyle={inputStyle}
            disabled={props.disabled}
          ></Piece>
          {props.children && <Piece>{props.children}</Piece>}
        </Piece>
      </Piece>
    );
  },
);

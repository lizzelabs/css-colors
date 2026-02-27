import { Piece, Scrollable, Text } from '@lizzelabs/react-harmony';
import { IconButton } from '../icon-button';
import { Close, Left, Right } from '@/icons';
import { Down } from '@/icons/down';
import type { SelectProps } from './select.types';
import { useSelect } from './select.hook';

export const Select = <T,>(props: SelectProps<T>) => {
  const {
    current,
    containerStyle,
    textStyle,
    listStyle,
    optionStyle,
    containerRef,
    setNextValue,
    setPreviousValue,
    openSelect,
    closeSelect,
    onOptionSelect,
  } = useSelect(props);

  return (
    <Piece
      tabIndex={0}
      ref={containerRef}
      onClick={openSelect}
      withStyle={containerStyle}
    >
      {props.directionals && (
        <IconButton
          color='inherit'
          text={current.text}
          highlight={current.color}
          round={false}
          onClick={setPreviousValue}
          size={24}
        >
          <Left />
        </IconButton>
      )}
      <Text
        as='span'
        withStyle={textStyle}
      >
        {props.value?.display || props.label}
      </Text>
      <IconButton
        color='inherit'
        text={current.text}
        highlight={current.color}
        round={false}
        onClick={openSelect}
        size={24}
      >
        <Down />
      </IconButton>
      {props.directionals && (
        <IconButton
          color='inherit'
          text={current.text}
          highlight={current.color}
          round={false}
          onClick={setNextValue}
          size={24}
        >
          <Right />
        </IconButton>
      )}
      <Piece
        as='ul'
        withStyle={listStyle}
      >
        <Piece
          key='close'
          as='li'
          withStyle={optionStyle}
          onClick={closeSelect}
        >
          <Close />
        </Piece>
        <Scrollable
          vertical
          primary={current.color}
          highlight={current.highlight}
          behavior='smooth'
          gap='20px'
        >
          {props.options.map((option) => (
            <Piece
              key={option.id}
              as='li'
              withStyle={optionStyle}
              onClick={onOptionSelect(option)}
            >
              {option.display}
            </Piece>
          ))}
        </Scrollable>
      </Piece>
    </Piece>
  );
};

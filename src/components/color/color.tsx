import { ReactNode } from 'react';
import { ColorProps } from './color.types';
import { Piece } from '@lizzelabs/react-harmony';
import { useColor } from './color.hook';
import { Select } from '../select';
import { ApplyTo, ColorAccents, KindColor } from './color.static';
import { ColorInput } from '../inputs';
import { Tooltip } from '../tooltip';
import { IconButton } from '../icon-button';
import { Close, Copy, Dark, Export, Light } from '@/icons';
import { useColorStyles } from './color.styles';

export const Color = (props: ColorProps): ReactNode => {
  const color = useColor(props);
  const styles = useColorStyles(props, color);

  return (
    <Piece
      ref={color.containerRef}
      onClick={color.onClick}
      as='article'
      withStyle={styles.containerStyle}
    >
      <Piece withStyle={{ flex: '0 0 35px' }}>
        <Piece
          ref={color.titleRef}
          alignItems='center'
          justifyContent='start'
          textColor={
            color.mode === 'light'
              ? styles.current.darkGrey.raw
              : styles.current.lightGrey.raw
          }
          fontSize='0.65rem'
          fontWeight='bold'
          paddingLeft='10px'
          cursor='text'
          withStyle={{
            outline: 'none',
          }}
          contentEditable={true}
          suppressContentEditableWarning
        >
          {props.theme.title}
        </Piece>
        <IconButton
          size={30}
          color={styles.current.background.color.raw}
          text={
            color.mode === 'light'
              ? styles.current.darkGrey.raw
              : styles.current.lightGrey.raw
          }
          highlight={
            color.mode === 'light'
              ? styles.current.lightGrey.raw
              : styles.current.darkGrey.raw
          }
          onClick={color.onModeChange}
          round={false}
        >
          {color.mode === 'dark' ? <Light /> : <Dark />}
        </IconButton>
        <IconButton
          size={30}
          color={styles.current.background.color.raw}
          text={
            color.mode === 'light'
              ? styles.current.darkGrey.raw
              : styles.current.lightGrey.raw
          }
          highlight={
            color.mode === 'light'
              ? styles.current.lightGrey.raw
              : styles.current.darkGrey.raw
          }
          onClick={color.onDelete}
          round={false}
        >
          <Close />
        </IconButton>
      </Piece>
      <Piece withStyle={styles.contentStyle}>
        <Piece
          withStyle={{
            flexWrap: 'wrap',
          }}
        >
          <Piece withStyle={styles.rowSelectsStyle}>
            <Select
              label='Apply on'
              options={ApplyTo}
              onChange={color.onChangeApply as any}
              value={color.applyTo}
              color={styles.current.color.raw}
              text={styles.current.text.raw}
              highlight={styles.current.highlight.raw}
              textAligment='center'
              uppercase
            ></Select>
            <Select
              label='Accent'
              options={ColorAccents}
              onChange={color.onChangeActiveAccent as any}
              value={color.colorAccent}
              color={styles.current.color.raw}
              text={styles.current.text.raw}
              highlight={styles.current.highlight.raw}
              textAligment='center'
              uppercase
            ></Select>
            <Select
              label='Show as'
              options={KindColor}
              onChange={color.onChangeColorKind as any}
              value={color.kind}
              color={styles.current.color.raw}
              text={styles.current.text.raw}
              highlight={styles.current.highlight.raw}
              textAligment='center'
              uppercase
            ></Select>
          </Piece>
          <Piece withStyle={styles.rowInputStyle}>
            <ColorInput
              type={props.theme.kind}
              value={color.color}
              color={styles.current.color.raw}
              text={styles.current.text.raw}
              highlight={styles.current.disabled.raw}
              onChange={color.onColorChange}
            ></ColorInput>
          </Piece>
        </Piece>
      </Piece>
      <Piece flex='0 0 30px'>
        <Piece withStyle={styles.successStyle}>Success</Piece>
        <Piece withStyle={styles.warningStyle}>Warning</Piece>
        <Piece withStyle={styles.infoStyle}>Info</Piece>
        <Piece withStyle={styles.errorStyle}>Error</Piece>
      </Piece>
      <Piece withStyle={styles.sideButtonsStyle}>
        <div></div>
        <Tooltip description='Copy'>
          <IconButton
            size={26}
            color={styles.current.color.raw}
            text={styles.current.text.raw}
            highlight={styles.current.highlight.raw}
            onClick={color.onCopy}
            round
          >
            <Copy />
          </IconButton>
        </Tooltip>
        <Tooltip description='Export Schema'>
          <IconButton
            size={26}
            color={styles.current.color.raw}
            text={styles.current.text.raw}
            highlight={styles.current.highlight.raw}
            onClick={color.onExport}
            round
          >
            <Export />
          </IconButton>
        </Tooltip>
        <div></div>
      </Piece>
    </Piece>
  );
};

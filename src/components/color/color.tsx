import { ReactNode } from 'react';
import { ColorProps } from './color.types';
import { Piece } from '@lizzelabs/react-harmony';
import { useColor } from './color.hook';
import { Select } from '../select';
import { ApplyTo, ColorAccents, KindColor } from './color.static';
import { ColorInput } from '../inputs';
import { Tooltip } from '../tooltip';
import { IconButton } from '../icon-button';
import { Copy, Export } from '@/icons';

export const Color = (props: ColorProps): ReactNode => {
  const {
    containerRef,
    containerStyle,
    contentStyle,
    rowSelectsStyle,
    rowInputStyle,
    sideButtonsStyle,
    color,
    current,
    kind,
    colorAccent,
    applyTo,
    onChangeActiveAccent,
    onChangeApply,
    onChangeColorKind,
    onColorChange,
    onCopy,
    onExport,
    onClick,
  } = useColor(props);

  return (
    <Piece
      ref={containerRef}
      onClick={onClick}
      as='article'
      withStyle={containerStyle}
    >
      <Piece withStyle={contentStyle}>
        <Piece withStyle={contentStyle}>
          <Piece withStyle={rowSelectsStyle}>
            <Select
              label='Apply on'
              options={ApplyTo}
              onChange={onChangeApply as any}
              value={applyTo}
              color={current.color.raw}
              text={current.text.raw}
              highlight={current.highlight.raw}
              uppercase
            ></Select>
            <Select
              label='Accent'
              options={ColorAccents}
              onChange={onChangeActiveAccent as any}
              value={colorAccent}
              color={current.color.raw}
              text={current.text.raw}
              highlight={current.highlight.raw}
              uppercase
            ></Select>
            <Select
              label='Show as'
              options={KindColor}
              onChange={onChangeColorKind as any}
              value={kind}
              color={current.color.raw}
              text={current.text.raw}
              highlight={current.highlight.raw}
              uppercase
            ></Select>
          </Piece>
          <Piece withStyle={rowInputStyle}>
            <ColorInput
              type={props.theme.kind}
              value={color}
              color={current.color.raw}
              text={current.text.raw}
              highlight={current.highlight.raw}
              onChange={onColorChange}
            ></ColorInput>
          </Piece>
        </Piece>
        <Piece withStyle={sideButtonsStyle}>
          <div></div>
          <Tooltip description='Copy'>
            <IconButton
              size={22}
              color={current.color.raw}
              text={current.text.raw}
              highlight={current.highlight.raw}
              onClick={onCopy}
              round
            >
              <Copy />
            </IconButton>
          </Tooltip>
          <Tooltip description='Export Schema'>
            <IconButton
              size={22}
              color={current.color.raw}
              text={current.text.raw}
              highlight={current.highlight.raw}
              onClick={onExport}
              round
            >
              <Export />
            </IconButton>
          </Tooltip>
          <div></div>
        </Piece>
      </Piece>
    </Piece>
  );
};

import { Piece } from '@lizzelabs/react-harmony';
import { createPortal } from 'react-dom';
import { TooltipProps } from './tooltip.types';
import { useTooltip } from './tooltip.hook';

export const Tooltip = (props: TooltipProps) => {
  const { containerRef, tooltipRef, containerStyle, tooltipStyle } =
    useTooltip(props);

  return (
    <Piece
      ref={containerRef}
      withStyle={containerStyle}
      draggable={false}
      flex='0 0 auto'
    >
      {createPortal(
        <Piece
          as='span'
          draggable={false}
          ref={tooltipRef}
          withStyle={tooltipStyle}
        >
          {props.description}
        </Piece>,
        document.getElementById('tooltip'),
      )}
      {props.children}
    </Piece>
  );
};

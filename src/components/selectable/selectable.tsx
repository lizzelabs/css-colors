import { Piece } from '@lizzelabs/react-harmony';
import { useSelectable } from './selectable.hook';
import { SelectableProperties } from './selectable.types';

export const Selectable = (props: SelectableProperties) => {
  const { container } = useSelectable(props);

  return (
    <Piece
      withStyle={container}
      onClick={props.onClick}
    >
      {props.label}
    </Piece>
  );
};

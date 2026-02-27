import type { IconButtonProps, IconButtonComponent } from './icon-button.types';
import { Piece, withPieceAsContainer } from '@lizzelabs/react-harmony';
import { useIconButton } from './icon-button.hook';

const IconButtonInternal = (props: IconButtonProps) => {
  const { styles } = useIconButton(props);

  return (
    <Piece
      as='button'
      withStyle={styles}
      onClick={props.onClick}
    >
      {props.children}
    </Piece>
  );
};

export const IconButton = withPieceAsContainer(IconButtonInternal, {
  flex: '0 0 auto',
}) as IconButtonComponent;

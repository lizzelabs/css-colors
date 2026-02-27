import { createPortal } from 'react-dom';
import { ModalProperties } from './modal.types';
import { Piece, Text, usePieceProvider } from '@lizzelabs/react-harmony';
import { IconButton } from '../icon-button';
import { Close } from '@/icons';
import { Theme } from '@/theme';

export const Modal = (props: ModalProperties) => {
  const { theme } = usePieceProvider<Theme>();

  return createPortal(
    <Piece
      as='aside'
      display={props.show ? 'flex' : 'none'}
      position='absolute'
      width='350px'
      height='350px'
      top='calc(50% - 175px)'
      bottom='calc(50% - 175px)'
      left='calc(50% - 175px)'
      transform='translateY(calc(-50% - 175px), calc(-50% - 175px))'
      padding='20px'
      direction='column'
      background={(theme: Theme) => theme.color.raw}
      withStyle={(theme: Theme) => ({
        zIndex: 9999,
        borderRadius: '18px',
        border: `2px solid ${theme.highlight.raw}`,
        boxShadow: `2px 1px 3px 3px ${theme.shadow.raw}`,
        transition: 'all 0.3s ease-in-out',
        animation: 'fade_in 0.5s ease-in-out',
        '@keyframes fade_in': {
          from: {
            display: 'none',
            opacity: 0,
          },
          to: {
            display: 'flex',
            opacity: 1,
          },
        },
      })}
    >
      <Piece
        flex='0 0 50px'
        alignItems='center'
        justifyContent='space-between'
      >
        <Text
          as='span'
          flex='1 0 auto'
          fontSize='0.59rem'
          justifyContent='center'
          textColor={(theme: Theme) => theme.text.raw}
        >
          <b>I'm so thankful for your support</b> ❤️
        </Text>
        <IconButton
          onClick={props.onClose}
          flex='0 0 28px'
          text={theme.text.raw}
          size={28}
          textColor={theme.text.raw}
        >
          <Close />
        </IconButton>
      </Piece>
      <Piece flex='1 1 auto'>{props.children}</Piece>
    </Piece>,
    document.body,
  );
};

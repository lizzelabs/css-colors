import { Copy, Donate, Linkedin } from '@/icons';
import { Theme } from '@/theme';
import { Piece, Text } from '@lizzelabs/react-harmony';
import { SignatureProperties } from './signature.types';
import { Fragment, useCallback, useState } from 'react';
import { Modal } from '../modal';
import { BaseInput } from '../inputs';
import { IconButton } from '../icon-button';

export const Signature = (props: SignatureProperties) => {
  const [show, isModalVisibleFn] = useState(false);

  const copy = useCallback(
    (value: string) => async () => {
      try {
        await navigator.clipboard.writeText(value);
      } catch (e) {
        console.error(e);
      }
    },
    [],
  );

  const donateClick = useCallback(() => {
    isModalVisibleFn(true);
  }, []);

  const onModalClose = useCallback(() => {
    isModalVisibleFn(false);
  }, []);

  return (
    <Fragment>
      <Piece
        atRow={props.atRow}
        cursor='pointer'
        textColor={(theme: Theme) => theme.text.raw}
        alignItems='center'
        justifyContent='center'
        gap='10px'
        margin='0 0 10px 0'
      >
        <Text
          as='a'
          href='https://www.linkedin.com/in/gustavolizze'
          target='_blank'
          rel='noopener noreferrer'
          textColor={(theme: Theme) => theme.text.raw}
          background='transparent'
          fontSize='0.65rem'
          textDecoration='none'
          flex='0 0 auto'
        >
          <b>Made with ❤️ by Gustavo Lizze</b>
        </Text>
        <Linkedin />
        <Piece
          fontSize='25px'
          flex='0 0 auto'
          cursor='pointer'
          onClick={donateClick}
        >
          <Donate />
        </Piece>
      </Piece>
      <Modal
        show={show}
        onClose={onModalClose}
      >
        <Piece direction='column'>
          <Piece>
            <BaseInput
              type='text'
              label='BTC'
              value='bc1qrwpqy6vzfpjqm44j3d7m3flnqpdrzyfljfahhd'
              disabled
            >
              <IconButton
                onClick={copy('bc1qrwpqy6vzfpjqm44j3d7m3flnqpdrzyfljfahhd')}
                size={28}
              >
                <Copy />
              </IconButton>
            </BaseInput>
          </Piece>
          <Piece>
            <BaseInput
              type='text'
              label='ETH / ETC'
              value='0x750d562a0b87bb9aeebdf66fbe660ef4d98ad3c2'
              disabled
            >
              <IconButton
                onClick={copy('0x750d562a0b87bb9aeebdf66fbe660ef4d98ad3c2')}
                size={28}
              >
                <Copy />
              </IconButton>
            </BaseInput>
          </Piece>
          <Piece>
            <BaseInput
              type='text'
              label='LTC'
              value='MSzZS62GZ4dWX687q5be53trk1EMQ5AFdj'
              disabled
            >
              <IconButton
                onClick={copy('MSzZS62GZ4dWX687q5be53trk1EMQ5AFdj')}
                size={28}
              >
                <Copy />
              </IconButton>
            </BaseInput>
          </Piece>
        </Piece>
      </Modal>
    </Fragment>
  );
};

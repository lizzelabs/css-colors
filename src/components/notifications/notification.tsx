import { Close } from '@/icons';
import { IconButton } from '../icon-button';
import { useCallback, useEffect, useMemo } from 'react';
import { Piece, WithStyle } from '@lizzelabs/react-harmony';
import { Theme } from '@/theme';
import { NotificationProps } from './notications.types';

export const Notification = (props: NotificationProps) => {
  const noticationStyle = useCallback(
    (theme: Theme) =>
      ({
        marginBottom: '8px',
        fontSize: `${theme.textSize.small}rem`,
        gap: '10px',
        padding: `${theme.padding.medium}px`,
        borderRadius: '10px',
        background: 'rgba(6, 6, 6, 0.8)',
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        animation: `slideDown 1s ease-out forwards`,
        alignItems: 'center',
        position: 'relative',
        zIndex: theme.zIndex.tooltip,
        '@keyframes slideDown': {
          from: {
            opacity: 0,
            transform: 'translateY(50%)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      }) satisfies WithStyle,
    [],
  );

  const timeoutStyle = useMemo(
    () =>
      ({
        height: '2px',
        background: '#FFF',
        position: 'absolute',
        border: 'none',
        outline: 'none',
        left: '5%',
        right: '5%',
        top: `92%`,
        borderRadius: '10px',
        animation: `widthDecreasing ${props.data.timeout / 1000}s ease-out forwards`,

        '@keyframes widthDecreasing': {
          from: {
            width: '100%',
            opacity: 1,
          },
          to: {
            width: '0%',
            opacity: 0.3,
          },
        },
      }) satisfies WithStyle,
    [props.data.timeout],
  );

  const onClick = useCallback((id: string) => {
    return () => {
      props.onClose(id);
    };
  }, []);

  const actionClick = useCallback(() => {
    if (props.data.options?.action) {
      props.data.options.action();
    }

    props.onClose(props.data.id);
  }, [props.data.options, props.data]);

  useEffect(function closeAfterTimeout() {
    if (!props.data.timeout) {
      return;
    }

    const timeout = setTimeout(() => {
      props.onClose(props.data.id);
    }, props.data.timeout);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Piece withStyle={noticationStyle}>
      <IconButton
        size={24}
        text='#FFF'
        highlight='transparent'
        color='inherit'
        noPadding
        onClick={onClick(props.data.id)}
      >
        <Close />
      </IconButton>
      {props.data.message}
      {!!props.data.timeout && <Piece withStyle={timeoutStyle}></Piece>}
      {props.data.options?.action && (
        <Piece
          as='button'
          textColor='#FFF'
          background='transparent'
          fontSize='0.58rem'
          fontWeight='bold'
          textTransform='uppercase'
          cursor='pointer'
          onClick={actionClick}
        >
          {props.data.options?.actionName}
        </Piece>
      )}
    </Piece>
  );
};

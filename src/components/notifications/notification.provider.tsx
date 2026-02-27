import { useCallback, useState } from 'react';
import { CssColorsUtils } from '@/utils';
import { Notification } from './notification';
import { Piece, WithStyle } from '@lizzelabs/react-harmony';
import {
  NotificationInput,
  NotificationProviderProps,
  NotificationOptions,
} from './notications.types';
import { NotificationContext } from './notification.context';
import { Theme } from '@/theme';

export const NotificationProvider = (props: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<NotificationInput[]>([]);

  const listStyle = useCallback(
    (theme: Theme) =>
      ({
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        gap: '1px',
        zIndex: theme.zIndex.tooltip,
      }) satisfies WithStyle,
    [],
  );

  const info = useCallback((message: string, options?: NotificationOptions) => {
    setNotifications((prev) => [
      ...prev,
      {
        message,
        id: CssColorsUtils.newId(),
        timeout: options?.permanent ? undefined : props.timeout,
        options,
      },
    ]);
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  }, []);

  return (
    <Piece kind='contents'>
      <NotificationContext.Provider
        value={{
          info,
        }}
      >
        {props.children}
      </NotificationContext.Provider>
      <Piece
        as='ul'
        role='list'
        withStyle={listStyle}
      >
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            data={notification}
            onClose={removeNotification}
          />
        ))}
      </Piece>
    </Piece>
  );
};

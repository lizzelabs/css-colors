import { useContext } from 'react';
import { NotificationContext } from './notification.context';

export const useNotification = () => {
  return useContext(NotificationContext);
};

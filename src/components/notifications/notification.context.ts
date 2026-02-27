import { createContext } from 'react';
import { NotificationContextType } from './notications.types';

export const NotificationContext = createContext<NotificationContextType>({
  info: (_: string) => {},
});

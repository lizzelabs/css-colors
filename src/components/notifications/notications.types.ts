import type { ReactNode } from 'react';

export interface NotificationOptions {
  permanent?: boolean;
  action?: () => void;
  actionName?: string;
}
export interface NotificationContextType {
  info: (message: string, options?: NotificationOptions) => void;
}

export interface NotificationProviderProps extends Record<string, unknown> {
  children: ReactNode;
  timeout: number;
}

export interface NotificationInput {
  id: string;
  message: string;
  timeout?: number;
  options?: NotificationOptions;
}

export interface NotificationProps {
  data: NotificationInput;
  onClose: (id: string) => void;
}

export interface NotificationStyleInput extends Record<string, unknown> {
  timeout: number;
}

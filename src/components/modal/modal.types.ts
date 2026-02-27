import { ReactNode } from 'react';

export type ModalProperties = {
  children: ReactNode;
  onClose?: () => void;
  show?: boolean;
};

import type { ReactNode } from 'react';

export interface TooltipProps extends Record<string, unknown> {
  description: string;
  children: ReactNode;
}

export interface TooltipStyleInput extends Record<string, unknown> {
  show: boolean;
}

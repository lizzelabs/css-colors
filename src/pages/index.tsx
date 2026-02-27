import type { FC } from 'react';
import { CURRENT_THEME, CSS_COLORS } from '@/theme';
import { PieceProvider, Screen } from '@lizzelabs/react-harmony';
import { Main } from './main';
import { NotificationProvider } from '@/components';

export const Root: FC = () => {
  return (
    <PieceProvider
      theme={CURRENT_THEME}
      patterns={CSS_COLORS}
    >
      <NotificationProvider timeout={2000}>
        <Screen
          containerId='root'
          fontSize='16px'
          fontFamily='"Mozilla Text", sans-serif'
        >
          <Main />
        </Screen>
      </NotificationProvider>
    </PieceProvider>
  );
};

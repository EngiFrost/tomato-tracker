import { FC } from 'react';
import { SettingsForm } from './SettingsForm';
import * as S from './styles';

export const SettingsDrawer: FC = () => {
  return (
    <S.Drawer>
      <SettingsForm />
    </S.Drawer>
  );
};

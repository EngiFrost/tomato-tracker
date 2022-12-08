import { FC } from 'react';
import { SettingsForm } from '../SettingsForm';
import * as S from './styles';

type Props = {
  isVisible: boolean;
};

export const SettingsDrawer: FC<Props> = ({ isVisible }) => {
  return isVisible ? (
    <S.Drawer>
      <SettingsForm />
    </S.Drawer>
  ) : (
    <></>
  );
};

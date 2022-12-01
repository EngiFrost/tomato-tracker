import { FC } from 'react';
import * as S from './styles';

type Props = {
  isVisible: boolean;
};

export const SettingsDrawer: FC<Props> = ({ isVisible }) => {
  return isVisible ? <S.Drawer>SettingsDrawer</S.Drawer> : <div></div>;
};

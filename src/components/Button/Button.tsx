import { FC } from 'react';
import * as S from './styles';

type Props = {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const Button: FC<Props> = ({ label, ...rest }) => {
  return <S.Button {...rest}>{label}</S.Button>;
};

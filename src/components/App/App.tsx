import { FC } from 'react';
import { Tracker } from '../Tracker';
import * as S from './styles';

export const App: FC = () => {
  return (
    <S.Wrapper>
      <Tracker />
    </S.Wrapper>
  );
};

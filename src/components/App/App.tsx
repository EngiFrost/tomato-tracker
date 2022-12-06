import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { tomatoStore } from '../../store/tomatoStore';
import { Tracker } from '../Tracker';
import * as S from './styles';

export const App: FC = observer(() => {
  return (
    <S.Wrapper isRest={tomatoStore.mode === 'rest'}>
      <Tracker />
    </S.Wrapper>
  );
});

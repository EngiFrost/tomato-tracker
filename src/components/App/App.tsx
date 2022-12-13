import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { tomatoStore as TS } from '../../store/tomatoStore';
import { Tracker } from '../Tracker';
import { formatTime } from '../Tracker/helpers';

import * as S from './styles';

export const App: FC = observer(() => {
  const getFavicon = () => {
    const linkBase = `${process.env.PUBLIC_URL}/svg/`;
    const filename = TS.mode === 'tomato' ? 'favicon_tomato.svg' : 'favicon_rest.svg';
    return linkBase + filename;
  };

  return (
    <>
      <Helmet>
        <title>{formatTime(TS.time)}</title>
        <link rel="icon" type="image/x-icon" href={getFavicon()}></link>
      </Helmet>
      <S.Wrapper isRest={TS.mode === 'rest'}>
        <Tracker />
      </S.Wrapper>
    </>
  );
});

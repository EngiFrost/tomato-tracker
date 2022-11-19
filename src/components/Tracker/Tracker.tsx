import { FC, useState } from 'react';
import * as S from './styles';
import * as H from './helpers';

export const Tracker: FC = () => {
  const [time, setTime] = useState<number>(0)
  
  return (
    <S.TrackerWrapper>
      <S.Title>Tomato Tracker!</S.Title>

      <S.InfoSection>
        <S.SkipBtn />
        <S.Timer>{H.formatTime(time)}</S.Timer>
        <S.SettingsBtn />
      </S.InfoSection>

      {/* <TimerBar time={time}/> */}

      <S.ActionBtn />
    </S.TrackerWrapper>
  );
};

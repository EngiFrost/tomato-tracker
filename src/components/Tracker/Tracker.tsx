import { FC, useEffect, useState } from 'react';
import { TimerBar } from './TimerBar';

import * as S from './styles';
import * as H from './helpers';

// TODO: get this values from input
const DEFAULT_TIME = 5 * 60;
const REST_TIME = 5 * 60;

export const Tracker: FC = () => {
  const [time, setTime] = useState<number>(DEFAULT_TIME);
  const [mode, setMode] = useState<'work' | 'rest'>('work');
  const [isPaused, setPaused] = useState<boolean>(true);

  useEffect(() => {
    if (!time) {
      mode === 'work' ? setTime(REST_TIME) : setTime(DEFAULT_TIME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return (
    <S.TrackerWrapper>
      <S.Title>Tomato Tracker!</S.Title>

      <S.InfoSection>
        <S.SkipBtn />
        <S.Timer>{H.formatTime(time)}</S.Timer>
        <S.SettingsBtn />
      </S.InfoSection>

      <TimerBar time={time} />

      <S.ActionBtn onClick={() => setPaused(!isPaused)} />
    </S.TrackerWrapper>
  );
};

import { FC, useEffect, useState } from 'react';
import { TimerBar } from '../TimerBar';

import * as S from './styles';
import * as H from './helpers';

// TODO: get this values from input
const DEFAULT_TIME = 5 * 60;
const REST_TIME = 5 * 60;

export const Tracker: FC = () => {
  const [time, setTime] = useState<number>(DEFAULT_TIME);
  const [mode, setMode] = useState<'tomato' | 'rest'>('tomato');
  const [isPaused, setPaused] = useState<boolean>(true);

  const actionImg = isPaused ? `${process.env.PUBLIC_URL}/svg/play_circle.svg` : `${process.env.PUBLIC_URL}/svg/pause_circle.svg`;

  useEffect(() => {
    if (!time) {
      mode === 'tomato' ? setTime(REST_TIME) : setTime(DEFAULT_TIME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return (
    <S.TrackerWrapper>
      <S.Title>Tomato Tracker!</S.Title>

      <S.InfoSection>
        <S.BtnWrapper>
          <S.Button label={`Skip ${mode}`} />
        </S.BtnWrapper>

        <S.Timer>{H.formatTime(time)}</S.Timer>

        <S.BtnWrapper>
          <S.Button label="Settings" />
        </S.BtnWrapper>
      </S.InfoSection>

      <TimerBar time={time} />

      <S.ActionBtn src={actionImg} onClick={() => setPaused(!isPaused)} />
    </S.TrackerWrapper>
  );
};

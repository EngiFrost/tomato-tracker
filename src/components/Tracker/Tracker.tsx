import { FC, useEffect, useState } from 'react';
import { TimerBar } from '../TimerBar';

import * as S from './styles';
import * as H from './helpers';

// TODO: get this values from input
const DEFAULT_TOMATO_TIME = 25 * 60;
const DEFAULT_REST_TIME = 5 * 60;

export const Tracker: FC = () => {
  const [time, setTime] = useState<number>(DEFAULT_TOMATO_TIME);
  const [mode, setMode] = useState<'tomato' | 'rest'>('tomato');
  const [isPaused, setPaused] = useState<boolean>(true);

  const actionImg = isPaused ? `${process.env.PUBLIC_URL}/svg/play_circle.svg` : `${process.env.PUBLIC_URL}/svg/pause_circle.svg`;

  useEffect(() => {
    if (!time) {
      mode === 'tomato' ? setTime(DEFAULT_REST_TIME) : setTime(DEFAULT_TOMATO_TIME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  const skipAction = () => {
    const nextMode = mode === 'tomato' ? 'rest' : 'tomato';
    setMode(nextMode);
    setTime(nextMode === 'tomato' ? DEFAULT_TOMATO_TIME : DEFAULT_REST_TIME);
  };

  return (
    <S.TrackerWrapper>
      <S.Title>Tomato Tracker!</S.Title>

      <S.InfoSection>
        <S.BtnWrapper>
          <S.Button label={`Skip ${mode}`} onClick={skipAction} />
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

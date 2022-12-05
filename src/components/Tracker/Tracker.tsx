import { FC, useEffect, useState } from 'react';
import { TimerBar } from '../TimerBar';

import * as S from './styles';
import * as H from './helpers';
import { SettingsDrawer } from '../SettingsDrawer';
import { Button } from '../Button';
import { observer } from 'mobx-react-lite';
import { tomatoStore } from '../../store/tomatoStore';

// TODO: get this values from store!

export const Tracker: FC = observer(() => {
  const [time, setTime] = useState<number>(tomatoStore.tomatoDuration);
  const [mode, setMode] = useState<'tomato' | 'rest'>('tomato');
  const [isPaused, setPaused] = useState<boolean>(true);
  const [isDrawerVisible, setDrawerVisible] = useState<boolean>(false);

  const actionImg = isPaused ? `${process.env.PUBLIC_URL}/svg/play_circle.svg` : `${process.env.PUBLIC_URL}/svg/pause_circle.svg`;

  useEffect(() => {
    if (!time) {
      mode === 'tomato' ? setTime(tomatoStore.restDuration) : setTime(tomatoStore.tomatoDuration);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (!isPaused) {
      interval = setInterval(() => setTime((prevTime) => prevTime - 1), 1000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  const skipAction = () => {
    const nextMode = mode === 'tomato' ? 'rest' : 'tomato';
    setMode(nextMode);
    setTime(nextMode === 'tomato' ? tomatoStore.tomatoDuration : tomatoStore.restDuration);
  };

  // TODO: tomatoes counter

  return (
    <>
      <S.TrackerWrapper>
        <S.Title>Tomato Tracker!</S.Title>

        <S.InfoSection>
          <S.BtnWrapper>
            <Button label={`Skip ${mode}`} onClick={skipAction} />
          </S.BtnWrapper>

          <S.Timer>{H.formatTime(time)}</S.Timer>

          <S.BtnWrapper>
            <Button label="Settings" onClick={() => setDrawerVisible((prevState) => !prevState)} isActive={isDrawerVisible} />
          </S.BtnWrapper>
        </S.InfoSection>

        <TimerBar time={time} />

        <S.ActionBtn src={actionImg} onClick={() => setPaused(!isPaused)} />
      </S.TrackerWrapper>

      <SettingsDrawer isVisible={isDrawerVisible} />
    </>
  );
});

import { FC, useEffect, useState } from 'react';
import { TimerBar } from '../TimerBar';

import { SettingsDrawer } from '../SettingsDrawer';
import { Button } from '../Button';
import { observer } from 'mobx-react-lite';
import { tomatoStore } from '../../store/tomatoStore';

import * as S from './styles';
import * as H from './helpers';

export const Tracker: FC = observer(() => {
  const [time, setTime] = useState<number>(tomatoStore.tomatoDuration); // TODO: move to store
  const [mode, setMode] = useState<'tomato' | 'rest'>('tomato'); // TODO: move to store
  const [isPaused, setPaused] = useState<boolean>(true); // TODO: move to store
  const [isDrawerVisible, setDrawerVisible] = useState<boolean>(false); // TODO: move to store

  const actionImg = isPaused ? `${process.env.PUBLIC_URL}/svg/play_circle.svg` : `${process.env.PUBLIC_URL}/svg/pause_circle.svg`;

  // zero time handler
  useEffect(() => {
    if (!time) {
      if (mode === 'tomato') {
        setTime(tomatoStore.restDuration);
      } else {
        setTime(tomatoStore.tomatoDuration);
        tomatoStore.increaseTomatoesCount();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  // main counting function
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

    if (nextMode === 'tomato') {
      tomatoStore.increaseTomatoesCount();
    }
  };

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

        <S.Counter>{`Tomatoes today: ${tomatoStore.tomatoesCount}`}</S.Counter>
      </S.TrackerWrapper>

      <SettingsDrawer isVisible={isDrawerVisible} />
    </>
  );
});

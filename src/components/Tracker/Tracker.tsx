import { FC, useEffect, useState } from 'react';
import { TimerBar } from '../TimerBar';

import { SettingsDrawer } from '../SettingsDrawer';
import { Button } from '../Button';
import { observer } from 'mobx-react-lite';
import { tomatoStore } from '../../store/tomatoStore';

import * as S from './styles';
import * as H from './helpers';

export const Tracker: FC = observer(() => {
  const [isPaused, setPaused] = useState<boolean>(true); // TODO: move to store
  const [isDrawerVisible, setDrawerVisible] = useState<boolean>(false); // TODO: move to store

  const actionImg = isPaused ? `${process.env.PUBLIC_URL}/svg/play_circle.svg` : `${process.env.PUBLIC_URL}/svg/pause_circle.svg`;

  // zero time handler
  useEffect(() => {
    if (!tomatoStore.time) {
      tomatoStore.handleZeroTime();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tomatoStore.time]);

  // main counting function
  useEffect(() => {
    let interval: NodeJS.Timer;

    if (!isPaused) {
      interval = setInterval(() => tomatoStore.reduceTime(), 1000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      <S.TrackerWrapper>
        <S.Title>Tomato Tracker!</S.Title>

        <S.InfoSection>
          <S.BtnWrapper>
            <Button label={`Skip ${tomatoStore.mode}`} onClick={() => tomatoStore.changeMode(tomatoStore.mode)} isRest={tomatoStore.mode === 'rest'} />
          </S.BtnWrapper>

          <S.Timer>{H.formatTime(tomatoStore.time)}</S.Timer>

          <S.BtnWrapper>
            <Button label="Settings" onClick={() => setDrawerVisible((prevState) => !prevState)} isActive={isDrawerVisible} isRest={tomatoStore.mode === 'rest'} />
          </S.BtnWrapper>
        </S.InfoSection>

        <TimerBar time={tomatoStore.time} />

        <S.ActionBtn src={actionImg} onClick={() => setPaused(!isPaused)} />

        <S.Counter>{`Tomatoes today: ${tomatoStore.tomatoesCount}`}</S.Counter>
      </S.TrackerWrapper>

      <SettingsDrawer isVisible={isDrawerVisible} />
    </>
  );
});

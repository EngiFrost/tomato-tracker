import { FC, useEffect } from 'react';
import { TimerBar } from '../TimerBar';

import { SettingsDrawer } from '../Settings';
import { Button } from '../../ui/Button';
import { observer } from 'mobx-react-lite';
import { tomatoStore as TS } from '../../store/tomatoStore';

import * as S from './styles';
import * as H from './helpers';

export const Tracker: FC = observer(() => {
  const actionImg = TS.isPaused ? `${process.env.PUBLIC_URL}/svg/play_circle.svg` : `${process.env.PUBLIC_URL}/svg/pause_circle.svg`;

  // zero time handler
  useEffect(() => {
    if (TS.time <= 0) {
      TS.changeMode(TS.mode);
    }
  }, [TS.time]);

  // main counting function
  useEffect(() => {
    let interval: NodeJS.Timer;

    if (!TS.isPaused) {
      interval = setInterval(() => TS.setTime(Math.round((TS.zeroTime - Date.now()) / 1000)), 1000);
    }

    return () => clearInterval(interval);
  }, [TS.isPaused]);

  // space bar keydown handler
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      TS.togglePause(TS.isPaused);
    }
  };

  return (
    <>
      <S.TrackerWrapper>
        <S.Title>Tomato Tracker!</S.Title>

        <S.InfoSection>
          <S.BtnWrapper>
            <Button label={`Skip ${TS.mode}`} onClick={() => TS.changeMode(TS.mode)} isRest={TS.mode === 'rest'} />
          </S.BtnWrapper>

          <S.Timer>{H.formatTime(TS.time)}</S.Timer>

          <S.BtnWrapper>
            <Button label="Settings" onClick={() => TS.toggleDrawer(TS.isDrawerVisible)} isActive={TS.isDrawerVisible} isRest={TS.mode === 'rest'} />
          </S.BtnWrapper>
        </S.InfoSection>

        <TimerBar time={TS.time} />

        <S.ActionBtn src={actionImg} onClick={() => TS.togglePause(TS.isPaused)} />

        <S.Counter>{`Tomatoes today: ${TS.tomatoesCount}`}</S.Counter>
      </S.TrackerWrapper>

      {TS.isDrawerVisible && <SettingsDrawer />}
    </>
  );
});

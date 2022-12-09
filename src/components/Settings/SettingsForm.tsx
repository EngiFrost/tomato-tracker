import { useState } from 'react';
import { tomatoStore } from '../../store/tomatoStore';
import { Button } from '../../ui/Button';
import * as S from './styles';

export const SettingsForm = () => {
  const [tomatoTime, setTomatoTime] = useState<number>(tomatoStore.tomatoDuration);
  const [restTime, setRestTime] = useState<number>(tomatoStore.restDuration);

  const submit = () => {
    // TODO: mutate store state & close drawer!
  };

  // TODO: btn disabled if pristine

  return (
    <S.Form>
      <S.Row>
        <S.Label>Tomato time:</S.Label>
        <S.Input name="tomatoTime" value={tomatoTime / 60} onChange={(e) => setTomatoTime(+e.target.value * 60)} />
      </S.Row>
      <S.Row>
        <S.Label>Rest time:</S.Label>
        <S.Input name="restTime" value={restTime / 60} onChange={(e) => setRestTime(+e.target.value * 60)} />
      </S.Row>
      <S.Row>
        <Button label="Save changes" onClick={submit} />
      </S.Row>
    </S.Form>
  );
};

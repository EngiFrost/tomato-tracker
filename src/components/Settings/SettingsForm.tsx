import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { tomatoStore as TS } from '../../store/tomatoStore';
import { Button } from '../../ui/Button';
import * as S from './styles';

export const SettingsForm = observer(() => {
  const [tomatoTime, setTomatoTime] = useState<number>(TS.tomatoDuration);
  const [restTime, setRestTime] = useState<number>(TS.restDuration);
  const [pristine, setPristine] = useState<boolean>(true)

  useEffect(() => {
    if (tomatoTime !== TS.tomatoDuration || restTime !== TS.restDuration) {
      setPristine(false)
    }
  }, [restTime, tomatoTime])


  const submit = () => {
    TS.updateDuration(tomatoTime, restTime);
    TS.toggleDrawer(true)
  };

  return (
    <S.FormWrapper>
      <S.Row>
        <S.Label>Tomato time:</S.Label>
        <S.Input name="tomatoTime" type="number" min="1" max="55" value={tomatoTime / 60} onChange={(e) => setTomatoTime(+e.target.value * 60)} />
      </S.Row>
      <S.Row>
        <S.Label>Rest time:</S.Label>
        <S.Input name="restTime" type="number" min="1" max="55" value={restTime / 60} onChange={(e) => setRestTime(+e.target.value * 60)} />
      </S.Row>
      <S.Row aligned>
        <Button label="Save changes" onClick={submit} isDisabled={pristine}/>
      </S.Row>
    </S.FormWrapper>
  );
});

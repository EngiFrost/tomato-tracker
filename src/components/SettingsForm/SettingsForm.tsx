import { Button } from '../../ui/Button';
import * as S from './styles';

export const SettingsForm = () => {
  const submit = () => {
    // TODO:
  };

  // TODO: btn disabled, 2wb for inputs

  return (
    <S.Form>
      <S.Row>
        <S.Label>Tomato time:</S.Label>
        <S.Input name="tomatoTime" />
      </S.Row>
      <S.Row>
        <S.Label>Rest time:</S.Label>
        <S.Input name="restTime" />
      </S.Row>
      <S.Row>
        <Button label="Save changes" onClick={submit} />
      </S.Row>
    </S.Form>
  );
};

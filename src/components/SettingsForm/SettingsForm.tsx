import * as S from './styles';

export const SettingsForm = () => {
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
    </S.Form>
  );
};

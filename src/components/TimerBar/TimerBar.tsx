import * as S from './styles';
import * as H from './helpers';

type Props = {
  time: number;
};

export const TimerBar = ({ time }: Props) => {
  const bars: number[] = H.createArray(55);

  return (
    <S.Wrapper offset={time}>
      {bars.map((value) => {
        const isEnlarged = value % 5 === 0;
        return (
          <>
            <S.Bar key={value} isEnlarged={isEnlarged} />
            {isEnlarged && <S.Minutes>{value}</S.Minutes>}
          </>
        );
      })}
    </S.Wrapper>
  );
};

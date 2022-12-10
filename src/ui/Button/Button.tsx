import { FC, useRef } from 'react';
import * as S from './styles';

type Props = {
  label: string;
  isActive?: boolean;
  isRest?: boolean;
  onClick?: () => void;
};

export const Button: FC<Props> = ({ label, onClick, ...rest }) => {
  const btnRef: React.RefObject<HTMLButtonElement> = useRef(null)

  const handleClick = () => {
    btnRef.current?.blur()
    onClick && onClick();
  };

  return (
    <S.Button onClick={handleClick} ref={btnRef} {...rest}>
      {label}
    </S.Button>
  );
};

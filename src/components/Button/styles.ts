import { css } from '@emotion/react';
import styled from '@emotion/styled';

const activeButtonStyles = css`
  text-decoration: underline;
  background-color: white;
  color: tomato;
  cursor: pointer;
`;

type ButtonProps = {
  isActive?: boolean;
};

export const Button = styled.button<ButtonProps>`
  padding: 10px;
  border: 2px dashed white;
  border-radius: 15px;
  width: fit-content;
  height: fit-content;

  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  white-space: nowrap;
  color: white;

  background-color: transparent;

  ${(p) => p.isActive && activeButtonStyles}

  &:hover {
    ${activeButtonStyles}
  }
`;

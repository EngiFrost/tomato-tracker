import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BG_COLOR_REST, BG_COLOR_TOMATO } from '../colors';

const activeButtonStyles = css`
  text-decoration: underline;
  background-color: white;
  cursor: pointer;
`;

const getActiveStyles = (isRest?: boolean) => {
  return css`
    ${activeButtonStyles}
    color: ${isRest ? BG_COLOR_REST : BG_COLOR_TOMATO};
  `;
};

type ButtonProps = {
  isActive?: boolean;
  isRest?: boolean;
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

  ${(p) => p.isActive && getActiveStyles(p.isRest)}

  &:hover {
    ${(p) => getActiveStyles(p.isRest)}
  }
`;

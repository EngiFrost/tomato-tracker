import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BG_COLOR_REST, BG_COLOR_TOMATO } from '../colors';

const activeButtonStyles = css`
  text-decoration: underline;
  background-color: white;
  cursor: pointer;
`;

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

  ${(p) => p.isActive && activeButtonStyles}

  &:hover {
    ${activeButtonStyles}
    ${(p) => (p.isRest ? `color: ${BG_COLOR_REST};` : `color: ${BG_COLOR_TOMATO};`)}
  }
`;

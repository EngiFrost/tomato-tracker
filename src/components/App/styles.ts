import styled from '@emotion/styled';
import { BG_COLOR_REST, BG_COLOR_TOMATO } from '../../ui/colors';

export const Wrapper = styled.div<{ isRest: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  background-color: ${(p) => (p.isRest ? BG_COLOR_REST : BG_COLOR_TOMATO)};
`;

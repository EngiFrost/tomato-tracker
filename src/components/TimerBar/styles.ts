import { css } from '@emotion/react';
import styled from '@emotion/styled';

const FONT_SIZE = 28;

export const Wrapper = styled.div<{ offset: number }>`
  display: flex;
  align-items: flex-end;
  gap: 30px;
`;

export const Container = styled.div`
  position: relative;
`;

export const Bar = styled.div<{ isEnlarged: boolean }>`
  background-color: white;
  width: 3px;
  border-radius: 2px;

  ${(p) =>
    p.isEnlarged
      ? css`
          height: 50px;
        `
      : css`
          height: 20px;
        `}
`;

export const Minutes = styled.div<{ isLessTen: boolean }>`
  color: white;
  font-size: ${FONT_SIZE}px;
  line-height: ${FONT_SIZE}px;

  position: absolute;
  bottom: -${FONT_SIZE * 1.5}px;
  left: -${(p) => (p.isLessTen ? FONT_SIZE / 4 : FONT_SIZE / 2)}px;
`;

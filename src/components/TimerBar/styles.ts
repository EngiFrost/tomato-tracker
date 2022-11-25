import { css } from '@emotion/react';
import styled from '@emotion/styled';

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

export const Wrapper = styled.div<{ offset: number }>`
  display: flex;
  align-items: flex-end;
  gap: 30px;
`;

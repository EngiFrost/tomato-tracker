import styled from '@emotion/styled';

const FONT_SIZE = 28;
const GAP_SIZE = 30;
const BAR_WIDTH = 3;

export const Wrapper = styled.div`
  position: relative;
  height: 60px;
`;

export const Marker = styled.img`
  position: absolute;
  left: -22.5px;
  top: -50px;
`;

export const BarWrapper = styled.div<{ offset: number }>`
  display: flex;
  align-items: flex-end;
  gap: ${GAP_SIZE}px;

  position: absolute;
  left: ${(p) => `-${p.offset * (GAP_SIZE + BAR_WIDTH)}`}px;
`;

export const Container = styled.div`
  position: relative;
`;

export const Bar = styled.div<{ isEnlarged: boolean }>`
  background-color: white;
  border-radius: 2px;
  width: ${BAR_WIDTH}px;

  height: ${(p) => (p.isEnlarged ? '50' : '20')}px;
`;

export const Minutes = styled.div<{ isLessTen: boolean }>`
  color: white;
  font-size: ${FONT_SIZE}px;
  line-height: ${FONT_SIZE}px;

  position: absolute;
  bottom: -${FONT_SIZE * 1.5}px;
  left: -${(p) => (p.isLessTen ? FONT_SIZE / 4 : FONT_SIZE / 2)}px;
`;

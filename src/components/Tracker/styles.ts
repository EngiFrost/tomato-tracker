import styled from '@emotion/styled';

export const TrackerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 80%;
  min-width: 600px;
  width: 80%;
  max-width: 1200px;
`;

const Font = styled.div`
  color: white;
  line-height: 34px;
`;

export const Title = styled(Font)`
  font-size: 34px;
  font-weight: 600;
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  min-width: 700px;
`;

export const Timer = styled(Font)`
  font-size: 80px;
  line-height: 80px;

  display: flex;
  justify-content: center;
  flex: 1;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Button = styled.button<{ label: string }>`
  padding: 10px;
  border: 1px dashed white;
  border-radius: 15px;
  width: fit-content;
  height: fit-content;

  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  white-space: nowrap;
  color: white;

  background-color: transparent;

  &::before {
    content: '${(p) => p.label}';
  }

  &:hover {
    text-decoration: underline;

    cursor: pointer;
  }
`;

export const ActionBtn = styled.img`
  height: 100px;
  width: 100px;

  &:hover {
    cursor: pointer;
  }
`;

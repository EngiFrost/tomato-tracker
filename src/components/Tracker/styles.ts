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

export const Title = styled.div`
  color: white;
  font-size: 34px;
  line-height: 34px;
  font-weight: 600;
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Timer = styled.div``;

export const Button = styled.button<{ label: string }>`
  padding: 10px;
  border: 1px dashed white;
  border-radius: 15px;
  width: fit-content;

  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
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

export const ActionBtn = styled.button``;

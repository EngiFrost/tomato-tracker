import styled from '@emotion/styled';

export const Drawer = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  height: fit-content;
  width: fit-content;
  padding: 15px;

  border: 2px solid white;
  border-radius: 0 0 0 10px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

// TODO: Attach font styles from theme
export const Label = styled.label`
  color: white;
  font-size: 20px;
  line-height: 20px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: 2px solid white;
  border-radius: 10px;

  height: 30px;
  width: 60px;

  color: white;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

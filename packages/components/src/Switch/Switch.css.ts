import styled    from '@emotion/styled';
import { token } from '@hoon-ds/token';

const { color, radius } = token;

export const Input = styled.input`
  appearance: none;
`;

export const Label = styled.label`
  width: 40px;
  height: 24px;
  padding: 2px;
  background-color: ${color.gray[200]};
  border-radius: ${radius.full};
  cursor: pointer;

  transition: all 0.15s ease-in-out;

  display: block;
  position: relative;

  input:checked + & {
    background-color: ${color.ink};

    &::before {
      left: calc(100% - 22px);
    }
  }

  input:disabled + & {
    cursor: not-allowed;
    background-color: ${color.gray[500]};

    &::before {
      left: 2px;
      background-color: ${color.gray[200]};
    }
  }

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    background-color: ${color.white};
    border-radius: ${radius.full};

    transition: all 0.15s ease-in-out;

    position: absolute;
    left: 2px;
  }
`;

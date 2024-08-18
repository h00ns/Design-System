import styled from '@emotion/styled';
import { token } from '@hoon-ds/token';

const { color } = token;

export const Input = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;
  cursor: pointer;

  transition: all 0.15s ease-in-out;

  &:hover {
    opacity: 0.6;
  }

  &:checked {
    accent-color: ${color.ink};
  }
`;

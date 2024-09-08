import { keyframes } from '@emotion/react';
import styled        from '@emotion/styled';
import { token }     from '@hoon-ds/token';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Indicator = styled.div`
  animation: ${spin} 1.2s linear infinite;
  border-radius: ${token.radius.full};
  border: 3px solid;
  border-color: ${token.color.gray[500]} rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2)
    rgba(255, 255, 255, 0.2);
`;

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { token } from '@hoon-ds/token';

const { color } = token;

const gradient = keyframes`
  0% {
      background-color: ${color.gray[200]};
    }
    50% {
        background-color: ${color.gray[300]};
    }
    100% {
        background-color: ${color.gray[200]};
  }
`;

export const Skeleton = styled.div`
  animation: ${gradient} 1.2s infinite ease-in-out;
`;

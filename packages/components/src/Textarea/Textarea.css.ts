import { css }           from '@emotion/react';
import styled            from '@emotion/styled';
import { token }         from '@hoon-ds/token';

import { TextareaProps } from './Textarea.types';

const { color, radius, space, fontSize } = token;

export const Wrap = styled.div<Pick<TextareaProps, 'isError'>>`
  width: 100%;
  border-radius: ${radius.medium};
  overflow: hidden;
  outline: 1px solid ${color.gray[500]};

  &:has(textarea:disabled) {
    outline-width: 0;
    background-color: ${color.gray[100]};
  }
  &:hover {
    outline-width: 2px;
  }
  &:has(textarea:focus) {
    outline: 2px solid ${color.gray[700]};
  }

  ${({ isError }) => isError && isErrorCSS}
`;

const isErrorCSS = css({
  outlineColor: color.red[300],

  '&:has(textarea:focus)': {
    outlineColor: color.red[500],
  },
});

export const Textarea = styled.textarea`
  width: 100%;
  padding: ${space[3]};
  font-size: ${fontSize.medium};
  border: none;
  resize: none;

  &:focus {
    outline: none;
  }
`;

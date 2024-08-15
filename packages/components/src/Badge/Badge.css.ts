import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { BadgeSize, BadgeVariant } from './Badge.types';

export const Wrap = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 4px 6px;
  border-radius: 99px;
`;

export const sizeCSS: Record<BadgeSize, SerializedStyles> = {
  small: css({
    fontSize: '10px',
  }),
  medium: css({
    fontSize: '12px',
  }),
  large: css({
    fontSize: '14px',
  }),
} as const;

export const variantCSS: Record<BadgeVariant, SerializedStyles> = {
  default: css({
    color: 'white',
    backgroundColor: 'black',
  }),
  success: css({
    color: 'white',
    backgroundColor: 'green',
  }),
  critical: css({
    color: 'white',
    backgroundColor: 'red',
  }),
  warning: css({
    color: 'white',
    backgroundColor: 'yellow',
  }),
} as const;

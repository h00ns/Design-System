import { css, SerializedStyles }   from '@emotion/react';
import styled                      from '@emotion/styled';
import { token }                   from '@hoon-ds/token';

import { BadgeSize, BadgeVariant } from './Badge.types';

const {
  space,
  radius,
  color,
  semantic: { typography },
} = token;

export const Badge = styled.div`
  width: fit-content;
  height: fit-content;
  padding: ${space[1]} ${space[2]};
  border-radius: ${radius.full};
`;

export const sizeCSS: Record<BadgeSize, SerializedStyles> = {
  small: css({
    ...typography.xsmall,
  }),
  medium: css({
    ...typography.small,
  }),
  large: css({
    ...typography.medium,
  }),
} as const;

export const variantCSS: Record<BadgeVariant, SerializedStyles> = {
  default: css({
    color:           color.white,
    backgroundColor: color.ink,
  }),
  success: css({
    color:           color.white,
    backgroundColor: color.green[500],
  }),
  critical: css({
    color:           color.white,
    backgroundColor: color.red[500],
  }),
  warning: css({
    color:           color.white,
    backgroundColor: color.yellow[700],
  }),
} as const;

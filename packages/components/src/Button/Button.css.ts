import styled from '@emotion/styled';
import { ButtonProps, ButtonSize, ButtonVariant } from './Button.types';
import { css, SerializedStyles } from '@emotion/react';
import { token } from '@hoon-ds/token';

const {
  space,
  color,
  radius,
  semantic: { typography },
} = token;

export const Button = styled.button<Pick<ButtonProps, 'fullWidth'>>`
  border-radius: ${radius.medium};
  display: flex;
  column-gap: ${space[2]};
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }
  &:active:not(:disabled) {
    opacity: 0.6;
  }
  &:disabled {
    background-color: ${color.gray[300]};
    color: ${color.white};
    cursor: not-allowed;
  }

  ${({ fullWidth }) => fullWidth && fullWidthCSS};
`;

const fullWidthCSS = css({
  width: '100%',
});

export const sizeCSS: Record<ButtonSize, SerializedStyles> = {
  small: css({
    padding: `${space[2]} ${space[3]}`,
    ...typography.small,
  }),
  medium: css({
    padding: `${space[3]} ${space[3]}`,
    ...typography.medium,
  }),
  large: css({
    padding: `${space[3]} ${space[4]}`,
    ...typography.large,
  }),
} as const;

export const variantCSS: Record<ButtonVariant, SerializedStyles> = {
  default: css({
    backgroundColor: color.ink,
    color: color.white,
  }),
  secondary: css({
    backgroundColor: color.gray[300],
    color: color.gray[600],
  }),
  outlined: css({
    backgroundColor: color.white,
    color: color.gray[600],
    boxShadow: `inset 0 0 0 1px ${color.gray[500]}`,
  }),
  critical: css({
    backgroundColor: color.red[500],
    color: color.white,
  }),
} as const;

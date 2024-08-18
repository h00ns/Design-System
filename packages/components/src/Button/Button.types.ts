import { HTMLAttributes } from 'react';

export const ButtonVariant = {
  default: 'default',
  secondary: 'secondary',
  outlined: 'outlined',
  critical: 'critical',
} as const;

export const ButtonSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];
export type ButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
}

import { HTMLAttributes } from 'react';

export const BadgeVariant = {
  default: 'default',
  warning: 'warning',
  critical: 'critical',
  success: 'success',
} as const;

export const BadgeSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export type BadgeVariant = (typeof BadgeVariant)[keyof typeof BadgeVariant];
export type BadgeSize = (typeof BadgeSize)[keyof typeof BadgeSize];

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  text: string;
}

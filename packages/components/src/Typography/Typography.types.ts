import { HTMLAttributes, ReactNode } from 'react';
import { token } from '../../../token/src';

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  variant?: keyof typeof token.semantic.typography;
  color?: string;
}

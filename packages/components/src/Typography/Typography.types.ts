import { HTMLAttributes, PropsWithChildren } from 'react';
import { token } from '../../../token/src';

export interface TypographyProps extends PropsWithChildren, HTMLAttributes<HTMLParagraphElement> {
  variant?: keyof typeof token.semantic.typography;
  color?: string;
}

import { token } from '@hoon-ds/token';
import { HTMLAttributes } from 'react';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width: number | string;
  height: number | string;
  radius?: keyof typeof token.radius;
}

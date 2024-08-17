import { HTMLAttributes } from 'react';

export interface IndicatorProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large' | number;
}

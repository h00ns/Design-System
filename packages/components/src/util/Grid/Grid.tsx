import { ForwardedRef, forwardRef } from 'react';
import { GridProps } from './Grid.types';
import { Div } from '../Div';

const _Grid = ({ ...props }: GridProps, ref: ForwardedRef<HTMLDivElement>) => {
  return <Div ref={ref} display="grid" {...props} />;
};

export const Grid = forwardRef(_Grid);

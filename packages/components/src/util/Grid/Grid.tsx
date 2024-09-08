import { ForwardedRef, forwardRef } from 'react';

import { Div }                      from '../Div';

import { GridProps }                from './Grid.types';

const _Grid = ({ ...props }: GridProps, ref: ForwardedRef<HTMLDivElement>) => {
  return <Div ref={ref} display="grid" {...props} />;
};

export const Grid = forwardRef(_Grid);

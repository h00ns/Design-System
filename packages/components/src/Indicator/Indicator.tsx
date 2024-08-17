import { ForwardedRef, forwardRef } from 'react';
import { Component } from './Indicator.css';
import { IndicatorProps } from './Indicator.types';

const _Indicator = (
  { size = 'medium', ...htmlDivProps }: IndicatorProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const sizeMap: Record<'small' | 'medium' | 'large', number> = {
    small: 16,
    medium: 24,
    large: 32,
  };

  const resultSize = typeof size === 'number' ? size : sizeMap[size];

  return (
    <Component
      ref={ref}
      css={{
        width: resultSize,
        height: resultSize,
      }}
      {...htmlDivProps}
    />
  );
};

export const Indicator = forwardRef(_Indicator);

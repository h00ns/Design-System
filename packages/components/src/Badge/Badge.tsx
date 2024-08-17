import { ForwardedRef, forwardRef } from 'react';
import { BadgeProps } from './Badge.types';
import { sizeCSS, variantCSS, Component } from './Badge.css';
import { css } from '@emotion/react';

const _Badge = (
  { size = 'medium', variant = 'default', text, ...htmlDivProps }: BadgeProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <Component css={css([sizeCSS[size]], variantCSS[variant])} ref={ref} {...htmlDivProps}>
      {text}
    </Component>
  );
};

export const Badge = forwardRef(_Badge);

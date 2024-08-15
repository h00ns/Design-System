import { ForwardedRef, forwardRef } from 'react';
import { BadgeProps } from './Badge.types';
import { sizeCSS, variantCSS, Wrap } from './Badge.css';
import { css } from '@emotion/react';

const _Badge = (
  { size = 'medium', variant = 'default', text, ...htmlDivProps }: BadgeProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <Wrap css={css([sizeCSS[size]], variantCSS[variant])} ref={ref} {...htmlDivProps}>
      {text}
    </Wrap>
  );
};

export const Badge = forwardRef(_Badge);

import { ForwardedRef, forwardRef } from 'react';
import { BadgeProps } from './Badge.types';
import { sizeCSS, variantCSS } from './Badge.css';
import * as S from './Badge.css';
import { css } from '@emotion/react';

const _Badge = (
  { size = 'medium', variant = 'default', text, ...htmlDivProps }: BadgeProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <S.Badge css={css([sizeCSS[size]], variantCSS[variant])} ref={ref} {...htmlDivProps}>
      {text}
    </S.Badge>
  );
};

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(_Badge);

import { css } from '@emotion/react';
import { ForwardedRef, forwardRef } from 'react';

import { sizeCSS, variantCSS } from './Badge.css';
import * as S from './Badge.css';
import { BadgeProps } from './Badge.types';

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

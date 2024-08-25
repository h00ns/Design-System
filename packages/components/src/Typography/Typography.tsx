import { ForwardedRef, forwardRef } from 'react';

import { token } from '../../../token/src';

import * as S from './Typography.css';
import { TypographyProps } from './Typography.types';

const _Typography = (
  { children, variant = 'medium', color, ...htmParagraphProps }: TypographyProps,
  ref: ForwardedRef<HTMLParagraphElement>,
) => {
  const typographyCSS = token.semantic.typography[variant];

  return (
    <S.Typography
      ref={ref}
      css={{
        color,
        ...typographyCSS,
      }}
      {...htmParagraphProps}>
      {children}
    </S.Typography>
  );
};

export const Typography = forwardRef(_Typography);

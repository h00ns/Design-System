import { ForwardedRef, forwardRef } from 'react';
import { TypographyProps } from './Typography.types';
import { token } from '../../../token/src';
import { Component } from './Typography.css';

const _Typography = (
  { children, variant = 'medium', color, ...htmParagraphProps }: TypographyProps,
  ref: ForwardedRef<HTMLParagraphElement>,
) => {
  const typographyCSS = token.semantic.typography[variant];

  return (
    <Component
      ref={ref}
      css={{
        color,
        ...typographyCSS,
      }}
      {...htmParagraphProps}>
      {children}
    </Component>
  );
};

export const Typography = forwardRef(_Typography);

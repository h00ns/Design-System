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

/**
 *  Typography
 *
 *  @param {token.semantic.typography} [variant] - Typography의 크기를 설정합니다. (default : medium)
 *  ```tsx
 *  token.semantic.typography
 *  ```
 *
 *  @param {string} [color] - Typography의 색상을 설정합니다.
 *
 *  @param {ReactNode} children - Typography 컴포넌트 내부에 표시될 텍스트를 나타냅니다.
 */
export const Typography = forwardRef(_Typography);

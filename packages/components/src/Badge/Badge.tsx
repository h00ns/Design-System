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

/**
 * Badge
 *
 * @param {BadgeVariant} [variant] - Badge 컴포넌트의 타입을 설정합니다. (default : default)
 * ```tsx
 * 'default' | 'warning' | 'critical' | 'success'
 * ```
 *
 * @param {BadgeSize} [size] - Badge 컴포넌트의 크기를 설정합니다. (default : medium)
 * ```tsx
 * 'small' | 'medium' | 'large'
 * ```
 *
 * @param {string} [text] - Badge 컴포넌트 내부에 표시될 텍스트를 나타냅니다.
 */
export const Badge = forwardRef<HTMLDivElement, BadgeProps>(_Badge);

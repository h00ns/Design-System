import { ForwardedRef, forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import { sizeCSS, variantCSS } from './Button.css';
import * as S from './Button.css';
import { css } from '@emotion/react';
import { Indicator } from '../Indicator';

const _Button = (
  {
    text,
    variant = 'default',
    size = 'medium',
    disabled = false,
    isLoading = false,
    fullWidth = false,
    ...htmlBUttonProps
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <S.Button
      ref={ref}
      fullWidth={fullWidth}
      disabled={disabled}
      css={css([sizeCSS[size], variantCSS[variant]])}
      {...htmlBUttonProps}>
      {text}
      {isLoading && !disabled && <Indicator size="small" />}
    </S.Button>
  );
};

export const Button = forwardRef(_Button);

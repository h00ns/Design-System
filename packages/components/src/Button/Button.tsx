import { css }                      from '@emotion/react';
import { ForwardedRef, forwardRef } from 'react';

import { Indicator }                from '../Indicator';

import { sizeCSS, variantCSS }      from './Button.css';
import * as S                       from './Button.css';
import { ButtonProps }              from './Button.types';

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
      {...htmlBUttonProps}
    >
      {text}
      {isLoading && !disabled && <Indicator size="small" />}
    </S.Button>
  );
};

export const Button = forwardRef(_Button);

import { css } from '@emotion/react';
import { CSSProperties, ForwardedRef, forwardRef, HTMLAttributes } from 'react';

import { DivProps } from './Div.types';

const isCSSProperty = (key: string): key is keyof CSSProperties => {
  return key in document.body.style;
};

const _Div = (
  { children, style, _active, _after, _before, _focus, _hover, ...props }: DivProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const cssProps: CSSProperties = {};
  const divProps: HTMLAttributes<HTMLDivElement> = {};

  Object.entries(props).forEach(([key, value]) => {
    if (isCSSProperty(key)) {
      cssProps[key as keyof CSSProperties] = value;
    } else {
      divProps[key as keyof HTMLAttributes<HTMLDivElement>] = value;
    }
  });

  return (
    <div
      ref={ref}
      css={css({
        '&:hover': _hover,
        '&:active': _active,
        '&:after': _after,
        '&:before': _before,
        '&:focus': _focus,
        ...style,
        ...cssProps,
      })}
      {...props}>
      {children}
    </div>
  );
};

export const Div = forwardRef(_Div);

import { ForwardedRef, forwardRef } from 'react';
import { CheckboxWrapProps } from './Checkbox.types';
import { css } from '@emotion/react';
import { token } from '@hoon-ds/token';

const _CheckboxWrap = (
  { children, ...htmlDivProps }: CheckboxWrapProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <div
      ref={ref}
      css={css({
        display: 'flex',
        flexDirection: 'column',
        rowGap: token.space[2],
      })}
      {...htmlDivProps}>
      {children}
    </div>
  );
};

export const CheckboxWrap = forwardRef(_CheckboxWrap);

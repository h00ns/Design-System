import { ForwardedRef, forwardRef } from 'react';
import { CheckboxTitleProps } from './Checkbox.types';
import { token } from '@hoon-ds/token';
import { Typography } from '../Typography';

const _CheckboxTitle = (
  { children, ...htmlParagraphProps }: CheckboxTitleProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <Typography ref={ref} variant="large-bold" color={token.color.ink} {...htmlParagraphProps}>
      {children}
    </Typography>
  );
};

export const CheckboxTitle = forwardRef(_CheckboxTitle);

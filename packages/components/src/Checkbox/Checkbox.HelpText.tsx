import { ForwardedRef, forwardRef } from 'react';
import { CheckboxHelpTextProps } from './Checkbox.types';
import { Typography } from '../Typography';
import { token } from '@hoon-ds/token';

const _CheckboxHelpText = (
  { children, ...htmlParagraphProps }: CheckboxHelpTextProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <Typography
      className="checkbox-help-text"
      ref={ref}
      variant="small"
      color={token.color.gray[700]}
      {...htmlParagraphProps}>
      {children}
    </Typography>
  );
};

export const CheckboxHelpText = forwardRef(_CheckboxHelpText);

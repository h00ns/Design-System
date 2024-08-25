import { token } from '@hoon-ds/token';
import { ForwardedRef, forwardRef } from 'react';

import { Typography } from '../Typography';

import { CheckboxHelpTextProps } from './Checkbox.types';

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

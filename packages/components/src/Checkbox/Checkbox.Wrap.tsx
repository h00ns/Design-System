import { ForwardedRef, forwardRef } from 'react';
import { CheckboxWrapProps } from './Checkbox.types';
import { token } from '@hoon-ds/token';
import { Flex } from '../util';

const _CheckboxWrap = (
  { children, ...htmlDivProps }: CheckboxWrapProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <Flex.Column gap={token.space[2]} ref={ref} {...htmlDivProps}>
      {children}
    </Flex.Column>
  );
};

export const CheckboxWrap = forwardRef(_CheckboxWrap);

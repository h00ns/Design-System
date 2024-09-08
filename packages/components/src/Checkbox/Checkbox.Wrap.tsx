import { token }                    from '@hoon-ds/token';
import { ForwardedRef, forwardRef } from 'react';

import { Flex }                     from '../util';

import { CheckboxWrapProps }        from './Checkbox.types';

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

import { ForwardedRef, forwardRef } from 'react';
import { CheckboxWithLabelProps } from './Checkbox.types';
import { Checkbox } from './Checkbox';
import { css } from '@emotion/react';

const _CheckboxWithLabel = (
  { label, ...checkboxProps }: CheckboxWithLabelProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const checkboxId = checkboxProps.id || `checkbox-${label.replace(/\s+/g, '-')}`;

  return (
    <div
      css={css({
        display: 'flex',
        gap: 8,

        '& + .checkbox-help-text': {
          paddingLeft: 24,
        },
      })}>
      <Checkbox {...checkboxProps} ref={ref} id={checkboxId} />
      <label htmlFor={checkboxId}>{label}</label>
    </div>
  );
};

export const CheckboxWithLabel = forwardRef(_CheckboxWithLabel);

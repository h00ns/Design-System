import { ChangeEventHandler, ForwardedRef, forwardRef } from 'react';
import { Input } from './Checkbox.css';
import { CheckboxProps } from './Checkbox.types';

const _Checkbox = (
  { checked, onChangeChecked, onChange, ...htmlInputProps }: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  // onChange binding
  const _onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e);
    onChangeChecked?.(e.target.checked);
  };

  return (
    <Input type="checkbox" ref={ref} checked={checked} onChange={_onChange} {...htmlInputProps} />
  );
};

export const Checkbox = forwardRef(_Checkbox);

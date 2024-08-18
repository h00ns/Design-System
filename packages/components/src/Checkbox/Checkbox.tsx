import { ChangeEventHandler, ForwardedRef, forwardRef } from 'react';
import { Input } from './Checkbox.css';
import { CheckboxProps } from './Checkbox.types';
import { CheckboxWrap } from './Checkbox.wrap';
import { CheckboxTitle } from './Checkbox.title';
import { CheckboxHelpText } from './Checkbox.helpText';
import { CheckboxWithLabel } from './Checkbox.WithLabel';

// transition 등 커스텀 효과 넣을려면, 커스텀 input을 만들어야해서 여기에선
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

const Checkbox = forwardRef(_Checkbox);

const CheckboxNameSpace = Object.assign(Checkbox, {
  Wrap: CheckboxWrap,
  Title: CheckboxTitle,
  HelpText: CheckboxHelpText,
  WithLabel: CheckboxWithLabel,
});

export { CheckboxNameSpace as Checkbox };

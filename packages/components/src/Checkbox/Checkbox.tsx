import { ChangeEventHandler, ForwardedRef, forwardRef } from 'react';
import * as S from './Checkbox.css';
import { CheckboxProps } from './Checkbox.types';
import { CheckboxWithLabel } from './Checkbox.WithLabel';
import { CheckboxWrap } from './Checkbox.Wrap';
import { CheckboxTitle } from './Checkbox.Title';
import { CheckboxHelpText } from './Checkbox.HelpText';

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
    <S.Checkbox
      type="checkbox"
      ref={ref}
      checked={checked}
      onChange={_onChange}
      {...htmlInputProps}
    />
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

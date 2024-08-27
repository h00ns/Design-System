import { ChangeEventHandler, ForwardedRef, forwardRef, useId } from 'react';
import { SwitchProps } from './Switch.types';
import * as S from './Switch.css';

const _Swtich = (
  { checked, disabled = false, onChangeChecked, onChange, ...htmlInputProps }: SwitchProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const id = useId();

  // onChange binding
  const _onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e);
    onChangeChecked?.(e.target.checked);
  };

  return (
    <div>
      <S.Input
        ref={ref}
        id={id}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={_onChange}
        {...htmlInputProps}
      />
      <S.Label htmlFor={id} />
    </div>
  );
};

export const Switch = forwardRef(_Swtich);

import { InputHTMLAttributes } from 'react';

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  disabled?: boolean;
  onChangeChecked?: (value: boolean) => void;
}

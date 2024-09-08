import { HTMLAttributes, InputHTMLAttributes, PropsWithChildren } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?:         boolean;
  onChangeChecked?: (value: boolean) => void;
}

export interface CheckboxWithLabelProps extends CheckboxProps {
  label: string;
}

export interface CheckboxWrapProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {}

export interface CheckboxTitleProps
  extends PropsWithChildren,
  HTMLAttributes<HTMLParagraphElement> {}

export interface CheckboxHelpTextProps
  extends PropsWithChildren,
  HTMLAttributes<HTMLParagraphElement> {}

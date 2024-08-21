import { HTMLAttributes } from 'react';

export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  height?: number | string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  onChangeText?: (value: string) => void;
}

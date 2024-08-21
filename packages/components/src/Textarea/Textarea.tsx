import { ChangeEventHandler, ForwardedRef, forwardRef } from 'react';
import { TextareaProps } from './Textarea.types';
import * as S from './Textarea.css';
import { css } from '@emotion/react';

const _Textarea = (
  {
    height,
    placeholder,
    disabled,
    isError = false,
    onChange,
    onChangeText,
    ...htmlTextareaProps
  }: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) => {
  // onChange binding
  const _onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    onChange?.(e);
    onChangeText?.(e.target.value);
  };

  return (
    <S.Wrap isError={isError}>
      <S.Textarea
        ref={ref}
        css={css({
          height,
        })}
        disabled={disabled}
        placeholder={placeholder}
        onChange={_onChange}
        {...htmlTextareaProps}
      />
    </S.Wrap>
  );
};

export const Textarea = forwardRef(_Textarea);

import { CSSProperties, ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { FlexProps } from './Flex.types';
import { css } from '@emotion/react';

const isCSSProperty = (key: string): key is keyof CSSProperties => {
  return key in document.body.style;
};

const _Flex = (
  { children, style, _active, _after, _before, _focus, _hover, ...props }: FlexProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const cssProps: CSSProperties = {};
  const divProps: HTMLAttributes<HTMLDivElement> = {};

  Object.entries(props).forEach(([key, value]) => {
    if (isCSSProperty(key)) {
      cssProps[key as keyof CSSProperties] = value;
    } else {
      divProps[key as keyof HTMLAttributes<HTMLDivElement>] = value;
    }
  });

  return (
    <div
      ref={ref}
      css={css({
        display: 'flex',
        '&:hover': _hover,
        '&:active': _active,
        '&:after': _after,
        '&:before': _before,
        '&:focus': _focus,
        ...style,
        ...cssProps,
      })}
      {...divProps}>
      {children}
    </div>
  );
};

const Flex = forwardRef(_Flex);

const FlexCenter = forwardRef((props: FlexProps, ref: ForwardedRef<HTMLDivElement>) => (
  <Flex ref={ref} {...props} alignItems="center" justifyContent="center" />
));
FlexCenter.displayName = 'Flex.Center';

const FlexColumn = forwardRef((props: FlexProps, ref: ForwardedRef<HTMLDivElement>) => (
  <Flex ref={ref} {...props} flexDirection="column" />
));
FlexColumn.displayName = 'Flex.Column';

const FlexNameSpace = Object.assign(Flex, {
  Center: FlexCenter,
  Column: FlexColumn,
});

export { FlexNameSpace as Flex };

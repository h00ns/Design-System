import { ForwardedRef, forwardRef } from 'react';

import { Div } from '../Div';

import { FlexProps } from './Flex.types';

const _Flex = ({ ...props }: FlexProps, ref: ForwardedRef<HTMLDivElement>) => {
  return <Div ref={ref} display="flex" {...props} />;
};

const Flex = forwardRef(_Flex);

const FlexCenter = forwardRef((props: FlexProps, ref: ForwardedRef<HTMLDivElement>) => (
  <Flex ref={ref} alignItems="center" justifyContent="center" {...props} />
));
FlexCenter.displayName = 'Flex.Center';

const FlexColumn = forwardRef((props: FlexProps, ref: ForwardedRef<HTMLDivElement>) => (
  <Flex ref={ref} flexDirection="column" {...props} />
));
FlexColumn.displayName = 'Flex.Column';

const FlexNameSpace = Object.assign(Flex, {
  Center: FlexCenter,
  Column: FlexColumn,
});

export { FlexNameSpace as Flex };

import { CSSObject }                                        from '@emotion/react';
import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';

type HTMLDivAttributesAndCSSProperties = HTMLAttributes<HTMLDivElement> & CSSProperties;

export interface DivProps extends PropsWithChildren, HTMLDivAttributesAndCSSProperties {
  _active?: CSSObject;
  _after?:  CSSObject;
  _before?: CSSObject;
  _focus?:  CSSObject;
  _hover?:  CSSObject;
}

import { ElementType } from 'react';

export type As<T extends ElementType = 'div'> = {
  as?: T;
};

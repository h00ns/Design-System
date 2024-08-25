import { semantic } from './_semantic';
import color from './color';
import fontSize from './font-size';
import fontWeight from './font-weight';
import lineHeight from './line-height';
import radius from './radius';
import shadow from './shadow';
import space from './space';

export const token = {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  radius,
  shadow,
  space,

  semantic,
} as const;

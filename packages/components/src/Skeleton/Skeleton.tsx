import { css }                      from '@emotion/react';
import { token }                    from '@hoon-ds/token';
import { ForwardedRef, forwardRef } from 'react';

import * as S                       from './Skeleton.css';
import { SkeletonProps }            from './Skeleton.types';

const _Skeleton = (
  { width, height, radius = 'medium', ...htmlDivProps }: SkeletonProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const borderRadius = token.radius[radius];

  return <S.Skeleton css={css({ width, height, borderRadius })} ref={ref} {...htmlDivProps} />;
};

export const Skeleton = forwardRef(_Skeleton);

import { Flex, Grid } from '@hoon-ds/components';
import { Meta } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Grid> = {
  title: 'Components/util/Grid',
  component: Grid,
  argTypes: {
    _active: {
      description: '가상요소 ::active를 설정합니다.',
    },
    _after: {
      description: '가상요소 ::after를 설정합니다.',
    },
    _before: {
      description: '가상요소 ::before를 설정합니다.',
    },
    _focus: {
      description: '가상요소 ::focus를 설정합니다.',
    },
    _hover: {
      description: '가상요소 ::hover를 설정합니다.',
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;

/**
 *  CSSProperties와 HTMLDivAttributes를 Props로 받는 Grid 컴포넌트입니다.
 *
 *  `_hover` 등의 가상요소 또한 props로 전달할 수 있습니다.
 */
export const Default = () => (
  <Grid
    width={200}
    padding={24}
    border="5px solid black"
    cursor="pointer"
    gap={24}
    _hover={{
      backgroundColor: 'black',
      color: 'white',
      transition: 'all 0.3s',
    }}
    onClick={() => alert('Grid')}>
    <span>Grid</span>
    <span>Component</span>
  </Grid>
);

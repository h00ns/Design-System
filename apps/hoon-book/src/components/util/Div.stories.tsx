import { Div } from '@hoon-ds/components';
import { Meta } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Div> = {
  title: 'Components/util/Div',
  component: Div,
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
} satisfies Meta<typeof Div>;

export default meta;

/**
 *  CSSProperties와 HTMLDivAttributes를 Props로 받는 Div 컴포넌트입니다.
 *
 *  `_hover` 등의 가상요소 또한 props로 전달할 수 있습니다.
 */
export const Default = () => (
  <Div
    width={200}
    height={200}
    border="5px solid black"
    padding={24}
    cursor="pointer"
    _hover={{
      backgroundColor: 'black',
      color: 'white',
      transition: 'all 0.3s',
    }}
    onClick={() => alert('Div')}>
    Div
  </Div>
);

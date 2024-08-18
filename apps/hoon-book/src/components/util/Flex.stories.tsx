import { Flex } from '@hoon-ds/components';
import { Meta } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Flex> = {
  title: 'Components/util/Flex',
  component: Flex,
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
} satisfies Meta<typeof Flex>;

export default meta;

/**
 *  CSSProperties와 HTMLDivAttributes를 Props로 받는 Flex 컴포넌트입니다.
 *
 *  `_hover` 등의 가상요소 또한 props로 전달할 수 있습니다.
 */
export const Default = () => (
  <Flex
    width={200}
    height={200}
    border="5px solid black"
    justifyContent="center"
    alignItems="center"
    cursor="pointer"
    _hover={{
      backgroundColor: 'black',
      color: 'white',
      transition: 'all 0.3s',
    }}
    onClick={() => alert('Flex')}>
    Flex
  </Flex>
);

/** Center를 기본값으로 주는 Flex 컴포넌트입니다. */
export const FlexCenter = () => (
  <Flex.Center width={200} height={200} border="5px solid black">
    Flex
  </Flex.Center>
);

/** direction column을 기본값으로 주는 Flex 컴포넌트입니다. */
export const FlexColumn = () => (
  <Flex.Column
    width={200}
    height={200}
    border="5px solid black"
    justifyContent="center"
    alignItems="center"
    gap={32}>
    <div>Flex</div>
    <div>Column</div>
  </Flex.Column>
);

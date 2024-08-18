import { Typography } from '@hoon-ds/components';
import { Meta, StoryObj } from '@storybook/react';
import { token } from '@hoon-ds/token';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    children: {
      description: 'Typography 컴포넌트 내부에 표시될 children구조를 나타냅니다.',
    },
    variant: {
      description: 'Typography 컴포넌트의 타입을 설정합니다. (default : medium)',
      options: Object.keys(token.semantic.typography),
      control: { type: 'select' },
    },
    color: {
      description: 'Typography 컴포넌트의 내부에 표시될 색상을 설정합니다.',
      control: { type: 'color' },
    },
  },
  args: {
    children: 'Typography',
    variant: 'medium',
    color: '#000000',
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Component: Story = {};

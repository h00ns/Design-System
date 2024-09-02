import { Skeleton } from '@hoon-ds/components';
import { Meta, StoryObj } from '@storybook/react';
import { token } from '@hoon-ds/token';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    width: {
      description: 'Skeleton 컴포넌트의 너비를 설정합니다.',
    },
    height: {
      description: 'Skeleton 컴포넌트의 높이를 설정합니다.',
    },
    radius: {
      description: 'Skeleton 컴포넌트의 테두리 굴곡을 설정합니다.',
      control: { type: 'select' },
      options: Object.keys(token.radius),
    },
  },
  args: {
    width: 300,
    height: 200,
    radius: 'medium',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

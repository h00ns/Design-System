import { Badge as Component } from '@hoon-ds/components';
import { Meta, StoryObj } from '@storybook/react';

const Badge = Component;

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    text: {
      description: 'Badge 컴포넌트 내부에 표시될 텍스트를 나타냅니다.',
    },
    size: {
      description: 'Badge 컴포넌트의 크기를 설정합니다. (default : medium)',
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    variant: {
      description: 'Badge 컴포넌트의 타입을 설정합니다. (default : default)',
      options: ['default', 'success', 'warning', 'critical'],
      control: { type: 'radio' },
    },
  },
  args: {
    text: 'Badge',
    size: 'medium',
    variant: 'default',
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

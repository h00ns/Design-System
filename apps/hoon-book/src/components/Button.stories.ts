import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@hoon-ds/components';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    text: {
      description: 'Button 컴포넌트 내부에 표시될 텍스트를 나타냅니다.',
    },
    size: {
      description: 'Button 컴포넌트의 크기를 설정합니다. (default : medium)',
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    variant: {
      description: 'Button 컴포넌트의 타입을 설정합니다. (default : default)',
      options: ['default', 'secondary', 'outlined', 'critical'],
      control: { type: 'radio' },
    },
    disabled: {
      description: 'Button 컴포넌트의 활성화 여부를 설정합니다.',
      control: { type: 'boolean' },
    },
    isLoading: {
      description: 'Button 컴포넌트의 로딩 여부를 설정합니다.',
      control: { type: 'boolean' },
    },
    fullWidth: {
      description: 'Button 컴포넌트의 가로 길이를 최대로 설정합니다.',
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'default',
    size: 'medium',
    text: 'Button',
    disabled: false,
    isLoading: false,
    fullWidth: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

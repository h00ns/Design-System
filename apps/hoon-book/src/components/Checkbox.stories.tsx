import { Checkbox } from '@hoon-ds/components';
import { Meta, StoryObj } from '@storybook/react';
import '@hoon-ds/stylesheet';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      description: 'Checkbox 컴포넌트의 체크 여부를 설정합니다.',
      control: { type: 'boolean' },
    },
  },
  args: {
    checked: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

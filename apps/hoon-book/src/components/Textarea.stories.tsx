import { Textarea } from '@hoon-ds/components';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    height: {
      description: 'Textarea 컴포넌트의 높이를 설정합니다.',
    },
    placeholder: {
      description: 'Textarea 컴포넌트의 placeholder를 설정합니다.',
    },
    value: {
      description: 'Textarea 컴포넌트의 value를 설정합니다.',
    },
    disabled: {
      description: 'Textarea 컴포넌트의 활성화 여부를 설정합니다.',
      control: { type: 'boolean' },
    },
    isError: {
      description: 'Textarea 컴포넌트의 에러 여부를 설정합니다.',
      control: { type: 'boolean' },
    },
    onChangeText: {
      description: '값이 변경될 때 실행될, string을 매개변수로 받는 함수를 설정합니다.',
    },
  },
  args: {
    height: 240,
    placeholder: 'placeholder',
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

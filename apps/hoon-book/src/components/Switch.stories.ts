import { Switch } from '@hoon-ds/components';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    checked: {
      description: 'Switch 컴포넌트의 체크 여부를 나타냅니다.',
    },
    disabled: {
      description: 'Switch 컴포넌트의 비활성화 여부를 나타냅니다.',
    },
    onChangeChecked: {
      description: '스위치 여부를 변경할 때 실행될, boolean을 매개변수로 받는 함수를 설정합니다.',
    },
  },
  args: {},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

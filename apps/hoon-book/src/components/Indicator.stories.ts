import { Indicator } from '@hoon-ds/components';
import { Meta, StoryObj } from '@storybook/react';
import '@hoon-ds/stylesheet';

const meta: Meta<typeof Indicator> = {
  title: 'Components/Indicator',
  component: Indicator,
  argTypes: {
    size: {
      description:
        'Indicator의 크기를 설정합니다. number형식으로 직접 설정할 수 있습니다. (default : medium)',
      options: ['small', 'medium', 'large'],
    },
  },
  args: {},
} satisfies Meta<typeof Indicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Component: Story = {};

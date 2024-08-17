import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@hoon-ds/components';
import '@hoon-ds/stylesheet';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

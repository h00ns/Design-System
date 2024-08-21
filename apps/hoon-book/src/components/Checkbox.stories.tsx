import { Checkbox, CheckboxWithLabel } from '@hoon-ds/components';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      description: 'Checkbox 컴포넌트의 체크 여부를 설정합니다.',
      control: { type: 'boolean' },
    },
    onChangeChecked: {
      description: '체크 여부를 변경할 때 실행될, boolean을 매개변수로 받는 함수를 설정합니다.',
    },
  },
  args: {
    checked: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Label과 같이 사용할 수 있습니다. */
export const WithLabel = () => <CheckboxWithLabel label="Label" />;

/** Checkbox.Wrap을 사용하여 compound pattern으로 title, helpText를 추가할 수 있습니다. */
export const CheckboxWrap = () => (
  <>
    <Checkbox.Wrap>
      <Checkbox.Title>Title</Checkbox.Title>
      <Checkbox.WithLabel label="Label" />
      <Checkbox.HelpText>help text</Checkbox.HelpText>
    </Checkbox.Wrap>

    <Checkbox.Wrap style={{ marginTop: 48 }}>
      <Checkbox.Title>Title</Checkbox.Title>
      <Checkbox />
      <Checkbox.HelpText>help text</Checkbox.HelpText>
    </Checkbox.Wrap>
  </>
);

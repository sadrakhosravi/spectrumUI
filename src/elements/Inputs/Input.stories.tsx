import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputWithIcon } from '.';

import { AirplaneRegular } from '@fluentui/react-icons';
import { Button } from '../Buttons';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Elements/Input',
  component: Input,
  args: {},
} satisfies Meta<typeof Input>;

const meta2 = {
  title: 'Elements/Input',
  component: InputWithIcon,
  args: {},
} satisfies Meta<typeof InputWithIcon>;

type Story = StoryObj<typeof meta>;
type StoryWithIcon = StoryObj<typeof meta2>;

export const Primary: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export const IconInput: StoryWithIcon = {
  render: args => <InputWithIcon {...args} />,
  args: {
    children: <Button icon={AirplaneRegular} />,
    width: '400px',
  },
};

export default meta;

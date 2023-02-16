import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import '../../styles/main.scss';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Elements/Button',
  component: Button,
  args: {},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    text: 'Button',
    fullWidth: false,
  },
};

export default meta;

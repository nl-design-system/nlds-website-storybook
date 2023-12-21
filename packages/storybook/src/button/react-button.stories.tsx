import { Button } from '@kernteam/components-react/src/Button';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'React Component/Button',
  id: 'react-button',
  component: Button,
  args: {
    children: 'Read more...',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [undefined, 'button', 'submit', 'reset'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

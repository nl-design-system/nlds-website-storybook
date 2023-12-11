/* @license CC0-1.0 */

import readme from '@example/components-css/avatar/README.md?raw';
import type { Meta, StoryObj } from '@storybook/react';
import { IconUser } from '@tabler/icons-react';
import { PropsWithChildren } from 'react';
import '@example/components-css/avatar/index.scss';

const Avatar = ({ children }: PropsWithChildren<{}>) => (
  <div className="kernteam-avatar">
    <span className="kernteam-avatar__icon">{children}</span>
  </div>
);

const meta = {
  title: 'CSS Component/Avatar',
  id: 'css-avatar',
  component: Avatar,
  argTypes: {
    children: {
      name: 'Content',
      description: 'Avatar icon',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
  },
  args: {
    children: <IconUser />,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

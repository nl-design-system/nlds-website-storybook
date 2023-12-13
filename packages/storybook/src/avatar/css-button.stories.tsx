/* @license CC0-1.0 */

import readme from '@example/components-css/avatar/README.md?raw';
import type { Meta, StoryObj } from '@storybook/react';
import { IconUser } from '@tabler/icons-react';
import { PropsWithChildren } from 'react';
import '@example/components-css/avatar/index.scss';

interface AvatarProps {
  appearance?: 'circle' | 'rounded' | 'square',
  contents?: 'text' | 'image'
}

const Avatar = ({ appearance = 'circle', contents = 'image', children }: PropsWithChildren<AvatarProps>) => (
  <div className={`kernteam-avatar--${appearance} contents--${contents}`}>
    <span className="kernteam-avatar__icon">
       {children}
    </span>
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



export const Square: Story = {
  args: {
    appearance: 'square'
  }
};
export const Circle: Story = {
  args: {
    appearance: 'circle'
  }
};
export const Rounded: Story = {
  args: {
    appearance: 'rounded'
  }
};
export const Image: Story = {
  args: {
    children: <img alt="Profile picture" className="kernteam-avatar__image" src="https://entertainment.inquirer.net/files/2012/08/beyonce-knowles.jpg" />
  }
}
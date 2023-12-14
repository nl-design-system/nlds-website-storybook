/* @license CC0-1.0 */

import readme from '@kernteam/components-css/button/README.md?raw';
import { KernteamButton } from '@kernteam/web-components-react';
import type { Meta, StoryObj } from '@storybook/react';
import { PropsWithChildren } from 'react';

const Button = ({ children }: PropsWithChildren<{}>) => <KernteamButton>{children}</KernteamButton>;

const meta = {
  title: 'nldesignsystem.nl/template',
  id: 'kleuren/template',
  component: Button,
  argTypes: {
    children: {
      name: 'Content',
      description: 'nldesignsystem.nl kleuren template',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
  },
  args: {
    children: 'Opslaan en verder',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'kernteam button',
};

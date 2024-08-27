/* @license CC0-1.0 */

import readme from '@nl-design-system-kernteam/components-css/sidebar/README.md?raw';
import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '../../components-react/src/Sidebar';

const meta = {
  title: 'CSS Component/Sidebar',
  id: 'css-sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

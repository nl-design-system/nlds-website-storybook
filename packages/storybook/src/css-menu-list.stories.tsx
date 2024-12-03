/* @license CC0-1.0 */

import readme from '@nl-design-system-kernteam/components-css/menu-list/README.md?raw';
import type { Meta, StoryObj } from '@storybook/react';
import { menuListItems } from './exampleData';
import { MenuList } from '../../components-react/src/MenuList';

const meta = {
  title: 'CSS Component/Menu list',
  id: 'css-menu-list',
  component: MenuList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof MenuList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuListItems: menuListItems,
  },
};

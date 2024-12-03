/* @license CC0-1.0 */

import readme from '@nl-design-system-kernteam/components-css/sidebar/README.md?raw';
import type { Meta, StoryObj } from '@storybook/react';
import { IconChevronLeft, IconX } from '@tabler/icons-react';
import { menuListItems } from './exampleData';
import { MenuList } from '../../components-react/src/MenuList';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarHeaderButton,
  SidebarTitle,
} from '../../components-react/src/Sidebar';

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

export const Default: Story = {
  render: () => {
    return (
      <Sidebar>
        <SidebarHeader>
          <SidebarHeaderButton>
            <IconChevronLeft />
            Hoofdmenu
          </SidebarHeaderButton>
          <SidebarHeaderButton>
            <IconX />
          </SidebarHeaderButton>
        </SidebarHeader>
        <SidebarContent>
          <SidebarTitle>Richtlijnen</SidebarTitle>
          <MenuList menuListItems={menuListItems} />
        </SidebarContent>
      </Sidebar>
    );
  },
};

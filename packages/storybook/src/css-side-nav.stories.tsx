/* @license CC0-1.0 */

import readme from '@nl-design-system-kernteam/components-css/side-nav/README.md?raw';
import type { Meta, StoryObj } from '@storybook/react';
import '@nl-design-system-kernteam/components-css/side-nav/index.scss';
import { IconArrowBarToLeft } from '@tabler/icons-react';
import { Button, Link } from '@utrecht/component-library-react/dist/css-module';

const SideNav = () => (
  <div className="kernteam-side-navigation">
    <Button appearance={'subtle-button'}>
      <IconArrowBarToLeft />
      Verberg
    </Button>
    <div>
      <nav className={'kernteam-side-navigation-nav'}>
        <ul className={'kernteam-menu-list'}>
          <li>
            <Link className={'kernteam-menu-link kernteam-menu-link--active'} aria-current="page" href="#">
              Introductie
            </Link>
          </li>
          <li>
            <Link className={'kernteam-menu-link'} href="#">
              Estafettemodel
            </Link>
          </li>
          <li>
            <Link className={'kernteam-menu-link'} href="#">
              Design Tokens
            </Link>
          </li>
          <li>
            <Link className={'kernteam-menu-link'} href="#">
              Componenten bijdragen
            </Link>
          </li>
          <li>
            <Link className={'kernteam-menu-link'} href="#">
              Voor designers
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

const meta = {
  title: 'CSS Component/Side Nav',
  id: 'css-side-nav',
  component: SideNav,
  argTypes: {
    children: {
      name: 'Content',
      description: 'Button text',
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
} satisfies Meta<typeof SideNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'kernteam button',
};

/* @license CC0-1.0 */

import readme from '@nl-design-system-kernteam/components-css/side-navigation/README.md?raw';
import type { Meta, StoryObj } from '@storybook/react';
import { SideNavigation } from '../../components-react/src';

const meta = {
  title: 'CSS Component/Side Navigation',
  id: 'css-side-nav',
  component: SideNavigation,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof SideNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    listItems: [
      {
        label: 'Introductie',
        href: '/',
      },
      {
        label: 'Stijl',
        href: '/',
      },
      {
        label: 'Formulieren',
        href: '/',
        subMenuListItems: [
          {
            label: 'Introductie formulieren',
            href: '/',
          },
          {
            label: 'Buttons',
            href: '/',
          },
          {
            label: 'Bevestigingspagina',
            href: '/',
            subMenuListItems: [
              {
                label: 'Voorbeelden',
                href: '/',
              },
              {
                label: 'Uitleg',
                href: '/',
              },
            ],
          },
        ],
      },
      {
        label: 'WCAG',
        href: '/',
        subMenuListItems: [
          {
            label: 'Introductie WCAG',
            href: '/',
          },
          {
            label: 'Lorum Ipsum',
            href: '/',
          },
        ],
      },
    ],
  },
};

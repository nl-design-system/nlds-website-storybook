import { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../components-react/src/Card';

const meta = {
  title: 'React Component/Card',
  id: 'KernteamCard',
  component: Card,
  args: {
    title: 'Tekst en taalgebruik',
    description: 'Tekst en taalgebruik in NL Design System',
    link: {
      href: '',
      linktitle: 'Tekst en taalgebruik',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHover: Story = {
  title: 'React Component/Card',
  id: 'KernteamCard',
  component: Card,
  args: {
    title: 'Tekst en taalgebruik',
    description: 'Tekst en taalgebruik in NL Design System',
    link: {
      href: '',
      linktitle: 'Tekst en taalgebruik',
    },
  },
};

export const HoverCard: Story = {
  title: 'React Component/Card',
  id: 'KernteamCard',
  component: Card,
  args: {
    title: 'Tekst en taalgebruik',
    description: 'Tekst en taalgebruik in NL Design System',
    link: {
      href: '',
      linktitle: 'Tekst en taalgebruik',
    },
  },
};

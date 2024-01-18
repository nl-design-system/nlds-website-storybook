import { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../components-react/src/Card';

const meta = {
  title: 'React Component/Card',
  id: 'KernteamCard',
  tags: ['autodocs'],
  component: Card,
  args: {
    title: 'Tekst en taalgebruik',
    description: 'Tekst en taalgebruik in NL Design System',
    link: {
      href: '#',
      linktitle: 'Tekst en taalgebruik',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Tekst en taalgebruik',
    description: 'Tekst en taalgebruik in NL Design System',
    link: {
      href: '#',
      linktitle: 'Tekst en taalgebruik',
    },
  },
};

/**Card in hover state*/
export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    ...Default.args,
  },
};

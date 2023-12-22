/* @license CC0-1.0 */

import readme from '@kernteam/components-css/avatar/README.md?raw';
import { Avatar, AvatarProps } from '@kernteam/components-react/src/Avatar';
import type { Meta, StoryObj } from '@storybook/react';
import { PropsWithChildren } from 'react';
import '@kernteam/components-css/avatar/index.scss';

interface AvatarDemoProps extends AvatarProps {
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
}

const AvatarDemo = ({ borderRadius, backgroundColor, color, ...restProps }: PropsWithChildren<AvatarDemoProps>) => {
  return (
    <Avatar
      style={{
        '--kernteam-avatar-border-radius': borderRadius,
        '--kernteam-avatar-background-color': backgroundColor,
        '--kernteam-avatar-color': color,
      }}
      {...restProps}
    />
  );
};

const meta = {
  title: 'React Component/Avatar',
  id: 'react-avatar',
  component: AvatarDemo,
  argTypes: {
    children: {
      name: 'initials',
      description:
        'Choose initials. We recommend a maximum of 2 characters. When it is left empty the default for this story is an icon.',
      type: {
        name: 'string',
      },
      table: {
        category: 'Children',
      },
    },
    borderRadius: {
      name: '--kernteam-avatar-border-radius',
      description: 'Set the design token for avatar-border-radius',
      type: {
        name: 'string',
      },
      table: {
        category: 'Design Tokens',
      },
    },
    backgroundColor: {
      name: '--kernteam-avatar-background-color',
      description: 'Set the design token for avatar-background-color',
      type: {
        name: 'string',
      },
      table: {
        category: 'Design Tokens',
      },
    },
    color: {
      name: '--kernteam-avatar-color',
      description: 'Set the design token for avatar-color',
      type: {
        name: 'string',
      },
      table: {
        category: 'Design Tokens',
      },
    },
    imageSrc: {
      name: 'avatar image',
      description: 'Set the image for avatar--image. If this value is set, any children will not be shown.',
      control: {
        type: 'file',
        accept: '.png,.svg,.jpg,.gif',
      },
      table: {
        category: 'Children',
      },
    },
    altText: {
      name: 'alt-text',
      description: 'Set the alt text for the avatar. Currently used als alt for image',
      type: {
        name: 'string',
      },
      table: {
        category: 'Children',
      },
    },
    privateProfile: {
      name: 'private or company',
      description: 'Set the icon-variant for the avatar.',
      value: {
        control: { type: 'radio' },
        options: ['Private profile', 'Company profile'],
      },
      type: {
        name: 'boolean',
      },
      table: {
        category: 'Children',
      },
    },
  },
  args: {
    borderRadius: '50%',
    backgroundColor: 'red',
    color: 'white',
    altText: '',
    privateProfile: true,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof AvatarDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Image: Story = {
  args: {
    imageSrc: 'https://entertainment.inquirer.net/files/2012/08/beyonce-knowles.jpg',
    altText: 'Profielfoto',
  },
};

export const Initials: Story = {
  args: {
    children: <p className="kernteam-avatar__text">BK</p>,
  },
};

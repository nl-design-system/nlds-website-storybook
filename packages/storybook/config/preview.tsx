// import '@nl-design-system-unstable/voorbeeld-design-tokens/src/font.js';
import '@nl-design-system-kernteam/design-tokens/dist/index.css';
import type { Preview } from '@storybook/react';
import { ParameterArgsDecorator } from './ParameterArgsDecorator';

const preview: Preview = {
  decorators: [ParameterArgsDecorator],
  parameters: {
    controls: { expanded: false },
    options: {
      panelPosition: 'right',
      storySort: {
        order: ['Documentatie', 'Template', 'CSS Component', 'React Component'],
      },
    },
    status: {
      statuses: {
        PRODUCTION: {
          background: '#088008',
          color: '#ffffff',
          description:
            'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
        },
        BETA: {
          background: '#3065ee',
          color: '#ffffff',
          description:
            'Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely.',
        },
        ALPHA: {
          background: '#e0bc2e',
          color: '#000000',
          description:
            'Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.',
        },
        'WORK IN PROGRESS': {
          background: '#cc0000',
          color: '#ffffff',
          description:
            'Do not use in production. Does not follow semantic versioning and any published packages are for internal use only.',
        },
      },
    },
  },
};

export default preview;

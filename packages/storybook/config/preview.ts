// import '@nl-design-system-unstable/voorbeeld-design-tokens/src/font.js';
import { defineCustomElements } from '@kernteam/web-components-stencil/loader/index.js';
import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/index.css';
import type { Preview } from '@storybook/react';
import { ParameterArgsDecorator } from './ParameterArgsDecorator';

defineCustomElements();

const preview: Preview = {
  decorators: [ParameterArgsDecorator],
  parameters: {
    controls: { expanded: false },
    options: {
      panelPosition: 'right',
    },
  },
};

export default preview;

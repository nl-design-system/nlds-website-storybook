/* eslint-env node */
// import '@kernteam/design-tokens/dist/index.css';
// import '@kernteam/font/src/index.scss';
import { defineCustomElements } from '@example/web-components-stencil/loader/index.js';
import type { Preview, StoryContext } from '@storybook/react';
import prettierBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';

defineCustomElements();

const preview: Preview = {
  decorators: [
    // Enable `utrecht-document` component as backdrop
    // Enable `utrecht-theme` to configure the design tokens
    // Ensure old html templates will be rendered as react component
    (Story: any, storyContext: StoryContext<any>) => {
      // Hack to make current args for a story available in the transformSource of the docs addon
      storyContext.parameters['args'] = storyContext.args;

      return (
        <div className="kernteam-theme">
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    controls: { expanded: false },
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
    options: {
      panelPosition: 'right',
    },
    // Configure @storybook/addon-docs
    docs: {
      // Show code by default.
      // Stories without concise code snippets can hide the code at Story level.
      source: {
        state: 'open',
      },
      transformSource: (src: string, storyContext: any): string => {
        // Ensure valid HTML in the Preview source
        const render =
          typeof storyContext.component === 'function'
            ? storyContext.component
            : typeof storyContext.component?.render === 'function'
              ? storyContext.component?.render
              : null;

        if (render) {
          return prettier.format(ReactDOMServer.renderToStaticMarkup(render(storyContext.args)), {
            parser: 'babel',
            plugins: [prettierBabel],
          });
        }
        return src;
      },
    },
  },
};

export default preview;

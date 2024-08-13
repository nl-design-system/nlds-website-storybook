import type { Decorator } from '@storybook/react';

export const ParameterArgsDecorator: Decorator = (Story, context) => {
  // Hack to make current args for a story available in the transformSource of the docs addon
  context.parameters['args'] = context.args;

  return (
    <div className="kernteam-theme">
      <Story />
    </div>
  );
};

const minorConfig = require('./.ncurc.minor');

module.exports = {
  ...minorConfig,
  reject: [...minorConfig.reject, '@mdx-js/react', 'storybook', '@storybook/*'],
  target: 'latest',
};

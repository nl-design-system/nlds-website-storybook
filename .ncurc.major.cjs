const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  ...minorConfig,
  reject: [...minorConfig.reject, '@mdx-js/react', 'storybook', '@storybook/*'],
  target: 'latest',
};

module.exports = {
  extends: [
    'eslint-config-arcadia-base',
    'eslint-config-arcadia-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  parser: require.resolve('babel-eslint'),
  rules: {},
};

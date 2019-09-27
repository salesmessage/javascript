module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react-hooks'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true,
      spread: true,
    },
  },
  rules: {
    // Prettier
    'prettier/prettier': 'error',

    // React
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['js', '.jsx'] }],
    'react/require-default-props': 'off',
  },
};

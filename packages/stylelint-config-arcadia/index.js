module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,

    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'responsive', 'variants', 'screen'],
      },
    ],
  },
};

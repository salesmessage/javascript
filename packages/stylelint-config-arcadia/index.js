module.exports = {
  extends: ['stylelint-prettier', 'stylelint-config-standard', 'stylelint-config-rational-order'],
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

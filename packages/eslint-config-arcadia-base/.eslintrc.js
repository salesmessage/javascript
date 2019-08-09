module.exports = {
  // root already extends arcadia-base
  rules: {
    // match upstream because dangling comma conflicts are _the worst_
    'comma-dangle': 'off',
    // far too many disagreements to be useful
    'prettier/prettier': 'off',
  },
};

const prettierConfig = require('..');

test('prettier-config-arcadia', () => {
  expect(prettierConfig).toMatchObject({
    $schema: 'http://json.schemastore.org/prettierrc',
    // only test customized props
    endOfLine: 'lf',
    printWidth: 100,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'es5',
    quoteProps: 'consistent',
  });
});

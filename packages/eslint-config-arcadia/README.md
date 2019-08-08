# eslint-config-arcadia

> Arcadia's ESLint config, following our code conventions

[![npm version](https://img.shields.io/npm/v/eslint-config-arcadia.svg)](https://www.npmjs.com/package/eslint-config-arcadia)
[![CircleCI](https://circleci.com/gh/salesmessage/javascript.svg?style=shield)](https://circleci.com/gh/salesmessage/javascript)

## Usage

To install with all necessary `peerDependencies`, use [install-peerdeps](https://github.com/nathanhleung/install-peerdeps#usage):

```sh
npx install-peerdeps --dev eslint-config-arcadia
```

All exported configs should be added to your [ESlint configuration file](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) `extends`.
For example, in a JSON `.eslintrc`:

```json
{
  "extends": "arcadia"
}
```

### `"extends": "arcadia"`

Lint all the things, including ECMAScript 6+, React, and Prettier.

If you don't need React, use [eslint-config-arcadia-base](https://npmjs.com/eslint-config-arcadia-base).

### `"extends": ["arcadia", "arcadia/jest]`

Jest-specific rules and environment added to the default export.

### `"extends": ["arcadia", "arcadia/mocha]`

Mocha-specific rules and environment added to the default export.

### `prettier` Editor Plugin Integration

Unfortunately, super-useful editor plugins like `prettier-atom` and `prettier-vscode` do not load Prettier settings from ESLint config, which is where we load our Prettier options from. To workaround this, add a `.prettierrc.js` or `prettier.config.js` file to your root with the following content:

```js
module.exports = require('prettier-config-arcadia');
```

## Related

- [Arcadia's Prettier config](https://npmjs.com/prettier-config-arcadia)
- [Arcadia's Javascript code conventions](https://github.com/salesmessage/javascript)

## Development

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests (from the repo root) with `npm test`.

You can make sure this module lints with itself using `npm run lint` (from the repo root).

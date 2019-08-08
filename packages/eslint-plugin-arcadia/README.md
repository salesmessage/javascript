# eslint-plugin-arcadia

> Arcadia's ESLint config bundled into a "zero-conf" plugin

[![npm version](https://img.shields.io/npm/v/eslint-plugin-arcadia.svg)](https://www.npmjs.com/package/eslint-plugin-arcadia)
[![CircleCI](https://circleci.com/gh/salesmessage/javascript.svg?style=shield)](https://circleci.com/gh/salesmessage/javascript)

## Why

We want shareable configs to have as low of an overhead as possible. Users shouldn't have to know exactly what plugins are required by the config, install them and manage their versions manually. This plugin exposes [`eslint-config-arcadia`](https://github.com/salesmessage/javascript/tree/latest/packages/eslint-config-arcadia#readme) for reuse, with plugins automatically installed.

> See [https://github.com/eslint/eslint/issues/3458](https://github.com/eslint/eslint/issues/3458) for further discussion on this topic. Approach inspired by [`eslint-plugin-react-app`](https://github.com/mmazzarolo/eslint-plugin-react-app) and [`eslint-plugin-springload`](https://github.com/springload/eslint-plugin-springload).

## Usage

Install the plugin and its minimal peer dependencies:

```sh
npm i -D eslint prettier eslint-plugin-arcadia
```

Configure ESLint to use this config. For example, in your package.json, this would be:

```json
  "eslintConfig": {
    "extends": "plugin:arcadia/recommended"
  },
```

### Jest

Jest-specific rules and environment added to the default export.

```json
  "eslintConfig": {
    "extends": ["plugin:arcadia/recommended", "plugin:arcadia/jest"]
  },
```

### Mocha

Mocha-specific rules and environment added to the default export.

```json
  "eslintConfig": {
    "extends": ["plugin:arcadia/recommended", "plugin:arcadia/mocha"]
  },
```

### Customizing Rules

You can configure the rules like every other `eslint` plugin.
Just keep in mind that if you want to change a rule of an included plugin (for example, `eslint-plugin-react`) you must prefix the rule with `arcadia/` (necessary to prevent namespace collisions).

For example:

```json
{
  "extends": [
    "plugin:arcadia/recommended"
  ],
  "rules": {
    "arcadia/react/react-in-jsx-scope": ["warn"]
  }
}
```

### `prettier` Editor Plugin Integration

Unfortunately, super-useful editor plugins like `prettier-atom` and `prettier-vscode` do not load Prettier settings from ESLint config, which is where we load our Prettier options from. To workaround this, add a `.prettierrc.js` or `prettier.config.js` file to your root with the following content:

```js
module.exports = require('prettier-config-arcadia');
```

## "Bundled" Plugins

We currently encapsulate the following plugins:

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

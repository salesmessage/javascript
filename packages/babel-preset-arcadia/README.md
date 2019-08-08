# babel-preset-arcadia

> A Babel preset for transpiling JavaScript following our code conventions

[![npm version](https://img.shields.io/npm/v/babel-preset-arcadia.svg)](https://www.npmjs.com/package/babel-preset-arcadia)
[![CircleCI](https://circleci.com/gh/salesmessage/javascript.svg?style=shield)](https://circleci.com/gh/salesmessage/javascript)

Currently contains transforms for all [stage 4](https://tc39.github.io/ecma262/) (ES2018) and [stage 3](https://github.com/tc39/proposals#active-proposals) syntax that is permitted in the [Arcadia Style Guide](https://github.com/salesmessage/javascript). Please note that if usage of a stage 3 proposal is not explicitly mentioned in the Arcadia Style Guide, then it will not be enabled here. Additionally, stage 4 syntax that is excluded is as follows:
  - generators: `regenerator-runtime` is too heavyweight for our use.
  - `SIMD`: this is a performance feature, so is pretty pointless to polyfill/transpile.
  - lifted template literal restrictions: we do not use tagged template literals, nor implement custom DSLs, otherwise we would enable this.

Additionally, we also transpile the following:
  - [async/await](https://www.npmjs.com/package/fast-async)
  - [class properties](https://www.npmjs.com/package/babel-plugin-transform-class-properties)
  - [lodash](https://www.npmjs.com/package/babel-plugin-lodash)
  - [styled-components](https://www.styled-components.com/docs/tooling#babel-plugin)

## Install

```sh
npm install --save-dev babel-preset-arcadia
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["babel-preset-arcadia"]
}
```

### Via CLI

```sh
babel script.js --presets arcadia
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["babel-preset-arcadia"]
});
```

## Targeting Environments

This module uses `@babel/preset-env` to target specific environments.

Please refer to [babel-preset-env#targets](https://babeljs.io/docs/en/babel-preset-env#targets) for a list of available options.

For a list of browsers please see [browserlist](https://github.com/ai/browserslist).

You may override our default list of targets by providing your own `targets` key.

```json
{
  "presets": [["babel-preset-arcadia", {
    "targets": {
      "chrome": 50,
      "explorer": 11,
      "firefox": 45
    }
  }]]
}
```

The following transpiles only for Node v8.

```json
{
  "presets": [["babel-preset-arcadia", {
    "targets": {
      "node": 8
    }
  }]]
}
```

If you wish, you can also inherit our default list of browsers and extend them using `additionalTargets`.

```json
{
  "presets": [["babel-preset-arcadia", {
    "additionalTargets": {
      "chrome": 42,
      "explorer": 8
    }
  }]]
}
```

### Configuring Polyfills

This preset also supports passing additional options directly to `@babel/preset-env`:

- [`useBuiltIns`](https://babeljs.io/docs/en/babel-preset-env#usebuiltins)
- [`corejs`](https://babeljs.io/docs/en/babel-plugin-transform-runtime#corejs)

These options are best suited for applications, not libraries, as they require additional dependencies (like [core-js](https://www.npmjs.com/package/core-js)) that are not recommended for libraries.

For example, the following config would provide all global polyfills necessary for IE11 in an application, based on usage:

```json
{
  "presets": [["babel-preset-arcadia", {
    "useBuiltIns": "usage",
    "corejs": 3
  }]]
}
```

For more examples, please consult the [core-js docs](https://github.com/zloirock/core-js#babelpreset-env).

### Advanced Plugin Exclusions

In some rare cases, it is necessary to explicitly [exclude](https://babeljs.io/docs/en/babel-preset-env#exclude) certain transforms that would otherwise be included by `@babel/preset-env`.

To accomplish this goal, this preset's default exclusions can be extended with the `additionalExcludes` array.

```json
{
  "presets": [["babel-preset-arcadia", {
    "additionalExcludes": [
      "@babel/plugin-transform-classes"
    ]
  }]]
}
```

You should always pass the fully-qualified transform name, not the shorthand.
When `targets.node` is configured no exclusions are allowed, as they are generally not necessary anyway.

## Debugging

You may override our default debug option by providing your own `debug` key.

```json
{
  "presets": [["babel-preset-arcadia", {
    "debug": true
  }]]
}
```

## React Optimizations

By default, this preset will [remove `data-testid` attributes](https://github.com/coderas/babel-plugin-jsx-remove-data-test-id#readme) from JSX elements in non-test builds and [remove `propTypes` definitions](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#readme) (via wrapping) from React components in production builds. To explicitly customize this behavior, either pass `false` (to disable) or a config object.

Disable both optimizations:

```json
{
  "presets": [["babel-preset-arcadia", {
    "removeDataTestId": false,
    "removePropTypes": false
  }]]
}
```

Replace the [attributes targeted by remove-data-test-id](https://github.com/coderas/babel-plugin-jsx-remove-data-test-id#define-custom-attribute-names):

```json
{
  "presets": [["babel-preset-arcadia", {
    "removeDataTestId": {
      "attributes": ["data-selenium-id"]
    }
  }]]
}
```

Change the [`mode` option of remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#mode):

```json
{
  "presets": [["babel-preset-arcadia", {
    "removePropTypes": {
      "mode": "remove",
      "removeImport": true
    }
  }]]
}
```

## Selective Loose Modes

By default, this preset will compile as many modules as possible in loose mode. Normal mode is safer, but adds to bundle size and runtime overhead. We have options to selectively opt out of loose mode for applicable features. These options are:
  - [classes](https://babeljs.io/docs/en/babel-plugin-transform-classes#loose): `looseClasses`
  - [computed properties](https://babeljs.io/docs/en/babel-plugin-transform-computed-properties#loose): `looseComputedProperties`
  - [parameters](https://babeljs.io/docs/en/babel-plugin-transform-parameters#loose): `looseParameters`
  - [template literals](https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose): `looseTemplateLiterals`

For example, disable _all_ loose compilation options:

```json
{
  "presets": [["babel-preset-arcadia", {
    "looseClasses": false,
    "looseComputedProperties": false,
    "looseParameters": false,
    "looseTemplateLiterals": false
  }]]
}
```

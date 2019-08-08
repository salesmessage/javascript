# arcadia-js-shims

> JS language shims used by Arcadia

[![npm version](https://img.shields.io/npm/v/arcadia-js-shims.svg)](https://www.npmjs.com/package/arcadia-js-shims)
[![CircleCI](https://circleci.com/gh/salesmessage/javascript.svg?style=shield)](https://circleci.com/gh/salesmessage/javascript)

Just require/import `arcadia-js-shims`, and the environment will be shimmed.

```js
import 'arcadia-js-shims';
```

## Included shims

  - [es5-shim](https://www.npmjs.com/package/es5-shim)
  - [es5-sham](https://www.npmjs.com/package/es5-shim)
  - [es6-shim](https://www.npmjs.com/package/es6-shim)
  - [Function.prototype.name](https://www.npmjs.com/package/function.prototype.name)
  - [Array.prototype.includes](https://www.npmjs.com/package/array-includes) (ES7/ES2016)
  - [Object.entries](https://www.npmjs.com/package/object.entries) (ES8/ES2017)
  - [Object.values](https://www.npmjs.com/package/object.values) (ES8/ES2017)
  - [String.prototype.padStart](https://www.npmjs.com/package/string.prototype.padstart) (ES8/ES2017)
  - [String.prototype.padEnd](https://www.npmjs.com/package/string.prototype.padend) (ES8/ES2017)
  - [Promise.prototype.finally](https://npmjs.com/package/promise.prototype.finally) (Stage 4, ES2018)
  - [Array.prototype.flat](https://npmjs.com/package/array.prototype.flat) (Stage 3, ES2019 candidate)
  - [Array.prototype.flatMap](https://npmjs.com/package/array.prototype.flatMap) (Stage 3, ES2019 candidate)
  - [Symbol.prototype.description](https://npmjs.com/package/symbol.prototype.description) (Stage 3, ES2019 candidate)
  - [String.prototype.matchAll](https://npmjs.com/package/string.prototype.matchall) (Stage 3, ES2019 candidate)

## Targeting versions

If you do not need to support older browsers, you can pick a subset of ES versions to target. For example, if you don't support pre-ES5 browsers, you can start your shims with ES2015 by requiring/importing the specific target file. This will shim the environment for that version and upward.

```js
import 'arcadia-js-shims/target/es2015';
```

### Included targets

  - `arcadia-js-shims/target/es5` (default)
  - `arcadia-js-shims/target/es2015`
  - `arcadia-js-shims/target/es2016`
  - `arcadia-js-shims/target/es2017`
  - `arcadia-js-shims/target/es2018`
  - `arcadia-js-shims/target/es2019`

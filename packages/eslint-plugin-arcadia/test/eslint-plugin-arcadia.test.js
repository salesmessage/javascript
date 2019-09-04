'use strict';

// ensure up-to-date JSON
require('../lib/render-configs');

const { configs, processors, rules } = require('..');

describe('eslint-plugin-arcadia', () => {
  test('configs', () => {
    expect(configs).toMatchObject({
      jest: {
        overrides: [
          {
            files: [
              '**/*{-,.}test.js',
              '**/*.stories.js',
              '**/__tests__/**/*.js',
              '**/__mocks__/**/*.js',
              '**/test/**/*.js',
            ],
            globals: {},
            plugins: ['arcadia'],
            rules: {
              'arcadia/jest/no-focused-tests': ['error'],
            },
          },
        ],
      },
      mocha: {
        overrides: [
          {
            files: [
              // prettier-ignore
              '**/*-test.js',
              '**/test/**/*.js',
            ],
            globals: {},
            plugins: ['arcadia'],
            rules: {
              'arcadia/mocha/no-exclusive-tests': ['error'],
              'prefer-arrow-callback': ['off'],
              'func-names': ['off'],
            },
          },
        ],
      },
      recommended: {
        parser: expect.stringContaining('babel-eslint'),
        rules: {
          'arcadia/react/jsx-indent': ['off', 2],
          'max-len': ['warn', 100, 4, { ignoreComments: false }],
          'arcadia/import/prefer-default-export': ['error'],
          'arcadia/jsx-a11y/label-has-for': ['off'],
        },
      },
    });

    const importResolverConfig = configs.recommended.settings['import/resolver'];
    const resolverConfigKeys = Object.keys(importResolverConfig);

    expect(resolverConfigKeys).toEqual([
      expect.stringMatching(/eslint-import-resolver-node/),
      'node',
    ]);
    expect(importResolverConfig[resolverConfigKeys[0]]).toStrictEqual({
      extensions: ['.js', '.jsx', '.json'],
    });
    expect(importResolverConfig[resolverConfigKeys[0]]).toStrictEqual(importResolverConfig.node);
  });

  test('processors', () => {
    expect(processors).toMatchObject({
      '.snap': {},
    });
  });

  test('rules', () => {
    expect(rules).toMatchObject({
      'import/prefer-default-export': {
        meta: {},
        create: expect.any(Function),
      },
      'react/sort-prop-types': {
        meta: {},
        create: expect.any(Function),
      },
    });
  });
});

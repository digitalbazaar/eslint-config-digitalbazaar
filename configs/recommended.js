import globals from 'globals';

import base from './base.js';
import jsdoc from './jsdoc.js';
import module from './module.js';

export default [
  ...base,
  ...jsdoc,
  ...module,
  {
    // global ignores
    ignores: [
      'coverage/',
      'dist/',
      'node_modules/'
    ]
  },
  {
    // 'mocha' and 'should' support for 'test'/'tests'
    files: [
      'test/**/*.js',
      'tests/**/*.js'
    ],
    languageOptions: {
      globals: {
        ...globals.mocha,
        should: true
      }
    }
  }
];

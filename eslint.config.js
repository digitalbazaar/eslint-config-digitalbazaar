import digitalbazaar from './index.js';
import digitalbazaarImport from './import.js';
import globals from 'globals';

export default [
  ...digitalbazaar,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
  },
  {
    ...digitalbazaarImport,
    files: ['test/import/*.js']
  }
];

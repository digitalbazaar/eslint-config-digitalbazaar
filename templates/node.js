import digitalbazaar from 'eslint-config-digitalbazaar';
import globals from 'globals';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  ...digitalbazaar
];

import digitalbazaar from 'eslint-config-digitalbazaar';
import digitalbazaarVue from 'eslint-config-digitalbazaar/vue2';
import globals from 'globals';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },
  ...digitalbazaar,
  ...digitalbazaarVue
];

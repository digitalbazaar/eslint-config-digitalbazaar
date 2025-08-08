import digitalbazaar from 'eslint-config-digitalbazaar';
import digitalbazaarVue3 from 'eslint-config-digitalbazaar/vue3';
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
  ...digitalbazaarVue3
];

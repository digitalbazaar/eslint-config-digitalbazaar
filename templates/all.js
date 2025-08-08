import digitalbazaar from 'eslint-config-digitalbazaar';
import digitalbazaarJsdoc from 'eslint-config-digitalbazaar/jsdoc';
import digitalbazaarModule from 'eslint-config-digitalbazaar/module';
import digitalbazaarVue3 from 'eslint-config-digitalbazaar/vue3';

export default [
  ...digitalbazaar,
  ...digitalbazaarJsdoc,
  ...digitalbazaarModule,
  ...digitalbazaarVue3
];

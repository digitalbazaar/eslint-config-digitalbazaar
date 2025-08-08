import pluginVue from 'eslint-plugin-vue';
import vueCommon from './vue-common.js';

export default [
  ...pluginVue.configs['flat/vue2-recommended'],
  ...vueCommon
];

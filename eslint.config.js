import eslintPlugin from 'eslint-plugin-eslint-plugin';
// disabled until eslint-plugin-import supports eslint 10
//import importConfig from './configs/import.js';
import nodeConfig from './configs/node-recommended.js';

export default [
  eslintPlugin.configs.recommended,
  ...nodeConfig
  // disabled until eslint-plugin-import supports eslint 10
  //{
  //  files: ['test/import/*.js'],
  //  ...importConfig
  //}
];

import eslintPlugin from 'eslint-plugin-eslint-plugin';
import importConfig from './configs/import.js';
import nodeConfig from './configs/node-recommended.js';

export default [
  eslintPlugin.configs.recommended,
  ...nodeConfig,
  {
    files: ['test/import/*.js'],
    ...importConfig
  }
];

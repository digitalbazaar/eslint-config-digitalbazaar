import importConfig from './configs/import.js';
import nodeConfig from './configs/node-recommended.js';

export default [
  ...nodeConfig,
  {
    files: ['test/import/*.js'],
    ...importConfig
  }
];

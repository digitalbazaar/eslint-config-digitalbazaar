import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
  //eslintPluginUnicorn.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      unicorn: eslintPluginUnicorn
    },
    rules: {
      'unicorn/prefer-module': 'error'
    }
  }
];

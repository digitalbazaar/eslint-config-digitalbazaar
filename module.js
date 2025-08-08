import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
  //eslintPluginUnicorn.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 2022,
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

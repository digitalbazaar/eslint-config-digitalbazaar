// common for all vue versions
import globals from 'globals';

export default [
  {
    files: ['**/*.vue'],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    rules: {
      'vue/mustache-interpolation-spacing': ['error', 'never'],
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'never'
      }]
    }
  }
];

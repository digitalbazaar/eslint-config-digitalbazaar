module.exports = {
  env: {
    browser: true
  },
  extends: ['plugin:vue/recommended'],
  rules: {
    'vue/mustache-interpolation-spacing': ['error', 'never'],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }]
  }
};

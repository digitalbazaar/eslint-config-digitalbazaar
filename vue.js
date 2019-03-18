module.exports = {
  env: {
    browser: true
  },
  rules: {
    'vue/mustache-interpolation-spacing': 'never',
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }]
  }
};

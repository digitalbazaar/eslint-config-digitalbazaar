// common for all vue versions
module.exports = {
  env: {
    browser: true
  },
  rules: {
    'vue/mustache-interpolation-spacing': ['error', 'never'],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }]
  }
};

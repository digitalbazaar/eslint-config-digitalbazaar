module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'unicorn'
  ],
  rules: {
    'unicorn/prefer-module': 'error'
  }
};

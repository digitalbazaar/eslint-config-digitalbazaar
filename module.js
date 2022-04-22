module.exports = {
  env: {
    es2020: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    'unicorn'
  ],
  rules: {
    'unicorn/prefer-module': 'error'
  }
};

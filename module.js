module.exports = {
  env: {
    es2020: true
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

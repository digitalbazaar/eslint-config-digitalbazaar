module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'only-multiline'],
    'comma-spacing': 'error',
    curly: 'error',
    'eol-last': 'error',
    'key-spacing': ['error', {beforeColon: false, afterColon: true}],
    'keyword-spacing': ['error', {overrides: {
      catch: {after: false},
      for: {after: false},
      if: {after: false},
      switch: {after: false},
      while: {after: false}
    }}],
    indent: ['error', 2, {
      SwitchCase: 1,
      FunctionExpression: {
        parameters: 1
      },
      CallExpression: {arguments: 1}
    }],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', 80],
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-keys': 'error',
    'no-extra-semi': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', {max: 1}],
    'no-return-await': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': ['error', {functions: false, classes: true}],
    'no-var': 'error',
    'object-curly-spacing': 'error',
    'object-shorthand': ['error', 'properties'],
    'operator-linebreak': ['error', 'after'],
    'prefer-const': 'error',
    quotes: ['error', 'single', {allowTemplateLiterals: true}],
    'quote-props': ['error', 'as-needed'],
    semi: ['error', 'always'],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'space-infix-ops': 'error',
    'space-in-parens': ['error', 'never'],
    'valid-typeof': 'error',
    yoda: 'error'
  }
};

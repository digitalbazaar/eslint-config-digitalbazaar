module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['jsdoc'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'only-multiline'],
    'comma-spacing': 'error',
    curly: 'error',
    'eol-last': 'error',
    'jsdoc/check-examples': 1,
    'jsdoc/check-param-names': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/newline-after-description': 1,
    'jsdoc/no-undefined-types': 1,
    'jsdoc/require-description': 1,
    'jsdoc/require-description-complete-sentence': 1,
    'jsdoc/require-example': 1,
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-returns': 1,
    'jsdoc/require-returns-check': 1,
    'jsdoc/require-returns-description': 1,
    'jsdoc/require-returns-type': 1,
    'jsdoc/valid-types': 1,
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
    'no-const-assign': 'error',
    'no-extra-semi': 'error',
    'no-irregular-whitespace': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', {max: 1}],
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
    'space-in-parens': ['error', 'never']
  }
};

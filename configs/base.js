import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

// custom digitalbazaar rules
import catchSpacing from '../rules/catch-spacing.js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      curly: 'error',
      'dot-notation': 'error',
      'no-empty-pattern': ['error', {allowObjectPatternsAsParameters: true}],
      'no-spaced-func': 'error',
      'no-use-before-define': ['error', {functions: false, classes: true}],
      'no-var': 'error',
      'object-shorthand': ['error', 'properties'],
      'one-var': ['error', 'never'],
      'prefer-const': 'error',
      'sort-imports': ['error', {
        allowSeparatedGroups: true,
        ignoreCase: true,
        memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none']
      }],
      yoda: 'error',
      // deprecated in v8.46.0
      'no-return-await': 'error'
    }
  },
  {
    // stylistic rules
    // https://eslint.style/rules
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/block-spacing': ['error', 'never'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/comma-spacing': 'error',
      '@stylistic/eol-last': 'error',
      '@stylistic/key-spacing': ['error', {
        beforeColon: false,
        afterColon: true
      }],
      '@stylistic/keyword-spacing': ['error', {overrides: {
        catch: {after: false},
        for: {after: false},
        if: {after: false},
        switch: {after: false},
        while: {after: false}
      }}],
      '@stylistic/indent': ['error', 2, {
        SwitchCase: 1,
        FunctionExpression: {
          parameters: 1
        },
        CallExpression: {arguments: 1}
      }],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/max-len': ['error', {
        code: 80,
        ignorePattern: '\\* SPDX-License-Identifier: ',
        ignoreUrls: true
        //ignoreRegExpLiterals: true
      }],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', {max: 1}],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/object-curly-spacing': 'error',
      '@stylistic/operator-linebreak': ['error', 'after'],
      '@stylistic/quotes': ['error', 'single', {
        allowTemplateLiterals: 'always'
      }],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/semi-spacing': 'error',
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
        catch: 'never'
      }],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/space-in-parens': ['error', 'never']
    }
  },
  {
    // special handling of catch spacing
    plugins: {
      '@digitalbazaar': {
        rules: {
          'catch-spacing': catchSpacing
        }
      }
    },
    rules: {
      // FIXME: add more tests to check know if any of this is needed
      //'@stylistic/keyword-spacing': [
      //  'error',
      //  {
      //    before: true,
      //    after: true,
      //    overrides: {
      //      //catch: {after: null}
      //    }
      //  }
      //],
      '@digitalbazaar/catch-spacing': 'error'
    }
  }
];

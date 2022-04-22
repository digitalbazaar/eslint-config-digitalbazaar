module.exports = {
  plugins: ['jsdoc'],
  rules: {
    // Enable once eslint 8 related issue is fixed:
    // https://github.com/eslint/eslint/issues/14745
    //'jsdoc/check-examples': 1,
    'jsdoc/check-param-names': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/newline-after-description': 1,
    'jsdoc/no-undefined-types': 1,
    'jsdoc/require-description': 0,
    'jsdoc/require-description-complete-sentence': 1,
    'jsdoc/require-example': 0,
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-returns': 1,
    'jsdoc/require-returns-check': 0,
    'jsdoc/require-returns-description': 1,
    'jsdoc/require-returns-type': 1,
    'jsdoc/valid-types': 1,
  }
};

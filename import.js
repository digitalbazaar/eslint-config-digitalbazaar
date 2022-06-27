module.exports = {
  env: {
    es2020: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    // https://github.com/import-js/eslint-plugin-import
    'import'
  ],
  rules: {
    // if the file path for an import can't be resolved locally error
    // FIXME: use of webpack aliases might cause issues with this
    'import/no-unresolved': 'error',
    // Verifies that all named imports are part of the set of named
    // exports in the imported module.
    'import/named': 'error',
    // If a default import is requested, this rule will report if
    // there is no default export in the imported module.
    'import/default': 'error',
    // throws if a namespace like `import * as all` is used and
    // `all.foo` is not exported
    'import/namespace': 'error',
    // throws if a module imports itself
    'import/no-self-import': 'error',
    // Reports funny business with exports, like repeated exports
    // of names or defaults.
    'import/export': 'error',
    // warns if an imported member if marked @deprecated
    'import/no-deprecated': 'error',
    // warns if a dep is not in the package.json
    'import/no-extraneous-dependencies': 'error',
    // disallows exporting members with let & var
    // FIXME: there could be edge cases where we do
    // need mutable exports
    'import/no-mutable-exports': 'error',
    // throw if you import something more than once in a file/module
    'import/no-duplicates': 'error'
  }
};

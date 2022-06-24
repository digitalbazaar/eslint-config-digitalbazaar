## eslint-config-digitalbazaar

This package provides eslint rules used by Digital Bazaar as a set of extendable shared configs.

There are 4 rule sets:
1. `eslint-config-digitalbazaar`: Base rules for both node and the browser.
2. `eslint-config-digitalbazaar/jsdoc`: Rules for JSDoc for both node and the browser.
3. `eslint-config-digitalbazaar/module`: Rules for modules for both node and the browser.
4. `eslint-config-digitalbazaar/vue`: Rules for Vue projects and browser only.

## Installation

If you do not have eslint installed:
```
npm i -D eslint
npm i -D eslint-config-digitalbazaar
```

To start an eslint config file (choose .eslintrc.cjs):
```
npx eslint --init
```
or rename a template from the templates dir
```
cp node_modules/eslint-config-digitalbazaar/templates/node.js ./.eslintrc.cjs
```

## Usage

All rules can be accessed via the shorthand `digitalbazaar`
or using the full module name `eslint-config-digitalbazaar`.

Eslint's documentation on [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs) can be found here.

Example .eslintrc.cjs root setup:
```js
module.exports = {
  root: true,
  extends: ['eslint-config-digitalbazaar'] // using full module name
}
```

### JSDoc

To use the JSDoc rules you will need to install [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc):
```
npm i -D eslint-plugin-jsdoc
```

Example .eslintrc.cjs JSDoc setup:
```js
module.exports = {
  extends: ['digitalbazaar/jsdoc'] // only the JSDoc rules and any rules in parent dirs
}
```

### Modules

To use ES module code rather than CommonJS, you will need to install [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn):
```
npm i -D eslint-plugin-unicorn
```

Example .eslintrc.cjs ESM setup:
```js
module.exports = {
  extends: ['digitalbazaar/module'] // only the module rules and any rules in parent dirs
}
```

To use the es6 module import rules you will need to install [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import):
```
npm i -D eslint-plugin-import
```
Example .eslintrc.cjs ESM setup:
```js
module.exports = {
  extends: ['digitalbazaar/import'] // only the import rules and any rules in parent dirs
}
```



### Vue

To use the Vue rules you will need to install [`eslint-plugin-vue`](https://eslint.vuejs.org/):
```
npm i -D eslint-plugin-vue
```

Example .eslintrc.cjs Vue setup:
```js
module.exports = {
  extends: ['digitalbazaar/vue'] // only the vue rules and any rules in parent dirs
}
```

### Composition

The rules do not depend on each other and are composable:
```js
module.exports = {
  extends: [
    'digitalbazaar',
    'digitalbazaar/jsdoc',
    'digitalbazaar/module'
    'digitalbazaar/vue'
  ] // all 4 rule sets in one file using shorthand.
}
```

The rules can also be used together via [cascade configuration](https://eslint.org/docs/user-guide/configuring).

## Other Rules

Other rules that are not included above but can be useful:

### `unicorn/prefer-node-protocol`

Use `node:module` style for Node.js modules.

See [`unicorn/prefer-node-protocol`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md).

Requires:
```
npm i -D eslint-plugin-unicorn
```

Rules:
```js
  rules: {
    'unicorn/prefer-node-protocol': 'error'
  }
```

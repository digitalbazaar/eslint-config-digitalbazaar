## eslint-config-digitalbazaar

This package provides eslint rules used by Digital Bazaar as a set of extendable shared configs.

There are 6 rule sets:
1. `eslint-config-digitalbazaar`: Base rules for both node and the browser.
2. `eslint-config-digitalbazaar/import`: Rules for es6 imports in the browser and node.
3. `eslint-config-digitalbazaar/jsdoc`: Rules for JSDoc for both node and the browser.
4. `eslint-config-digitalbazaar/module`: Rules for modules for both node and the browser.
5. `eslint-config-digitalbazaar/vue`: Rules for Vue 2 projects and browser only.
6. `eslint-config-digitalbazaar/vue3`: Rules for Vue 3 projects and browser only.


## Installation

If you do not have eslint installed:
```
npm i -D eslint
npm i -D eslint-config-digitalbazaar
```

To start an eslint config file:
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
  // using full module name
  extends: ['eslint-config-digitalbazaar']
}
```

### Imports

To use the import rules you need to install [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import):

```
npm i -D eslint-plugin-import
```

Example .eslintrc.cjs import setup:
```js
module.exports = {
  extends: ['digitalbazaar/import']
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
  // only the JSDoc rules and any rules in parent dirs
  extends: ['digitalbazaar/jsdoc']
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
  // only the module rules and any rules in parent dirs
  extends: ['digitalbazaar/module']
}
```

### Vue 2

To use the Vue 2 rules you will need to install [`eslint-plugin-vue`](https://eslint.vuejs.org/):
```
npm i -D eslint-plugin-vue
```

Example .eslintrc.cjs Vue setup:
```js
module.exports = {
  // only the vue rules and any rules in parent dirs
  extends: ['digitalbazaar/vue']
}
```

For command line use you may need to [explicitly enable linting `.vue`
files](https://eslint.vuejs.org/user-guide/#running-eslint-from-the-command-line).

### Vue 3

To use the Vue 3 rules you will need to install [`eslint-plugin-vue`](https://eslint.vuejs.org/):
```
npm i -D eslint-plugin-vue
```

Example .eslintrc.cjs Vue setup:
```js
module.exports = {
  // only the vue3 rules and any rules in parent dirs
  extends: ['digitalbazaar/vue3']
}
```

For command line use you may need to [explicitly enable linting `.vue`
files](https://eslint.vuejs.org/user-guide/#running-eslint-from-the-command-line).

### Composition

The rules do not depend on each other and are composable:
```js
module.exports = {
  extends: [
    'digitalbazaar',
    'digitalbazaar/jsdoc',
    'digitalbazaar/module'
    'digitalbazaar/vue3'
  ] // 4 rule sets in one file using shorthand.
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

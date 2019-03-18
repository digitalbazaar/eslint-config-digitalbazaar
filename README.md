## eslint-config-digitalbazaar

This package provides eslint rules used by Digital Bazaar as a set of extendable shared configs.

There are 3 rule sets:
1. eslint-config-digitalbazaar -  Base rules for both node and the browser.
2. eslint-config-digitalbazaar/vue -  Rules for Vue projects and browser only.
3. eslint-config-digitalbazaar/jsdoc -  Rules for JSDoc for both node and the browser.

## Installation

If you do not have eslint installed:
```
npm i -D eslint
npm i -D eslint-config-digitalbazaar
```

To start an eslint config file (choose .eslintrc.js):
```
npx eslint --init
```
or rename a template from the templates dir
```
cp node_modules/eslint-config-digitalbazaar/templates/node.js ./.eslintrc.js
```

## Usage

All rules can be accessed via the shorthand `digitalbazaar`
or using the full module name `eslint-config-digitalbazaar`.

Eslint's documentation on [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs) can be found here.

Example .eslintrc.js root setup:
```js
module.exports = {
  root: true,
  extends: ['eslint-config-digitalbazaar'] // using full module name
}
```

To use the Vue rules you will need to install the vue-eslint-plugin
```
npm i -D eslint-plugin-vue
```

Example .eslintrc.js Vue setup:
```js
module.exports = {
  extends: ['digitalbazaar/vue'] // only the vue rules and any rules in parent dirs
}
```

To use the JSDoc rules you will need to install the eslint-plugin-jsdoc
```
npm i -D eslint-plugin-jsdoc
```

Example .eslintrc.js JSDoc setup:
```js
module.exports = {
  extends: ['digitalbazaar/jsdoc'] // only the JSDoc rules and any rules in parent dirs
}
```

The rules do not depend on each other and are composable:
```js
module.exports = {
  extends: [
    'digitalbazaar',
    'digitalbazaar/vue',
    'digitalbazaar/jsdoc'
  ] // all 3 rule sets in one file using shorthand.
}
```

The rules can also be used together via [cascade configuration](https://eslint.org/docs/user-guide/configuring).

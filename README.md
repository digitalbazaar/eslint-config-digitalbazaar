## eslint-config-digitalbazaar

This package provides Digital Bazaar's eslint rules as a set of extendable shared configs.

We have 3 rule sets currently:
1. eslint-config-digitalbazaar - our base rules for both node and the browser.
2. eslint-config-digitalbazaar/vue - our rules for vue projects and browser only.
3. eslint-config-digitalbazaar/jsdoc - our rules for jsdoc for both node and the browser.

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
We export multiple config files that can be used to extend your rules.

All rules can accessed via their shorthand: `digitalbazaar`
however we recommend using the full path `eslint-config-digitalbazaar`.

Eslint's documentation on [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs) can be found here.

Example .eslintrc.js root setup:
```js
module.exports = {
  root: true,
  extends: ['eslint-config-digitalbazaar']
}
```

To use the vue rules you will need to install the vue-eslint-plugin
```
npm i -D eslint-plugin-vue
```

Example .eslintrc.js Vue setup:
```js
module.exports = {
  extends: ['eslint-config-digitalbazaar/vue'] // only the vue rules and any rules in parent dirs
}
```

To use the jsdoc rules you will need to install the eslint-plugin-jsdoc
```
npm i -D eslint-plugin-jsdoc
```

Example .eslintrc.js JSDoc setup:
```js
module.exports = {
  extends: ['eslint-config-digitalbazaar/jsdoc'] // only the jsdoc rules and any rules in parent dirs
}
```

Our rules do not depend on each other so they are composable:
```js
module.exports = {
  extends: ['eslint-config-digitalbazaar', 'eslint-config-digitalbazaar/vue', 'eslint-config-digitalbazaar/jsdoc'] // all 3 rule sets in one file
}
```

They can also be used together via [cascade configuration](https://eslint.org/docs/user-guide/configuring).
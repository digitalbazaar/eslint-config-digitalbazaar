## eslint-config-digitalbazaar

This package provides eslint rules used by Digital Bazaar as a set of extendable shared configs.

There are various core rule sets:
- `eslint-config-digitalbazaar`: Base rules for both node and browser code.
- `eslint-config-digitalbazaar/import`: Rules for es6 imports in the browser and node code.
- `eslint-config-digitalbazaar/jsdoc`: Rules for JSDoc for both node and browser code.
- `eslint-config-digitalbazaar/module`: Rules for modules for both node and browser code.
- `eslint-config-digitalbazaar/vue2`: Rules for Vue 2 code.
- `eslint-config-digitalbazaar/vue3`: Rules for Vue 3 code.

For common use cases, there are recommended configs, that load the core rules:
- `eslint-config-digitalbazaar/browser-recommended`: Recommended rules for projects targeting web browsers.
- `eslint-config-digitalbazaar/node-recommended`: Recommended rules for projects targeting node.
- `eslint-config-digitalbazaar/recommended`: Common recommended rules.
- `eslint-config-digitalbazaar/universal-recommended`: Recommended rules for projects targeting node and web browsers.
- `eslint-config-digitalbazaar/vue2-recommended`: Recommended rules for projects targeting Vue 2.
- `eslint-config-digitalbazaar/vue3-recommended`: Recommended rules for projects targeting Vue 3.

## Installation

Requires:
- eslint v9

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
cp node_modules/eslint-config-digitalbazaar/templates/node-recommended.js ./eslint.config.js
```

## Usage

Config files can use the simple array syntax or the `defineConfig` syntax
(see [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs)).

Example `eslint.config.js` root setup:
```js
import config from 'eslint-config-digitalbazaar/recommended'

export default [
  ...config
];
```

Recommended configs (listed above) exist for common use cases. They may be
sufficient on their own when using the opinionated code and file style used by
Digital Bazaar for specific types of pacakges. However, they can also be mixed
and matched and modified as needed. Note that currently required plugin
dependencies must be manually installed when using recommended configs.

### Imports

To use the `import` plugin rules you need to install
[`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import):

```
npm i -D eslint-plugin-import
```

Example `eslint.config.js` import setup:
```js
import config from 'eslint-config-digitalbazaar/recommended'
import importConfig from 'eslint-config-digitalbazaar/import'

export default [
  ...config,
  ...importConfig
];
```

### JSDoc

When using the recommended configs, or to use the JSDoc rules standalone, you
need to install
[`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc):

```
npm i -D eslint-plugin-jsdoc
```

Example `eslint.config.js` JSDoc setup:
```js
import config from 'eslint-config-digitalbazaar'
import jsdocConfig from 'eslint-config-digitalbazaar/jsdoc'

export default [
  ...config,
  ...jsdocConfig
];
```

### Modules

When using the recommended configs, or to use the ES module rules standalone,
you need to install
[`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn):
```
npm i -D eslint-plugin-unicorn
```

Example `eslint.config.js` ESM setup:
```js
import config from 'eslint-config-digitalbazaar'
import moduleConfig from 'eslint-config-digitalbazaar/module'

export default [
  ...config,
  ...moduleConfig
];
```

### Vue 2

To use the Vue 2 rules you will need to install [`eslint-plugin-vue`](https://eslint.vuejs.org/):
```
npm i -D eslint-plugin-vue
```

Example `eslint.config.js` Vue setup:
```js
import config from 'eslint-config-digitalbazaar'
import vue2Config from 'eslint-config-digitalbazaar/vue2'

export default [
  ...config,
  ...vue2Config
];
```

For command line use you may need to [explicitly enable linting `.vue`
files](https://eslint.vuejs.org/user-guide/#running-eslint-from-the-command-line).

### Vue 3

To use the Vue 3 rules you will need to install [`eslint-plugin-vue`](https://eslint.vuejs.org/):
```
npm i -D eslint-plugin-vue
```

Example `eslint.config.js` Vue setup:
```js
import config from 'eslint-config-myconfig'
import vue3Config from 'eslint-config-digitalbazaar/vue3'

export default [
  ...config,
  ...vue3Config
];
```

For command line use you may need to [explicitly enable linting `.vue`
files](https://eslint.vuejs.org/user-guide/#running-eslint-from-the-command-line).

### Composition

The core rules do not depend on each other and are composable:
```js
import config from 'eslint-config-digitalbazaar'
import jsdocConfig from 'eslint-config-digitalbazaar/jsdoc'
import vue3Config from 'eslint-config-digitalbazaar/vue3'

export default [
  ...config,
  ...jsdoconfig
  ...vue3Config
];
```

## Other Rules

Other rules that are not included above but can be useful:

### `unicorn/prefer-node-protocol`

- Use `node:module` style for Node.js modules.
- This is included in the node related recommended configs.

See [`unicorn/prefer-node-protocol`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md).

Requires:
```
npm i -D eslint-plugin-unicorn
```

Rules:
```js
import config from 'eslint-config-digitalbazaar'

export default [
  ...config,
  {
    rules: {
      'unicorn/prefer-node-protocol': 'error'
    }
  }
];
```

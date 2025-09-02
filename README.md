# Digital Bazaar ESLint Configs _(@digitalbazaar/eslint-config)_

This package provides eslint rules used by Digital Bazaar as a set of extendable shared configs.

There are various core rule sets:
- `@digitalbazaar/eslint-config`: Base rules for both node and browser code.
- `@digitalbazaar/eslint-config/import`: Rules for es6 imports in the browser and node code.
- `@digitalbazaar/eslint-config/jsdoc`: Rules for JSDoc for both node and browser code.
- `@digitalbazaar/eslint-config/module`: Rules for modules for both node and browser code.
- `@digitalbazaar/eslint-config/vue3`: Rules for Vue 3 code.

For common use cases, there are recommended configs, that load the core rules:
- `@digitalbazaar/eslint-config/browser-recommended`: Recommended rules for projects targeting web browsers.
- `@digitalbazaar/eslint-config/node-recommended`: Recommended rules for projects targeting node.
- `@digitalbazaar/eslint-config/recommended`: Common recommended rules.
- `@digitalbazaar/eslint-config/universal-recommended`: Recommended rules for projects targeting node and web browsers.
- `@digitalbazaar/eslint-config/vue3-recommended`: Recommended rules for projects targeting Vue 3.

## Installation

Requires:
- eslint v9

If you do not have eslint installed:
```sh
npm i -D eslint
npm i -D @digitalbazaar/eslint-config
```

To start an eslint config file:
```sh
npx eslint --init
```
or rename a template from the templates dir
```sh
cp node_modules/@digitalbazaar/eslint-config/templates/node-recommended.js ./eslint.config.js
```

### Dependencies

**NOTE**: Currently the core and recommended configs may use dependencies that
need to be installed in a project **manually**. This is to avoid requiring
dependencies in this package. A future version may provide alternative packages
with appropriate dependencies.

Dependencies for jsdoc checks:
```sh
npm i -D eslint-plugin-jsdoc
```

Dependencies for module and node checks:
```sh
npm i -D eslint-plugin-unicorn
```

Dependencies for vue checks:
```sh
npm i -D eslint-plugin-vue
```

Dependencies for vue checks when using `legacy-peer-deps=true`:
```sh
npm i -D vue-eslint-parser
```

Most recommended configs use the jsdoc and module checks and dependencies.

## Usage

Config files can use the simple array syntax or the `defineConfig` syntax
(see [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs)).

Example `eslint.config.js` root setup:
```js
import config from '@digitalbazaar/eslint-config/recommended'

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

```sh
npm i -D eslint-plugin-import
```

Example `eslint.config.js` import setup:
```js
import config from '@digitalbazaar/eslint-config/recommended'
import importConfig from '@digitalbazaar/eslint-config/import'

export default [
  ...config,
  ...importConfig
];
```

### JSDoc

When using the recommended configs, or to use the JSDoc rules standalone, you
need to install
[`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc):

```sh
npm i -D eslint-plugin-jsdoc
```

Example `eslint.config.js` JSDoc setup:
```js
import config from '@digitalbazaar/eslint-config'
import jsdocConfig from '@digitalbazaar/eslint-config/jsdoc'

export default [
  ...config,
  ...jsdocConfig
];
```

### Modules

When using the recommended configs, or to use the ES module rules standalone,
you need to install
[`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn):
```sh
npm i -D eslint-plugin-unicorn
```

Example `eslint.config.js` ESM setup:
```js
import config from '@digitalbazaar/eslint-config'
import moduleConfig from '@digitalbazaar/eslint-config/module'

export default [
  ...config,
  ...moduleConfig
];
```

### Vue 3

To use the Vue 3 rules you will need to install [`eslint-plugin-vue`](https://eslint.vuejs.org/):
```sh
npm i -D eslint-plugin-vue
```

Example `eslint.config.js` Vue setup:
```js
import config from '@digitalbazaar/eslint-config'
import vue3Config from '@digitalbazaar/eslint-config/vue3'

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
import config from '@digitalbazaar/eslint-config'
import jsdocConfig from '@digitalbazaar/eslint-config/jsdoc'
import vue3Config from '@digitalbazaar/eslint-config/vue3'

export default [
  ...config,
  ...jsdoconfig,
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
```sh
npm i -D eslint-plugin-unicorn
```

Rules:
```js
import config from '@digitalbazaar/eslint-config'

export default [
  ...config,
  {
    rules: {
      'unicorn/prefer-node-protocol': 'error'
    }
  }
];
```

## Commercial Support

Commercial support for this package is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

[New BSD License (3-clause)](LICENSE) (c) Digital Bazaar, Inc.

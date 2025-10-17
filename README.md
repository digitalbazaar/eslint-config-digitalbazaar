# Digital Bazaar ESLint Configs _(@digitalbazaar/eslint-config)_

This package provides eslint rules used by Digital Bazaar as a set of
extendable shared configs.

There are various core rule sets:
- `@digitalbazaar/eslint-config`: Base rules for both node and browser code.
- `@digitalbazaar/eslint-config/import`: Rules for es6 imports in the browser
  and node code.
- `@digitalbazaar/eslint-config/jsdoc`: Rules for JSDoc for both node and
  browser code.
- `@digitalbazaar/eslint-config/module`: Rules for modules for both node and
  browser code.
- `@digitalbazaar/eslint-config/vue3`: Rules for Vue 3 code.

For common use cases, there are recommended configs, that load the core rules:
- `@digitalbazaar/eslint-config/browser-recommended`: Recommended rules for
  projects targeting web browsers.
- `@digitalbazaar/eslint-config/node-recommended`: Recommended rules for
  projects targeting node.
- `@digitalbazaar/eslint-config/recommended`: Common recommended rules.
- `@digitalbazaar/eslint-config/universal-recommended`: Recommended rules for
  projects targeting node and web browsers.
- `@digitalbazaar/eslint-config/vue3-recommended`: Recommended rules for
  projects targeting Vue 3.

## Installation

Requires:
- eslint v9

```sh
npm i -D eslint@9
npm i -D @digitalbazaar/eslint-config
```

To start an eslint config file:
```sh
npx eslint --init
```
Or rename a template from the `examples/` directory:
```sh
cp node_modules/@digitalbazaar/eslint-config/examples/node-recommended.js ./eslint.config.js
```

### Dependencies

**NOTE**: The core and recommended configs use dependencies that are
automatically installed. Depending on the configs you use, there may be extra
plugin dependencies installed that are not needed. This adds some development
bloat but simplifies usage and dependency management. A future version may
provide alternative slimmer packages with appropriate dependencies.

Notable dependencies that are always installed:
- [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)
- [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [`eslint-plugin-vue`](https://eslint.vuejs.org/):
- `vue-eslint-parser` (peer dependency of vue plugin)

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

Recommended configs (listed earlier) exist for common use cases. They may be
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

Example `eslint.config.js` to explicitly use the JSDoc rules:
```js
import config from '@digitalbazaar/eslint-config'
import jsdocConfig from '@digitalbazaar/eslint-config/jsdoc'

export default [
  ...config,
  ...jsdocConfig
];
```

### Modules

Example `eslint.config.js` to explicitly use ES module rules:
```js
import config from '@digitalbazaar/eslint-config'
import moduleConfig from '@digitalbazaar/eslint-config/module'

export default [
  ...config,
  ...moduleConfig
];
```

### Vue 3

Example `eslint.config.js` to explicitly use Vue 3 rules:
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

Other rules that can be useful:

### `unicorn/prefer-node-protocol`

- Use `node:module` style for Node.js modules.
- This is included in the node related recommended configs.

See [`unicorn/prefer-node-protocol`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md).

Example `eslint.config.js`:
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

[BSD-3-Clause](LICENSE) Copyright 2025 Digital Bazaar, Inc.

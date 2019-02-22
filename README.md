## eslint-config-digitalbazaar

This package provides Digital Bazaar's .eslintrc.js as an extensible shared config.


## Usage
We only export one config that can be used to extend your root .eslintrc.js


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

Instructions:
- [ ] inside your .eslintrc.js add "eslint-config-digitalbazaar" to your extends array
- [ ] then add envs node, browser, or mocha to the relevant dirs

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
  extends: ['eslint-config-digitalbazaar/vue']
}
```

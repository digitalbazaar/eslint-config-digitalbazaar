## eslint-config-digitalbazaar

This package provides Digital Bazaar's .eslintrc.js as an extensible shared config.


## usage
We only export one config that can be used to extend your root .eslintrc.js


## installation

if you do not have eslint installed
```
npm i -D eslint
npm i -D eslint-config-digitalbazaar
```

to start an eslint config file (choose .eslintrc.js):
```
npx eslint --init
```

instructions:
- [ ] inside your .eslintrc.js add "eslint-config-digitalbazaar" to your extends array
- [ ] then add envs node, browser, or mocha to the relevant dirs

Example .eslintrc.js root setup
```
module.exports = {
  root: true,
  extends: ["eslint-config-digitalbazaar"]
}
```

To use the vue rules you will need to install the vue-eslint-plugin
```
npm i -D eslint-plugin-vie
```
Example .eslintrc.js Vue setup

```
module.exports = {
  root: true,
  extends: ["eslint-config-digitalbazaar/vue"]
}
```


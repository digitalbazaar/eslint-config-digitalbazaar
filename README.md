## eslint-config-digitalbazaar

This package provides Digital Bazaar's .eslintrc.js as an extensible shared config.


## usage
We only export one config that can be used to extend your root .eslintrc.js


## installation

if you do not have eslint installed
```
npm i -D eslint
npm i -D digitalbazaar/eslint-config-digitalbazaar#dev
```

to start a config (choose .eslintrc.js):
```
npx eslint --init
```

currently:
- [ ] inside your .eslintrc.js add "eslint-config-digitalbazaar" to your extends array
- [ ] then add envs node, browser, or mocha to the relevant dirs

Example .eslintrc.js root setup
```
module.exports = {
  root: true,
  extends: ["eslint:recommended", "eslint-config-digitalbazaar"]
}
```

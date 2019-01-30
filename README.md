## eslint-config-digitalbazaar
---
This package provides Digital Bazaar's .eslintrc.js as an extensible shared config.

---
## usage
We only export one config that can be used to extend your root .eslintrc.js

---

## installation
currently:
- [ ] add "eslint-config-digitalbazaar": "https://github.com/digitalbazaar/eslint-config-digitalbazaar#dev" to your package.json file
- [ ] npx eslint --init (if you do not have eslint configured yet and it is already installed) go with .eslintrc.js
- [ ] inside your .eslintrc.js add "./node_modules/eslint-config-digitalbazaar" to your extends array
- [ ] then add envs node, browser, or mocha to the relevant dirs

Example .eslintrc.js root setup
```
module.exports = {
  root: true,
  extends: ["eslint:recommended", "./node_modules/eslint-config-digitalbazaar"]
}
```
## eslint-config-digitalbazaar
---
This package provides Digital Bazaar's .eslintrc.js as an extensible shared config.

---
## usage
We only export one config that can be used to extend your root .eslintrc.js

---

## installation
currently:
- [ ] npm i --save-dev digitalbazaar/eslint-config-digitalbazaar#dev
- [ ] npx eslint --init (if you do not have eslint configured yet and it is already installed) go with .eslintrc.js
- [ ] inside your .eslintrc.js add "eslint-config-digitalbazaar" to your extends array
- [ ] then add envs node, browser, or mocha to the relevant dirs

Example .eslintrc.js root setup
```
module.exports = {
  root: true,
  extends: ["eslint:recommended", "eslint-config-digitalbazaar"]
}
```
module.exports = {
  "env": {
    "browser": true,
  },
  "extends": ["./index.js", "plugin:vue/recommended"],
  "rules": {
    "vue/mustache-interpolation-spacing": "never",
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }]
  }
};

module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2018
  },
  // Allow Node style require and other node-based functions
  env: {
    node: true,
    browser: true,
    commonjs: true,
    jest: true,
    es6: true
  },
  extends: [
    // add more generic rulesets here, such as:
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:vue-a11y/recommended"
  ],
  plugins: [
    "vue"
  ],
  ignorePatterns: ["dist/", "node_modules/", "*.json"],
  rules: {
    // Rules to ignore
    "vue/require-prop-types": "off",
    "no-use-before-define": "off", // Vuepress has hidden logic
    "no-case-declarations": "off",
    "no-unused-vars": "off",
    "no-console": "off",
    "no-empty": "off",
    "no-prototype-builtins": "off",
    "guard-for-in": "off",
    // Rules to warn
    indent: ["warn", 2, { SwitchCase: 1 }],
    // Rules to error
    curly: "error",
    "semi-spacing": "error",
    "no-unneeded-ternary": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-multi-spaces": "error",
    "no-alert": "error",
    "no-eq-null": "error",
    "no-eval": "error"
  }
};

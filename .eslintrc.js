module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: {
      ts: "@typescript-eslint/parser",
    }
  },
  env: {
    node: true,
    browser: true,
    commonjs: true,
    jest: true,
    es6: true,
  },
  extends: ['plugin:vue/vue3-recommended'],
  ignorePatterns: ['dist/', 'node_modules/', '*.json', '.temp/'],
  rules: {
    // Rules to ignore
    'vue/no-setup-props-destructure': 'off',
    'vue/multi-word-component-names': 'off',
    'no-case-declarations': 'off',
    'no-console': 'off',
    'no-control-regex': 'off',
    'no-empty': 'off',
    'no-eq-null': 'off',
    'no-prototype-builtins': 'off',
    'no-useless-escape': 'off',
    'no-unused-vars': 'off',
    'guard-for-in': 'off',
    // Rules to warn
    indent: ['warn', 2, { SwitchCase: 1 }],
    // Rules to error
    curly: 'error',
    'semi-spacing': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-multi-spaces': 'error',
    'no-alert': 'error',
    'no-eval': 'error',
  },
};

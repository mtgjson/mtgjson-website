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
    'no-use-before-define': 'off', // Vuepress has hidden logic
    'no-case-declarations': 'off',
    'no-useless-escape': 'off',
    'no-control-regex': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-empty': 'off',
    'no-prototype-builtins': 'off',
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
    'no-eq-null': 'error',
    'no-eval': 'error',
  },
};

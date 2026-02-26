import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: ['**/dist/', '**/node_modules/', '**/*.json', '**/.temp/', '**/cache/'],
  },

  js.configs.recommended,

  ...pluginVue.configs['flat/recommended'],

  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
    },
  },

  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        ...globals.jest,
        ...globals.es2015,
      },
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      // Rules to ignore
      'vue/no-setup-props-reactivity-loss': 'off',
      'vue/multi-word-component-names': 'off',
      'no-case-declarations': 'off',
      'no-console': 'off',
      'no-control-regex': 'off',
      'no-empty': 'off',
      'no-eq-null': 'off',
      'no-prototype-builtins': 'off',
      'no-useless-escape': 'off',
      'no-unused-vars': 'off',
      'no-useless-assignment': 'off',
      'no-undef': 'off',
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
  },
);

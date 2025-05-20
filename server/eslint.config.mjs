import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['node_modules/', 'dist/'],
  },
  {
    files: ['**/*.ts'],
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    settings: {
      prettier: {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        tabWidth: 2,
        printWidth: 120,
      },
    },
  },
  {
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      eqeqeq: ['error', 'always'],
      semi: ['error', 'always'],
      curly: ['error', 'all'],
      'comma-dangle': ['error', 'always-multiline'],
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'no-template-curly-in-string': 'error',
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          tabWidth: 2,
          printWidth: 120,
        },
      ],
    },
  },
];

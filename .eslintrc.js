module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'prettier',
    "next",
    "next/core-web-vitals"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'jsx-a11y',
    'import'
  ],
  rules: {
    'ident': off,
    "react/react-in-jsx-scope": off,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'no-nested-ternary': off,
    'react-hooks/rules-of-hooks': error,
    '@typescript-eslint/no-empty-function': ["warn"],
    "allowElseIf": false,
    "no-var": true
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};

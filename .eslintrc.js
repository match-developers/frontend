module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    'plugin:react/recommended',
  ],
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off'
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
};
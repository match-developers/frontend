module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['plugin:react/recommended', '@react-native'],
  plugins: ['react'],
  rules: {
    // 추가적인 ESLint 규칙 설정
  },
};

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: require('@babel/eslint-parser'), // require로 parser 불러오기
      parserOptions: {
        requireConfigFile: false
      }
    },
    plugins: {
      react: require('eslint-plugin-react')
    },
    rules: {
      'react/prop-types': 'off'
    }
  }
];

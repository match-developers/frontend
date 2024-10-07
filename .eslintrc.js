module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true // JSX 파싱 활성화
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:react/recommended'],
  plugins: ['react'], // JSX 파싱을 위해 @babel 플러그인 추가
  rules: {
    'react/prop-types': 'off',
    'no-undef': 'off'
  },
  settings: {
    react: {
      version: 'detect' // React 버전을 자동으로 감지하게 설정
    }
  }
};

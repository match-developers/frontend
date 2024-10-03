module.exports = {
  root: true,  // root 설정
  parser: '@babel/eslint-parser',  // 파서 설정
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,  // JSX 사용 가능
    },
    ecmaVersion: 2020,  // ECMAScript 최신 버전
    sourceType: 'module',  // 모듈 타입을 '모듈'로 설정
  },
  extends: ['plugin:react/recommended', '@react-native-community'],  // 규칙 확장
  plugins: ['react'],  // 플러그인 설정
  rules: {
    // 추가적인 ESLint 규칙 설정
  },
};
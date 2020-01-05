module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-unused-vars': 0,
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none'
      }
    }]
  }
}

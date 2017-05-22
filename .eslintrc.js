module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    "allowImportExportEverywhere": true
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  plugins: [],
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-console': 0,
    'no-use-before-define': 0,
    'no-multi-assign': 0,
    'no-unused-vars': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': 0,
    'no-multiple-empty-lines': 0,
    'eol-last': 0,
    'comma-spacing': 0,
    'object-curly-even-spacing': 0,
    'no-return-assign': 0,
    'no-useless-constructor': 0,
    'spaced-comment': 0
  },
}

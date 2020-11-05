module.exports = {
  extends: [
    './base/best-practices',
    './base/errors',
    './base/node',
    './base/style',
    './base/variables',
    './base/es6',
    './base/imports',
     'prettier' 
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {},
}


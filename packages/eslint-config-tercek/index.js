module.exports = {
  extends: [
    ...[
      './base/best-practices',
      './base/errors',
      './base/node',
      './base/style',
      './base/variables',
      './base/es6',
      './base/imports',
    ].map(require.resolve),
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {},
}

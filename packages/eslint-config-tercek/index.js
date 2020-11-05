module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
  },
}

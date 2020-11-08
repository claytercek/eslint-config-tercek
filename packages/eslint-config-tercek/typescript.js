const {rules: baseBestPracticesRules} = require('./base/best-practices')
const {rules: baseErrorsRules} = require('./base/errors')
const {rules: baseES6Rules} = require('./base/es6')
const {rules: baseImportsRules} = require('./base/imports')
const {rules: baseStyleRules} = require('./base/style')
const {rules: baseVariablesRules} = require('./base/variables')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  "plugins": ["@typescript-eslint"],
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.ts', '.d.ts'],
        paths: ['src'],
      },
    },
  },
  rules: {
    // Replace Airbnb 'camelCase' rule with '@typescript-eslint' version
    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    // Replace Airbnb 'dot-notation' rule with '@typescript-eslint' version
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': baseBestPracticesRules['dot-notation'],

    // Replace Airbnb 'lines-between-class-members' rule with '@typescript-eslint' version
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members':
      baseStyleRules['lines-between-class-members'],

    // Replace Airbnb 'no-array-constructor' rule with '@typescript-eslint' version
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor':
      baseStyleRules['no-array-constructor'],

    // Replace Airbnb 'no-dupe-class-members' rule with '@typescript-eslint' version
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members':
      baseES6Rules['no-dupe-class-members'],

    // Replace Airbnb 'no-empty-function' rule with '@typescript-eslint' version
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function':
      baseBestPracticesRules['no-empty-function'],

    // Replace Airbnb 'no-implied-eval' and 'no-new-func' rules with '@typescript-eslint' version
    'no-implied-eval': 'off',
    'no-new-func': 'off',
    '@typescript-eslint/no-implied-eval':
      baseBestPracticesRules['no-implied-eval'],

    // Replace Airbnb 'no-loop-func' rule with '@typescript-eslint' version
    'no-loop-func': 'off',
    "@typescript-eslint/no-loop-func": ["error"],

    // Replace Airbnb 'no-magic-numbers' rule with '@typescript-eslint' version
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers':
      baseBestPracticesRules['no-magic-numbers'],

    // Replace Airbnb 'no-redeclare' rule with '@typescript-eslint' version
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': baseBestPracticesRules['no-redeclare'],

    // Replace Airbnb 'no-shadow' rule with '@typescript-eslint' version
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': baseVariablesRules['no-shadow'],

    // Replace Airbnb 'no-throw-literal' rule with '@typescript-eslint' version
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal':
      baseBestPracticesRules['no-throw-literal'],

    // Replace Airbnb 'no-unused-expressions' rule with '@typescript-eslint' version
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions':
      baseBestPracticesRules['no-unused-expressions'],

    // Replace Airbnb 'no-unused-vars' rule with '@typescript-eslint' version
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': baseVariablesRules['no-unused-vars'],

    // Replace Airbnb 'no-use-before-define' rule with '@typescript-eslint' version
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    // Replace Airbnb 'no-useless-constructor' rule with '@typescript-eslint' version
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor':
      baseES6Rules['no-useless-constructor'],

    'import/extensions': [
      baseImportsRules['import/extensions'][0],
      baseImportsRules['import/extensions'][1],
      {
        ...baseImportsRules['import/extensions'][2],
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Append 'ts' and 'tsx' extensions to Airbnb 'import/no-extraneous-dependencies' rule
    'import/no-extraneous-dependencies': [
      baseImportsRules['import/no-extraneous-dependencies'][0],
      {
        ...baseImportsRules['import/no-extraneous-dependencies'][1],
        devDependencies: baseImportsRules[
          'import/no-extraneous-dependencies'
        ][1].devDependencies.map(glob =>
          glob.replace('js,jsx', 'js,jsx,ts,tsx'),
        ),
      },
    ],
  },
}

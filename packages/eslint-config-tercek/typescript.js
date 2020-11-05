const { rules: baseBestPracticesRules } = require('./base/best-practices');
const { rules: baseErrorsRules } = require('./base/errors');
const { rules: baseES6Rules } = require('./base/es6');
const { rules: baseImportsRules } = require('./base/imports');
const { rules: baseStyleRules } = require('./base/style');
const { rules: baseVariablesRules } = require('./base/variables');

module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [    
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
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
        "paths": ["src"]
      },
    },
  },
  rules: {
    // Replace Airbnb 'brace-style' rule with '@typescript-eslint' version
    'brace-style': 'off',
    '@typescript-eslint/brace-style': baseStyleRules['brace-style'],

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

    // Replace Airbnb 'comma-dangle' rule with '@typescript-eslint' version
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [baseStyleRules['comma-dangle'][0], {
      ...baseStyleRules['comma-dangle'][1],
      enums: baseStyleRules['comma-dangle'][1].arrays,
      generics: baseStyleRules['comma-dangle'][1].arrays,
      tuples: baseStyleRules['comma-dangle'][1].arrays,
    }],

    // Replace Airbnb 'comma-spacing' rule with '@typescript-eslint' version
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': baseStyleRules['comma-spacing'],

    // Replace Airbnb 'dot-notation' rule with '@typescript-eslint' version
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': baseBestPracticesRules['dot-notation'],

    // Replace Airbnb 'func-call-spacing' rule with '@typescript-eslint' version
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': baseStyleRules['func-call-spacing'],

    // Replace Airbnb 'indent' rule with '@typescript-eslint' version
    indent: 'off',
    '@typescript-eslint/indent': baseStyleRules.indent,

    // Replace Airbnb 'keyword-spacing' rule with '@typescript-eslint' version
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': baseStyleRules['keyword-spacing'],

    // Replace Airbnb 'lines-between-class-members' rule with '@typescript-eslint' version
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': baseStyleRules['lines-between-class-members'],

    // Replace Airbnb 'no-array-constructor' rule with '@typescript-eslint' version
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': baseStyleRules['no-array-constructor'],

    // Replace Airbnb 'no-dupe-class-members' rule with '@typescript-eslint' version
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': baseES6Rules['no-dupe-class-members'],

    // Replace Airbnb 'no-empty-function' rule with '@typescript-eslint' version
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': baseBestPracticesRules['no-empty-function'],

    // Replace Airbnb 'no-extra-parens' rule with '@typescript-eslint' version
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': baseErrorsRules['no-extra-parens'],

    // Replace Airbnb 'no-extra-semi' rule with '@typescript-eslint' version
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': baseErrorsRules['no-extra-semi'],

    // Replace Airbnb 'no-implied-eval' and 'no-new-func' rules with '@typescript-eslint' version
    'no-implied-eval': 'off',
    'no-new-func': 'off',
    '@typescript-eslint/no-implied-eval': baseBestPracticesRules['no-implied-eval'],

    // Replace Airbnb 'no-loop-func' rule with '@typescript-eslint' version
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': baseBestPracticesRules['no-loop-func'],

    // Replace Airbnb 'no-magic-numbers' rule with '@typescript-eslint' version
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': baseBestPracticesRules['no-magic-numbers'],

    // Replace Airbnb 'no-redeclare' rule with '@typescript-eslint' version
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': baseBestPracticesRules['no-redeclare'],

    // Replace Airbnb 'no-shadow' rule with '@typescript-eslint' version
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': baseVariablesRules['no-shadow'],

    // Replace Airbnb 'no-throw-literal' rule with '@typescript-eslint' version
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': baseBestPracticesRules['no-throw-literal'],

    // Replace Airbnb 'no-unused-expressions' rule with '@typescript-eslint' version
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': baseBestPracticesRules['no-unused-expressions'],

    // Replace Airbnb 'no-unused-vars' rule with '@typescript-eslint' version
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': baseVariablesRules['no-unused-vars'],

    // Replace Airbnb 'no-use-before-define' rule with '@typescript-eslint' version
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': baseVariablesRules['no-use-before-define'],

    // Replace Airbnb 'no-useless-constructor' rule with '@typescript-eslint' version
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': baseES6Rules['no-useless-constructor'],

    // Replace Airbnb 'quotes' rule with '@typescript-eslint' version
    quotes: 'off',
    '@typescript-eslint/quotes': baseStyleRules.quotes,

    // Replace Airbnb 'semi' rule with '@typescript-eslint' version
    semi: 'off',
    '@typescript-eslint/semi': ['warn', 'never'],

    // Replace Airbnb 'space-before-function-paren' rule with '@typescript-eslint' version
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': baseStyleRules['space-before-function-paren'],

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
        ][1].devDependencies.map((glob) => glob.replace('js,jsx', 'js,jsx,ts,tsx')),
      },
    ],
  },
};
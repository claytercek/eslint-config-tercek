# Eslint Config Tercek

An ESLint config built to fit my personal 
preference.


## Installation

Install the config using your favorite package manager:

```bash
$ yarn add -D eslint-config-tercek
$ npm i --save-dev eslint-config-tercek
```

Then just add whichever configs you want to the `extends` section of your eslint config:

```json
{
  "extends": [
    "tercek",
    "tercek/react"
  ]
}
```

## Configs

### tercek
Rules for vanilla javascript and importing

### tercek/react
Rules for react and react hooks

### tercek/jest
Rules for jest, jest-dom, and testing-library

### tercek/typescript
Rules for typescript projects
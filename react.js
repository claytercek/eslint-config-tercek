const readPkgUp = require('read-pkg-up')
const semver = require('semver')

let oldestSupportedReactVersion = '16.5.2'

try {
  const pkg = readPkgUp.sync({normalize: true})
  // eslint-disable-next-line prefer-object-spread
  const allDeps = Object.assign(
    {react: '16.5.2'},
    pkg.peerDependencies,
    pkg.devDependencies,
    pkg.dependencies,
  )
  // eslint-disable-next-line prefer-destructuring
  oldestSupportedReactVersion = semver
    .validRange(allDeps.react)
    .replace(/[>=<|]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .sort(semver.compare)[0]
} catch (error) {
  // ignore error
}

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/react',
  ],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: oldestSupportedReactVersion,
    },
  },
  rules: {
    'react/display-name': ['warn', {ignoreTranspilerName: false}],
    'react/jsx-filename-extension': [1, {extensions: ['.ts', '.tsx']}],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
}

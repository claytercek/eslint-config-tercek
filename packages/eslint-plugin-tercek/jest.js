const readPkgUp = require('read-pkg-up')

let hasJestDom = false
let hasTestingLibrary = false
let hasTestingLibraryReact = false

try {
  const {packageJson} = readPkgUp.sync({normalize: true})
  const allDeps = Object.keys({
    ...packageJson.peerDependencies,
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  })

  hasJestDom = allDeps.includes('@testing-library/jest-dom')
  hasTestingLibrary = [
    '@testing-library/dom',
    '@testing-library/react',
    '@testing-library/angular',
    '@testing-library/vue',
  ].some(dependency => allDeps.includes(dependency))
  hasTestingLibraryReact = allDeps.includes('@testing-library/react')
} catch (error) {
  // ignore error
}

module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: [
    "plugin:jest/recommended",
    hasJestDom ? 'plugin:jest-dom/recommended' : null,
    hasTestingLibrary && !hasTestingLibraryReact ? 'plugin:testing-library/recommended' : null,
    hasTestingLibraryReact ? 'plugin:testing-library/react' : null,
  ].filter(Boolean),
  rules: {},
}

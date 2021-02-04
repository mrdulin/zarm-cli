const pkg = require('./package.json');

module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  displayName: {
    name: pkg.name,
    color: 'blue',
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/node_modules/'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
  verbose: true,
};

const pkg = require('./package.json');

module.exports = {
  preset: 'ts-jest',
  displayName: {
    name: pkg.name,
    color: 'blue',
  },
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
  verbose: true,
};

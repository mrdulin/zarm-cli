// const { getProjectPath } = require('../../utils');
const transformPackages = [
  'react-native',
  'react-native-camera-roll-picker',
];

module.exports = {
  // preset: 'react-native',
  rootDir: process.cwd(),
  roots: [
    '<rootDir>/components',
  ],
  transform: {
    '^.+\\.jsx?$': require.resolve('./preprocessor.native'),
    '^.+\\.tsx?$': require.resolve('ts-jest'),
  },
  // setupFilesAfterEnv: [
  //   getProjectPath('scripts/jest/setup.js'),
  // ],
  // testRegex: '/__tests__/[^.]+\\.test(\\.(js|jsx|ts|tsx))$',
  testRegex: '/__tests__/[^.]+\\.native.test(\\.(js|jsx|ts|tsx))$',
  collectCoverageFrom: [
    'components/**/*.native.{ts,tsx}',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  transformIgnorePatterns: [
    `<rootDir>/node_modules/(?!(${transformPackages.join('|')})/)`,
  ],
  testEnvironment: 'jsdom',
};

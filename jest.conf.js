const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  verbose: true,
  globals: {},
  collectCoverage: true,
  coverageDirectory: process.env.JEST_CLOVER_OUTPUT_DIR || './coverage',
  coverageReporters: ['text', 'clover', 'lcov'],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  collectCoverageFrom: [
    '**/src/main/**/*.{js}',
    '!**/src/spec/*.{js}',
  ],
  moduleFileExtensions: [
    'js',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/main/$1',
  }
};

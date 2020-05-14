module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.scss': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.svg': '<rootDir>/src/__mocks__/svgrMock.js',
  },
};

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Use the ESM preset for ts-jest
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8", // or 'babel'
  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],
  // The root directory that Jest should scan for tests and modules within
  rootDir: '.',
  // A list of paths to directories that Jest should use to search for files in
  roots: [
    "<rootDir>/src",
    "<rootDir>/tests"
  ],
  // The test matching patterns Jest uses to detect test files
  testMatch: [
    "**/tests/**/*.test.ts",
    "**/src/**/*.test.ts"
  ],
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // Keep node_modules transform ignore pattern
  transformIgnorePatterns: [
    "/node_modules/",
    "\\.pnp\\.[^\\/]+$"
  ],
  // The preset handles the transform, no need to specify it here
  // The preset handles ESM extensions
  moduleNameMapper: {
    // Handle module paths starting with '#' as defined in tsconfig.json
    // Must map the path alias for ESM
    '^#/(.*)$': '<rootDir>/src/$1',
    // Force module resolution for NodeNext compatibility
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  // Indicates whether each individual test should be reported during the run
  verbose: true,
};

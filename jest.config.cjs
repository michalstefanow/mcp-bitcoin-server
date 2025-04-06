/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Restore the ESM preset
  preset: 'ts-jest/presets/default-esm',
  // extensionsToTreatAsEsm: ['.ts'], // Handled by preset
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
  // transform: { ... }, // Handled by preset
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // Keep node_modules transform ignore pattern (preset might handle this too, but explicit is safer)
  transformIgnorePatterns: [
    "/node_modules/",
    "\\.pnp\\.[^\\/]+$"
  ],
  moduleNameMapper: {
    // Explicitly map 'keytar' to its mock file
    '^keytar$': '<rootDir>/tests/__mocks__/keytar.ts',
    // Explicitly map 'bitcoinjs-lib' to its mock file
    '^bitcoinjs-lib$': '<rootDir>/tests/__mocks__/bitcoinjs-lib.ts',
    // Explicitly map 'ecpair' to its mock file
    '^ecpair$': '<rootDir>/tests/__mocks__/ecpair.ts',
    // Explicitly map 'tiny-secp256k1' to its mock file
    '^tiny-secp256k1$': '<rootDir>/tests/__mocks__/tiny-secp256k1.ts',
    // Handle module paths starting with '#' as defined in tsconfig.json
    // Must map the path alias for ESM (adjust if your alias differs)
    '^#/(.*)$': '<rootDir>/src/$1',
    // Removed NodeNext .js mapping as it might conflict with ts-jest ESM transform
    // '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  // Indicates whether each individual test should be reported during the run
  verbose: true,
};

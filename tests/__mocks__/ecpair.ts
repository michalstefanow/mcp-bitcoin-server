// tests/__mocks__/ecpair.ts
import { jest } from '@jest/globals';

/**
 * Mock implementation for the ecpair module.
 * Replicates the factory pattern.
 */

// Mock the methods that the ECPair object would have
const mockECPairInstance = {
  makeRandom: jest.fn(),
  fromWIF: jest.fn(),
  fromPrivateKey: jest.fn(),
  toWIF: jest.fn(),
  sign: jest.fn(),
  verify: jest.fn(),
  publicKey: Buffer.from('mockPublicKey'), // Default mock property
  privateKey: Buffer.from('mockPrivateKey'), // Default mock property
};

// Mock the factory function itself
// It should return an object containing the mocked methods
const mockECPairFactory = jest.fn().mockReturnValue(mockECPairInstance);

// Export the mocked factory using the same name as the actual library export
export const ECPairFactory = mockECPairFactory;

// Export other potential types/interfaces if needed for type checking in tests,
// but keep them simple as they are just for the mock structure.
export interface ECPairInterface {
  publicKey: Buffer;
  privateKey?: Buffer;
  network?: any;
  compressed?: boolean;
  makeRandom: () => ECPairInterface;
  toWIF: () => string;
  // Add other interface methods if needed by tests
}

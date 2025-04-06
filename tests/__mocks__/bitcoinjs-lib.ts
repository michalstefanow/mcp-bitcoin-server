// tests/__mocks__/bitcoinjs-lib.ts
import { jest } from '@jest/globals';

/**
 * Mock implementation for the bitcoinjs-lib module.
 * This allows testing code that uses bitcoinjs-lib without performing
 * real cryptographic operations or needing exact data structures.
 */

// Mock payments functionality
const mockPayments = {
  p2wpkh: jest.fn(), // Mock the p2wpkh function within payments
  // Add other payment types used by the application here, e.g.:
  // p2pkh: jest.fn(),
  // p2sh: jest.fn(),
};

// Mock networks (provide basic structure, can be expanded if needed)
const mockNetworks = {
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: { public: 0x0488b21e, private: 0x0488ade4 },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
  },
  testnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: { public: 0x043587cf, private: 0x04358394 },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
  },
};

// Export the mocked parts using the same names as the actual library
// ECPair is a separate module now, so it's not mocked here.
export const payments = mockPayments;
export const networks = mockNetworks;

// Add mocks for other top-level exports if/when needed by the application
// export const script = { ... };
// export const Transaction = { ... };
// export const Psbt = { ... };

// tests/unit/bitcoinjs-lib-mock.test.ts
import { describe, it, expect, beforeEach, jest } from '@jest/globals';

// Import the module to be mocked
import * as bitcoin from 'bitcoinjs-lib';

// Tell Jest to use the mock
// This relies on the moduleNameMapper in jest.config.cjs or auto-detection
jest.mock('bitcoinjs-lib');

// Cast to access mock functions specifically
interface MockedBitcoin {
  payments: {
    p2wpkh: jest.Mock;
    // Add other mocked payment methods here if needed
  };
  networks: typeof bitcoin.networks; // Keep original networks type for structure
  // Add other mocked top-level exports here if needed
}

const mockedBitcoin = bitcoin as unknown as MockedBitcoin; // Use unknown first for type assertion

describe('bitcoinjs-lib Mock Verification', () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockedBitcoin.payments.p2wpkh.mockClear();
  });

  // Removed ECPair test as it's a separate module

  it('should allow mocking payments.p2wpkh', () => {
    // Arrange: Define a mock return value for p2wpkh
    const mockPayment = {
      address: 'mockAddress',
      output: Buffer.from('mockOutputScript'),
    };
    mockedBitcoin.payments.p2wpkh.mockReturnValue(mockPayment);
    const publicKeyBuffer = Buffer.from('somePublicKey');

    // Act: Call the function that would use bitcoinjs-lib
    const payment = bitcoin.payments.p2wpkh({ pubkey: publicKeyBuffer, network: bitcoin.networks.testnet });

    // Assert: Verify the mock was called and returned the expected structure
    expect(mockedBitcoin.payments.p2wpkh).toHaveBeenCalledTimes(1);
    expect(mockedBitcoin.payments.p2wpkh).toHaveBeenCalledWith({
      pubkey: publicKeyBuffer,
      network: bitcoin.networks.testnet, // Ensure args match, including network object
    });
    expect(payment).toBe(mockPayment);
    expect(payment.address).toBe('mockAddress');
  });

  it('should provide access to mocked networks', () => {
    // Assert: Verify that the mocked networks object is accessible
    expect(bitcoin.networks.testnet.bech32).toBe('tb');
    expect(bitcoin.networks.bitcoin.pubKeyHash).toBe(0x00);
  });
});

// tests/unit/ecpair-mock.test.ts
import { describe, it, expect, beforeEach, jest } from '@jest/globals';

// Import the factory and the dependency to be injected/mocked
import { ECPairFactory } from 'ecpair';
import * as ecc from 'tiny-secp256k1'; // ecc is the conventional alias

// Tell Jest to use the mocks for both modules
jest.mock('ecpair');
jest.mock('tiny-secp256k1');

// Cast the imports to access the mock functions/properties
const MockedECPairFactory = ECPairFactory as jest.Mock;
const mockedEcc = ecc as jest.Mocked<typeof ecc>;

// Define an interface matching the structure of the mock instance
interface MockECPairInstanceType {
  makeRandom: jest.Mock;
  fromWIF: jest.Mock;
  fromPrivateKey: jest.Mock;
  toWIF: jest.Mock;
  sign: jest.Mock;
  verify: jest.Mock;
  publicKey: Buffer;
  privateKey: Buffer;
}

// Get the mocked instance returned by the factory mock and cast it
const mockedECPairInstance = MockedECPairFactory() as MockECPairInstanceType;

describe('ecpair Mock Verification', () => {
  // Instantiate the ECPair object using the mocked factory and mocked ecc
  // In actual application code, you'd inject the real ecc, but here we use the mock
  const ECPair = ECPairFactory(mockedEcc);

  beforeEach(() => {
    // Reset mocks before each test
    // Reset the factory itself
    MockedECPairFactory.mockClear();
    // Reset methods on the instance returned by the factory
    mockedECPairInstance.makeRandom.mockClear();
    mockedECPairInstance.fromWIF.mockClear();
    mockedECPairInstance.sign.mockClear();
    // Reset ecc mocks if needed for specific tests
    mockedEcc.isPrivate.mockClear();
    mockedEcc.sign.mockClear();
  });

  it('should allow mocking ECPair.makeRandom', () => {
    // Arrange: Configure the mock instance's makeRandom method
    const mockReturn = { publicKey: Buffer.from('newRandomKey') };
    mockedECPairInstance.makeRandom.mockReturnValue(mockReturn);

    // Act: Call the method on the instance obtained from the factory
    const keyPair = ECPair.makeRandom();

    // Assert: Verify the mock method on the instance was called
    expect(mockedECPairInstance.makeRandom).toHaveBeenCalledTimes(1);
    expect(keyPair).toBe(mockReturn);
  });

  it('should allow mocking ECPair.fromWIF', () => {
    // Arrange
    const wif = 'mockWIFString';
    const mockReturn = { publicKey: Buffer.from('keyFromWIF') };
    mockedECPairInstance.fromWIF.mockReturnValue(mockReturn);

    // Act
    const keyPair = ECPair.fromWIF(wif);

    // Assert
    expect(mockedECPairInstance.fromWIF).toHaveBeenCalledTimes(1);
    expect(mockedECPairInstance.fromWIF).toHaveBeenCalledWith(wif);
    expect(keyPair).toBe(mockReturn);
  });

  it('should allow mocking ECPair.sign and verifying ecc interaction', () => {
    // Arrange
    const hash = Buffer.from('messageHash');
    const mockSignature = Buffer.from('specificMockSignature');
    // Configure the instance sign method
    mockedECPairInstance.sign.mockReturnValue(mockSignature);
    // We can also verify that the underlying ecc.sign was called if needed,
    // though often mocking at the ECPair level is sufficient.
    // First, get a mocked instance (e.g., via fromWIF)
    const wif = 'mockWIFStringForSign';
    mockedECPairInstance.fromWIF.mockReturnValue(mockedECPairInstance); // Make fromWIF return the instance itself for simplicity in this test
    const keyPairInstance = ECPair.fromWIF(wif);


    // Act: Call sign on the instance
    const signature = keyPairInstance.sign(hash);

    // Assert: Check the sign mock on the instance object
    expect(mockedECPairInstance.sign).toHaveBeenCalledTimes(1);
    expect(mockedECPairInstance.sign).toHaveBeenCalledWith(hash);
    expect(signature).toBe(mockSignature);

    // Optional: Verify underlying ecc call if ECPair.sign is expected to call ecc.sign
    // expect(mockedEcc.sign).toHaveBeenCalled();
  });
});

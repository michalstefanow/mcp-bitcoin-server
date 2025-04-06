// tests/unit/tiny-secp256k1-mock.test.ts
import { describe, it, expect, beforeEach, jest } from '@jest/globals';

// Import functions from the module to be mocked
import * as ecc from 'tiny-secp256k1';

// Tell Jest to use the mock
jest.mock('tiny-secp256k1');

// Cast the import to access mock functions
const mockedEcc = ecc as jest.Mocked<typeof ecc>;

describe('tiny-secp256k1 Mock Verification', () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockedEcc.isPoint.mockClear();
    mockedEcc.sign.mockClear();
    mockedEcc.verify.mockClear();
    // Restore default mock implementations if they were changed in tests
    mockedEcc.isPoint.mockReturnValue(true);
    mockedEcc.sign.mockReturnValue(Buffer.from('mockSignature'));
    mockedEcc.verify.mockReturnValue(true);
  });

  it('should allow calling mocked isPoint', () => {
    // Arrange
    const point = Buffer.from('somePublicKey');
    mockedEcc.isPoint.mockReturnValueOnce(false); // Example of overriding default

    // Act
    const result1 = ecc.isPoint(point);
    const result2 = ecc.isPoint(point); // Should use default mock value now

    // Assert
    expect(mockedEcc.isPoint).toHaveBeenCalledTimes(2);
    expect(mockedEcc.isPoint).toHaveBeenCalledWith(point);
    expect(result1).toBe(false);
    expect(result2).toBe(true); // Default mock value
  });

  it('should allow calling mocked sign', () => {
    // Arrange
    const hash = Buffer.from('messageHash');
    const privateKey = Buffer.from('privateKey');
    const specificSignature = Buffer.from('anotherMockSignature');
    mockedEcc.sign.mockReturnValueOnce(specificSignature);

    // Act
    const signature = ecc.sign(hash, privateKey);

    // Assert
    expect(mockedEcc.sign).toHaveBeenCalledTimes(1);
    expect(mockedEcc.sign).toHaveBeenCalledWith(hash, privateKey);
    expect(signature).toBe(specificSignature);
  });

  it('should allow calling mocked verify', () => {
    // Arrange
    const hash = Buffer.from('messageHash');
    const publicKey = Buffer.from('publicKey');
    const signature = Buffer.from('signatureToVerify');
    mockedEcc.verify.mockReturnValueOnce(false); // Example: simulate failed verification

    // Act
    const isValid = ecc.verify(hash, publicKey, signature);

    // Assert
    expect(mockedEcc.verify).toHaveBeenCalledTimes(1);
    expect(mockedEcc.verify).toHaveBeenCalledWith(hash, publicKey, signature);
    expect(isValid).toBe(false);
  });
});

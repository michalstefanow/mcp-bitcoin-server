// tests/__mocks__/tiny-secp256k1.ts
import { jest } from '@jest/globals';

/**
 * Mock implementation for the tiny-secp256k1 module.
 * Provides mock functions for the low-level crypto operations used by ecpair.
 */

export const isPoint = jest.fn().mockReturnValue(true); // Default mock behavior
export const isPointCompressed = jest.fn().mockReturnValue(true);
export const isPrivate = jest.fn().mockReturnValue(true);
export const pointAdd = jest.fn();
export const pointAddScalar = jest.fn();
export const pointCompress = jest.fn();
export const pointFromScalar = jest.fn();
export const pointMultiply = jest.fn();
export const privateAdd = jest.fn();
export const privateSub = jest.fn();
export const sign = jest.fn().mockReturnValue(Buffer.from('mockSignature')); // Default mock signature
export const signSchnorr = jest.fn();
export const verify = jest.fn().mockReturnValue(true); // Default mock verification success
export const verifySchnorr = jest.fn();
export const xOnlyPointAddTweak = jest.fn();
export const privateNegate = jest.fn();
export const pointNegate = jest.fn();

// Add any other functions from tiny-secp256k1 if they are used directly
// or indirectly via ecpair in your application code.

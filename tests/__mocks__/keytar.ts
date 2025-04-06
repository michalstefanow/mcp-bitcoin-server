// tests/__mocks__/keytar.ts
import { jest } from '@jest/globals';

/**
 * Mock implementation for the keytar module.
 * This allows testing code that uses keytar without interacting
 * with the actual OS keychain.
 */

export const getPassword = jest.fn();
export const setPassword = jest.fn();
export const deletePassword = jest.fn();
export const findPassword = jest.fn();
export const findCredentials = jest.fn();

// You can add default mock implementations if needed, e.g.:
// getPassword.mockResolvedValue(null); // Default to not finding a password

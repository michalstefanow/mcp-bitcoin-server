// tests/unit/keytar-mock.test.ts
import { describe, it, expect, beforeEach, jest } from '@jest/globals';

// Import the module we want to test (or rather, test the mock of)
// Jest will automatically intercept this and use tests/__mocks__/keytar.ts
import * as keytar from 'keytar';

// Tell Jest to use the mock implementation
// This is technically redundant if Jest auto-detects __mocks__,
// but explicit declaration is clearer.
jest.mock('keytar');

// For type safety and easier access to mock functions, cast the imported module
// Note: Adjust the path if your actual keytar usage is different,
// but for mocking, importing the base 'keytar' is usually correct.
const mockedKeytar = keytar as jest.Mocked<typeof keytar>;

describe('Keytar Mock Verification', () => {
  const service = 'test-service';
  const account = 'test-account';
  const password = 'test-password';

  // Reset mocks before each test to ensure isolation
  beforeEach(() => {
    mockedKeytar.getPassword.mockClear();
    mockedKeytar.setPassword.mockClear();
    mockedKeytar.deletePassword.mockClear();
    // Reset any default implementations if set, e.g.:
    // mockedKeytar.getPassword.mockResolvedValue(null);
  });

  it('should allow mocking setPassword and verifying calls', async () => {
    // Arrange: Define what setPassword should resolve to (it's async)
    mockedKeytar.setPassword.mockResolvedValue(undefined);

    // Act: Call the function that *would* use keytar.setPassword
    // In a real test, this would be your own function, e.g., storeSecret()
    await keytar.setPassword(service, account, password);

    // Assert: Verify the mock was called correctly
    expect(mockedKeytar.setPassword).toHaveBeenCalledTimes(1);
    expect(mockedKeytar.setPassword).toHaveBeenCalledWith(service, account, password);
  });

  it('should allow mocking getPassword return value', async () => {
    // Arrange: Define a mock return value for getPassword
    mockedKeytar.getPassword.mockResolvedValue(password);

    // Act: Call the function that *would* use keytar.getPassword
    const retrievedPassword = await keytar.getPassword(service, account);

    // Assert: Verify the mock was called and returned the expected value
    expect(mockedKeytar.getPassword).toHaveBeenCalledTimes(1);
    expect(mockedKeytar.getPassword).toHaveBeenCalledWith(service, account);
    expect(retrievedPassword).toBe(password);
  });

  it('should allow mocking getPassword to return null (not found)', async () => {
    // Arrange: Mock getPassword returning null
    mockedKeytar.getPassword.mockResolvedValue(null);

    // Act
    const retrievedPassword = await keytar.getPassword(service, 'non-existent-account');

    // Assert
    expect(mockedKeytar.getPassword).toHaveBeenCalledWith(service, 'non-existent-account');
    expect(retrievedPassword).toBeNull();
  });

  it('should allow mocking deletePassword and verifying calls', async () => {
     // Arrange: Define what deletePassword should resolve to
    mockedKeytar.deletePassword.mockResolvedValue(true); // Assuming it returns boolean

    // Act
    await keytar.deletePassword(service, account);

    // Assert
    expect(mockedKeytar.deletePassword).toHaveBeenCalledTimes(1);
    expect(mockedKeytar.deletePassword).toHaveBeenCalledWith(service, account);
  });
});

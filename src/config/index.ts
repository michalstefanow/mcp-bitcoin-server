export const CONFIG = {
  // Server configuration
  SERVER_NAME: 'bitcoin-wallet-server',
  SERVER_VERSION: '0.1.0',

  // Environment variables
  WALLET_PASSWORD: process.env.WALLET_PASSWORD,

  // Network configuration (can be changed to 'mainnet' later)
  NETWORK: 'testnet' as const,

  // Security
  KEY_ENCRYPTION_ALGORITHM: 'aes-256-gcm' as const,
  
  // Error messages
  ERRORS: {
    MISSING_PASSWORD: 'WALLET_PASSWORD environment variable is required',
    INVALID_ADDRESS: 'Invalid Bitcoin address',
    INSUFFICIENT_FUNDS: 'Insufficient funds for transaction',
    INVALID_AMOUNT: 'Invalid transaction amount',
  }
} as const;

// Type-safe config access
export type Config = typeof CONFIG;

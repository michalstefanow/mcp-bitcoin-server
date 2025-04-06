# Bitcoin Wallet MCP Server Tests

This directory will contain the test suite for the Bitcoin Wallet MCP server.

## Planned Test Structure

```
tests/
├── unit/                     # Unit tests for individual components
│   ├── wallet/               # Tests for wallet core functionality
│   │   ├── key.test.ts       # Tests for key management
│   │   ├── address.test.ts   # Tests for address generation
│   │   └── transaction.test.ts # Tests for transaction building
│   ├── network/              # Tests for network providers
│   │   ├── spv.test.ts       # Tests for SPV implementation
│   │   └── api.test.ts       # Tests for API implementation (future)
│   ├── storage/              # Tests for storage modules
│   └── utils/                # Tests for utility functions
└── integration/              # Integration tests
    ├── tools.test.ts         # Tests for MCP tools
    └── bitcoin-testnet.test.ts # Live testnet integration tests
```

## Testing Strategy

1. **Unit Tests**: Will test individual components in isolation with mocked dependencies.
2. **Integration Tests**: Will test the complete flow of operations.
3. **Testnet Tests**: Will perform actual Bitcoin testnet operations for end-to-end validation.

## Test Framework (TBD)

The test framework will be decided during implementation, likely using Jest or Mocha with appropriate assertions.

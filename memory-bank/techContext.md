# Technical Context: Bitcoin Wallet MCP Server

## Technology Stack (Current)

### Core Technologies
- **TypeScript**: Primary development language (`target: es2022`, `module: NodeNext`).
- **Node.js**: Runtime environment.

### Development Tools
- **Git**: Version control system
- **pnpm**: **Required** package manager. All dependency and script management MUST use `pnpm` commands (e.g., `pnpm add`, `pnpm pkg set`). Direct editing of `package.json` is forbidden.
- **fastmcp**: MCP server framework used for this project.
- **zod**: Schema definition and validation library.
- **Jest**: Unit and integration testing framework.
- **ts-jest**: Jest transformer for TypeScript.
- **@jest/globals**: Required for explicit import of Jest globals in ESM context.
- **keytar**: Library for interacting with the OS keychain (used for secure key storage).
- **bitcoinjs-lib**: Core Bitcoin library for data structures, payments, etc.
- **ecpair**: Factory for creating/managing Bitcoin key pairs.
- **tiny-secp256k1**: Low-level elliptic curve cryptography functions (dependency for `ecpair`).
- **ESLint/Prettier**: Code quality and formatting (TBD).
- **TypeDoc**: API documentation generation (TBD).

## MCP Integration (`fastmcp`)

### Server Setup (`src/server/server.ts`)
```typescript
import { FastMCP } from 'fastmcp';
import { CONFIG } from '../config/index.js';
import { getAddressTool } from '../tools/get-address.js';
import { getBalanceTool } from '../tools/get-balance.js';
import { sendTransactionTool } from '../tools/send-transaction.js';

const server = new FastMCP({
  name: CONFIG.SERVER_NAME,
  version: CONFIG.SERVER_VERSION,
});

server.addTool(getAddressTool);
server.addTool(getBalanceTool);
server.addTool(sendTransactionTool);

server.start({
  transportType: 'stdio',
});
```

### Transport Mechanism
- Currently uses `stdio` transport via `fastmcp`.

### Tool Definitions (`src/tools/`, `src/types/index.ts`)
- Tools (`get_address`, `get_balance`, `send_transaction`) are defined using `fastmcp`'s `addTool` method.
- Parameters are defined using `zod` schemas.
- Current implementations are dummy placeholders returning static data.

### Resource Definitions
- No MCP resources are currently defined or implemented.

## Bitcoin Integration
- **Status:** `bitcoinjs-lib`, `ecpair`, `tiny-secp256k1` installed. Implementation pending.
- **Planned Libraries:** `bitcoinjs-lib`, `ecpair`, `tiny-secp256k1` (core wallet functions), SPV/P2P library (evaluation needed).

## Data Storage
- **Status:** Keychain library (`keytar`) installed. Implementation pending.
- **Planned Approach:** Encrypted private key in OS keychain (via `keytar`); local storage for SPV state (headers, UTXOs).

## Testing Strategy
- **Status:** Jest framework configured and verified. Tests pass.
- **Configuration (`jest.config.cjs`, `package.json`, `tsconfig.json`):**
    - Uses `ts-jest/presets/default-esm` preset.
    - Requires `NODE_OPTIONS=--experimental-vm-modules` in the `test` script (`package.json`).
    - Requires `"isolatedModules": true` in `tsconfig.json`.
    - Requires explicit `moduleNameMapper` for mocked modules (e.g., `keytar`, `bitcoinjs-lib`, `ecpair`, `tiny-secp256k1`).
    - Requires explicit import of Jest globals (`jest`, `describe`, etc.) from `@jest/globals` in test and mock files.
- **Mocking:**
    - Mock for `keytar` created and verified.
    - Mock for `bitcoinjs-lib` created and verified.
    - Mock for `ecpair` created and verified.
    - Mock for `tiny-secp256k1` created and verified.
- **Plan:** Use Jest for unit and integration tests. Write tests for core functionality (key management, address generation, etc.), utilizing the mocks and following the established ESM configuration patterns. Testnet testing planned for later phases. See `tests/README.md`.
- **Verification Rule:** **CRITICAL:** Always run `pnpm test` after configuration changes or feature implementation to ensure everything works correctly.

## Development Environment

### Local Setup
- Requires Node.js and `pnpm`.
- Run `pnpm install` to install dependencies.
- Use `pnpm dev` or `pnpm inspect` for running/testing the server.
- Requires `WALLET_PASSWORD` environment variable (currently used only by config, not logic).

### CI/CD Considerations
- Not yet configured.

## Deployment Strategy
- Not yet defined.

## Documentation
- **Memory Bank**: Core documentation structure in `memory-bank/`.
- **README.md**: Basic project overview and setup instructions.
- **API/Integration/Security Docs**: Pending implementation.

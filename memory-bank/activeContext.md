# Active Context: Bitcoin Wallet MCP Server

## Current Focus
The project has completed the initial scaffolding phase using `fastmcp`. The basic structure is in place, including dummy implementations for the core tools (`get_address`, `get_balance`, `send_transaction`). The focus is now shifting towards implementing the actual Bitcoin wallet logic.

## Recent Changes
- Initialized project using `pnpm`.
- Installed `fastmcp`, `zod`, and TypeScript dependencies.
- Configured `tsconfig.json` and `package.json` scripts.
- Created the project directory structure (`src`, `tests`).
- Implemented the basic MCP server using `fastmcp`.
- Added dummy implementations for `get_address`, `get_balance`, and `send_transaction` tools.
- Defined basic types and configuration.
- Refined file structure (renamed server logic file, updated imports).
- Added `README.md`.

## Next Steps

### Immediate Tasks
1. Implement wallet key management:
   - Generate single private key on first run.
   - Encrypt key using `WALLET_PASSWORD`.
   - Store encrypted key in OS keychain (`node-keytar`).
   - Implement key retrieval and decryption.
2. Implement address generation from the public key.
3. Begin SPV client implementation (`src/wallet/spv.ts`):
   - Connect to Bitcoin peers.
   - Download block headers.

### Short-term Roadmap
1. Implement UTXO tracking based on SPV.
2. Implement `get_balance` using tracked UTXOs.
3. Implement transaction creation and signing using the private key.
4. Implement transaction broadcasting via the network provider interface.
5. Replace dummy tool implementations with real logic.
6. Develop comprehensive testing suite.

## Active Decisions

### Architecture Decisions
- **Wallet Type**: Confirmed as a simple SPV wallet with a single, encrypted private key stored in the OS keychain. Avoid HD wallets for simplicity.
- **Stateless Readiness**: Architecture designed with a `NetworkProvider` interface to allow swapping between stateful (SPV) and stateless (API) backends in the future. Initial implementation uses SPV.
- **Import Strategy**: Decided against using barrel files; imports point directly to specific files.

### Technical Decisions
- **Package Manager**: `pnpm`.
- **MCP Framework**: `fastmcp`.
- **Schema Validation**: `zod`.
- **Keychain Access**: Plan to use `node-keytar`.
- **Bitcoin Library**: Likely `bitcoinjs-lib` (needs confirmation during implementation).
- **SPV Library**: Potential candidates include `bitcoin-spv` and `bitcoin-p2p` (needs evaluation).

### Open Questions
- Which specific SPV/P2P libraries are most suitable and well-maintained?
- How to best manage the SPV client's state (block headers, UTXOs) persistence?
- What are the specific requirements for OS keychain integration (`node-keytar`)?
- How to handle network errors and peer disconnections gracefully in the SPV client?

## Development Environment
- Node.js/TypeScript setup using `pnpm`.
- `fastmcp` for MCP server implementation.
- `zod` for schema validation.
- `tsconfig.json` configured for ES2022 and NodeNext modules.
- `package.json` includes `build`, `start`, `dev`, `inspect` scripts.
- `tests/` directory created for future tests.

## Current Constraints
- SPV implementation requires careful handling of peer connections and state.
- Keychain integration might have platform-specific dependencies or requirements.
- Need `WALLET_PASSWORD` environment variable set to run.

## Communication Notes
- Scaffolding complete, ready to implement core wallet logic.
- Security (key encryption, keychain storage) is a critical next step.

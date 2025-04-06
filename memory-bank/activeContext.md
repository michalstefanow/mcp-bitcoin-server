# Active Context: Bitcoin Wallet MCP Server

## Current Focus
The project consists of a basic scaffold created using `fastmcp`. Dummy implementations exist for the `get_address`, `get_balance`, and `send_transaction` tools. The immediate focus is on implementing the first real piece of wallet functionality: key generation and secure storage.

## Recent Changes
- **Scaffolding:** Initialized project, installed dependencies (`fastmcp`, `zod`, TypeScript), configured build/run scripts via `pnpm`, created directory structure (`src`, `tests`), implemented basic `fastmcp` server, added dummy tools, types, config.
- **Refinement:** Renamed server logic file, updated imports, added placeholder files to preserve structure.
- **Documentation:** Updated `.clinerules` and memory bank files (`projectbrief`, `productContext`, `systemPatterns`, `techContext`, `progress`, `activeContext`) to reflect current state and enforce `pnpm` usage.
- **Testing Setup & Verification:**
    - Installed Jest (`jest`, `@types/jest`, `ts-jest`, `@jest/globals`).
    - Installed `keytar` dependency.
    - Created Jest mock for `keytar` (`tests/__mocks__/keytar.ts`).
    - Created verification test suite (`tests/unit/keytar-mock.test.ts`).
    - Iteratively configured `tsconfig.json` (`isolatedModules: true`), `package.json` (`NODE_OPTIONS=--experimental-vm-modules`), and `jest.config.cjs` (preset, `moduleNameMapper`) to correctly handle ESM, native module mocking (`keytar`), and Jest globals.
    - Updated mock and test files to explicitly import Jest globals (`@jest/globals`).
    - **Successfully verified the complete test setup and `keytar` mock by running `pnpm test`.**
- **Bitcoin Library Setup:**
    - Installed `bitcoinjs-lib` dependency.
    - Created Jest mock for `bitcoinjs-lib` (`tests/__mocks__/bitcoinjs-lib.ts`).
    - Created verification test suite (`tests/unit/bitcoinjs-lib-mock.test.ts`).
    - Updated `jest.config.cjs` (`moduleNameMapper`) for the mock.
    - **Successfully verified the `bitcoinjs-lib` mock setup by running `pnpm test`.**
- **Key Pair Library Setup:**
    - Installed `ecpair` and `tiny-secp256k1` dependencies.
    - Created Jest mocks for `ecpair` and `tiny-secp256k1`.
    - Created verification test suites for both mocks.
    - Updated `jest.config.cjs` (`moduleNameMapper`) for the mocks.
    - **Successfully verified the `ecpair` and `tiny-secp256k1` mock setups by running `pnpm test`.**
- **Documentation Update:** Updated `.clinerules` and Memory Bank (`techContext.md`, `activeContext.md`, `progress.md`) with final configuration details and the critical rule of verifying changes with `pnpm test`.

## Next Steps

### Immediate Tasks
1.  **Implement Key Generation:**
    *   In `src/wallet/key.ts`, add logic to generate a single Bitcoin private key using the installed `ecpair` and `tiny-secp256k1` libraries if one doesn't exist (checking via keychain).
2.  **Implement Key Encryption:**
    *   In `src/utils/crypto.ts`, implement AES-256-GCM encryption/decryption using the `WALLET_PASSWORD` from `src/config/index.ts`.
3.  **Implement Keychain Storage:**
    *   In `src/storage/keychain.ts`, add logic to store/retrieve the *encrypted* key using the installed `keytar` library. Handle potential platform issues.
4.  **Integrate Key Management:**
    *   Update `src/wallet/key.ts` to use the crypto and keychain modules for storing the key on first run and retrieving/decrypting it when needed (initially for `get_address`).
5.  **Implement `get_address` Tool:**
    *   Modify `src/tools/get-address.ts` to use the `KeyManager` and `AddressManager` (which needs basic implementation in `src/wallet/address.ts`) to derive and return the actual wallet address.

### Short-term Roadmap (Post Key Management)
1.  Implement SPV client basics (peer connection, header download).
2.  Implement UTXO tracking via SPV.
3.  Implement `get_balance` tool using real data.
4.  Implement transaction creation/signing/broadcasting.
5.  Implement `send_transaction` tool using real data.
6.  Write initial unit tests for key management and address generation using the configured Jest framework.

## Active Decisions
- **Wallet Type**: Simple SPV wallet, single private key, encrypted in OS keychain.
- **Stateless Readiness**: Architecture uses a `NetworkProvider` interface (implementation TBD).
- **Package Manager**: `pnpm` (strict enforcement).
- **MCP Framework**: `fastmcp`.
- **Schema Validation**: `zod`.

### Technical Decisions
- **Keychain Access**: `keytar` (installed, mock created, implementation pending).
- **Bitcoin Library**: `bitcoinjs-lib` (installed, mock verified).
- **Key Pair Libraries**: `ecpair`, `tiny-secp256k1` (installed, mocks verified).
- **SPV/P2P Library**: Evaluation needed.

### Open Questions
- Reliability and platform compatibility of `node-keytar`.
- Best library choice for SPV/P2P functionality.
- Persistent storage mechanism for SPV state (headers, UTXOs).

## Development Environment
- Node.js/TypeScript (`es2022`, `NodeNext`) using `pnpm`.
- `fastmcp` server with dummy tools.
- `zod` for schemas.
- Basic project structure with placeholders.
- `package.json` scripts: `build`, `start`, `dev`, `inspect`, `test`.
- `tests/` directory contains `README.md` and `unit/example.test.ts`.
- Jest configured (`jest.config.cjs`) and verified for ESM/TypeScript/mocking. Requires specific settings (see `techContext.md` or `.clinerules`).
- `keytar` mock available and verified.
- `bitcoinjs-lib` mock available and verified.
- `ecpair` mock available and verified.
- `tiny-secp256k1` mock available and verified.

## Current Constraints
- No actual wallet functionality implemented.
- Keychain integration (`keytar`) is installed but not yet implemented in `src/storage/keychain.ts`.
- Bitcoin libraries (`bitcoinjs-lib`, `ecpair`, `tiny-secp256k1`) are installed but not yet used in application code.
- SPV implementation is complex and pending.
- `WALLET_PASSWORD` environment variable required for planned key encryption.

## Communication Notes
- Memory bank and `.clinerules` updated with final Jest/ESM configuration details and the critical importance of running `pnpm test` to verify changes.
- The testing environment is now robustly configured for the project's ESM setup and includes verified mocks for `keytar`, `bitcoinjs-lib`, `ecpair`, and `tiny-secp256k1`.
- Next step remains implementing core key management (key generation using `ecpair`/`tiny-secp256k1`, encryption, keychain storage) and the `get_address` tool logic, followed by writing tests for it (utilizing the mocks and established testing patterns).

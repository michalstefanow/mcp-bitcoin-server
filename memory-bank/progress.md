# Progress Tracker: Bitcoin Wallet MCP Server

## Project Status: Scaffolded

The basic project structure, dependencies, configuration, and dummy tool interfaces are set up. The project accurately reflects the initial scaffold state.

## Completed Work

### Project Setup & Scaffolding
- [x] Created initial repository structure & license.
- [x] Initialized project with `pnpm`.
- [x] Installed dependencies: `fastmcp`, `zod`, `typescript`, `@types/node`, `ts-node`.
- [x] Configured `tsconfig.json` (ES2022, NodeNext modules, paths).
- [x] Configured `package.json` (type: module, scripts: build, start, dev, inspect).
- [x] Created project directory structure (`src`, `tests`) with placeholder files.
- [x] Implemented basic MCP server (`src/server/server.ts`) using `fastmcp`.
- [x] Implemented dummy tools (`get_address`, `get_balance`, `send_transaction`) in `src/tools/`.
- [x] Defined basic types (`src/types/index.ts`) using `zod`.
- [x] Created basic configuration (`src/config/index.ts`).
- [x] Created main entry point (`src/index.ts`).
- [x] Added basic `README.md`.
- [x] Added `tests/README.md` outlining test strategy.

### Documentation & Rules
- [x] Created initial memory bank (`projectbrief.md`, `productContext.md`, `systemPatterns.md`, `techContext.md`, `activeContext.md`, `progress.md`).
- [x] Updated `.clinerules` to enforce `pnpm` usage.
- [x] **Revised Memory Bank (Current Task):** Updated all memory bank files to accurately reflect the current scaffolded state, removing future/planned features not yet implemented.

### Testing Setup
- [x] Set up testing framework: Jest with ts-jest (`jest.config.cjs`). Basic example test passes.
- [x] Installed `keytar` dependency.
- [x] Created Jest mock for `keytar` (`tests/__mocks__/keytar.ts`) and verified (`tests/unit/keytar-mock.test.ts`).
- [x] Installed `bitcoinjs-lib` dependency.
- [x] Created Jest mock for `bitcoinjs-lib` (`tests/__mocks__/bitcoinjs-lib.ts`) and verified (`tests/unit/bitcoinjs-lib-mock.test.ts`).
- [x] Installed `ecpair` and `tiny-secp256k1` dependencies.
- [x] Created Jest mocks for `ecpair` and `tiny-secp256k1` and verified (`tests/unit/ecpair-mock.test.ts`, `tests/unit/tiny-secp256k1-mock.test.ts`).
- [x] Finalized Jest/ESM configuration (`tsconfig.json`, `package.json`, `jest.config.cjs`) and verified with `pnpm test`.

## Pending Work (Next Steps)

### Core Functionality - Key Management & `get_address`
- [ ] Implement key generation logic (`src/wallet/key.ts`) using installed `ecpair` and `tiny-secp256k1`.
- [ ] Implement encryption/decryption utilities (`src/utils/crypto.ts`).
- [ ] Implement keychain storage using installed `keytar` (`src/storage/keychain.ts`).
- [ ] Integrate key generation, encryption, and storage on first run.
- [ ] Implement address generation (`src/wallet/address.ts`).
- [ ] Implement the actual logic for the `get_address` tool (`src/tools/get-address.ts`) using the implemented key/address management.

### Subsequent Functionality
- [ ] Implement SPV Client & UTXO Tracking.
- [ ] Implement `get_balance` tool logic.
- [ ] Implement Transaction Creation & Signing.
- [ ] Implement Transaction Broadcasting.
- [ ] Implement `send_transaction` tool logic.

### Testing
- [ ] Write unit tests for key management & address generation.

## Known Issues
- All tool implementations (`get_address`, `get_balance`, `send_transaction`) currently return static, dummy data.
- No Bitcoin wallet logic (key management, transactions, network interaction) is implemented.
- Keychain library (`keytar`) is installed but not yet implemented in `src/storage/keychain.ts`.
- Bitcoin libraries (`bitcoinjs-lib`, `ecpair`, `tiny-secp256k1`) are installed but not yet used in application code.

## Blockers
- None currently. Need to select and evaluate libraries for keychain and SPV/P2P.

## Notes
- The project is now accurately documented to reflect its current state: a functional scaffold ready for core logic implementation.

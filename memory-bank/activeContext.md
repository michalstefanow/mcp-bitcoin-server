# Active Context: Bitcoin Wallet MCP Server

## Current Focus
The project consists of a basic scaffold created using `fastmcp`. Dummy implementations exist for the `get_address`, `get_balance`, and `send_transaction` tools. The immediate focus is on implementing the first real piece of wallet functionality: key generation and secure storage.

## Recent Changes
- **Scaffolding:** Initialized project, installed dependencies (`fastmcp`, `zod`, TypeScript), configured build/run scripts via `pnpm`, created directory structure (`src`, `tests`), implemented basic `fastmcp` server, added dummy tools, types, config.
- **Refinement:** Renamed server logic file, updated imports, added placeholder files to preserve structure.
- **Documentation:** Updated `.clinerules` and memory bank files (`projectbrief`, `productContext`, `systemPatterns`, `techContext`, `progress`, `activeContext`) to reflect current state and enforce `pnpm` usage.

## Next Steps

### Immediate Tasks
1.  **Implement Key Generation:**
    *   In `src/wallet/key.ts`, add logic to generate a single Bitcoin private key if one doesn't exist (checking via keychain).
    *   Select and install a suitable Bitcoin library (e.g., `bitcoinjs-lib` via `pnpm add bitcoinjs-lib`).
2.  **Implement Key Encryption:**
    *   In `src/utils/crypto.ts`, implement AES-256-GCM encryption/decryption using the `WALLET_PASSWORD` from `src/config/index.ts`.
3.  **Implement Keychain Storage:**
    *   In `src/storage/keychain.ts`, add logic to store/retrieve the *encrypted* key using `node-keytar` (install via `pnpm add node-keytar`). Handle potential platform issues.
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
6.  Set up testing framework and write initial tests.

## Active Decisions
- **Wallet Type**: Simple SPV wallet, single private key, encrypted in OS keychain.
- **Stateless Readiness**: Architecture uses a `NetworkProvider` interface (implementation TBD).
- **Package Manager**: `pnpm` (strict enforcement).
- **MCP Framework**: `fastmcp`.
- **Schema Validation**: `zod`.

### Technical Decisions (Pending / To Be Confirmed)
- **Keychain Access**: `node-keytar` (needs installation and testing).
- **Bitcoin Library**: `bitcoinjs-lib` (needs installation and use).
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
- `package.json` scripts: `build`, `start`, `dev`, `inspect`.
- `tests/` directory exists but is empty.

## Current Constraints
- No actual wallet functionality implemented.
- Keychain integration is pending and might have dependencies.
- SPV implementation is complex and pending.
- `WALLET_PASSWORD` environment variable required for planned key encryption.

## Communication Notes
- Memory bank now accurately reflects the scaffolded state.
- Next step is implementing core key management and the `get_address` tool logic.

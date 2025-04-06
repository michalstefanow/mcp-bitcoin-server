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
- **Jest/Mocha**: Unit and integration testing (TBD).
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
- **Status:** Not yet implemented.
- **Planned Libraries:** Evaluation pending (e.g., `bitcoinjs-lib`, SPV/P2P libraries).

## Data Storage
- **Status:** Not yet implemented.
- **Planned Approach:** Encrypted private key in OS keychain (via `node-keytar` or similar); local storage for SPV state (headers, UTXOs).

## Testing Strategy
- **Status:** Not yet implemented.
- **Plan:** Use Jest/Mocha for unit and integration tests. Testnet testing planned for later phases. See `tests/README.md`.

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

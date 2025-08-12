# Bitcoin Wallet MCP Server

A Model Context Protocol (MCP) server that enables AI agents to interact with a Bitcoin wallet.

## Features

- `get_address`: Display a Bitcoin address to receive a payment
- `get_balance`: Display the current balance of the wallet
- `send_transaction`: Send a transaction to a specific address

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Set environment variables:
```bash
export WALLET_PASSWORD="your-secure-password"
```

3. Build the project:
```bash
pnpm build
```

4. Run the server:
```bash
pnpm start
```

## Development

- Run in development mode with the MCP CLI:
```bash
pnpm dev
```

- Run with the MCP Inspector:
```bash
pnpm inspect
```

## Architecture

This is a simple SPV (Simplified Payment Verification) Bitcoin wallet that:
- Stores a single private key encrypted in the OS keychain
- Uses the password from WALLET_PASSWORD env var for key encryption
- Follows a stateless-ready architecture where all network data is fetched on-demand

## Security Notes

- The wallet password must be provided via environment variable
- The private key is stored encrypted in the OS keychain
- Never logs sensitive information like private keys or mnemonics
- All operations are performed in memory and cleaned up after use

## 👥 Contact
- Telegram [@michalstefanow](https://t.me/mylord1_1)
- Twitter [@michalstefanow](https://x.com/michalstefanow)

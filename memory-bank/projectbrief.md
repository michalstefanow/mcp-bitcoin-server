# Project Brief: Bitcoin Wallet MCP Server

## Overview
This project aims to develop a Model Context Protocol (MCP) server that enables AI agents to send and receive Bitcoin payments. The server will provide a secure and standardized interface for AI systems to interact with the Bitcoin network.

## Core Goals
- Set up an MCP server structure using `fastmcp` for future Bitcoin wallet functionality.
- Define MCP tool interfaces (`get_address`, `get_balance`, `send_transaction`) with dummy implementations.
- Establish a project structure suitable for implementing a simple SPV wallet.
- Plan for secure handling of private keys (encryption, keychain storage).
- Define basic configuration and types.

## Target Users
- AI systems and agents that need to interact with Bitcoin
- Developers building AI applications that require Bitcoin payment capabilities
- Services that want to enable AI-driven financial transactions

## Success Criteria (for Scaffolding Phase)
- MCP server starts successfully using `pnpm start` or `pnpm dev`.
- The server exposes the `get_address`, `get_balance`, and `send_transaction` tools.
- Calling the tools results in the expected dummy/placeholder responses.
- Project structure is organized as planned.
- Basic configuration and types are defined.
- Memory bank documentation accurately reflects the scaffolded state.

## License
This project is licensed under the MIT License, allowing for open use, modification, and distribution.

## Timeline
- **Phase 1: Project Initialization and MCP Server Setup (Completed)**
- Phase 2: Implementation of Core Bitcoin Wallet Functionality (Starting)
- Phase 3: Security Hardening and Testing (Pending)
- Phase 4: Documentation and Release (Pending)

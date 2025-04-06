# Product Context: Bitcoin Wallet MCP Server

## Problem Statement
As AI systems become more capable and autonomous, they increasingly need to interact with financial systems, particularly cryptocurrencies like Bitcoin. However, there's currently a gap in how AI agents can securely and standardly access Bitcoin functionality. This project addresses that gap by providing a Model Context Protocol (MCP) server specifically designed for Bitcoin wallet operations.

## Use Cases (Long-Term Vision)

*(Note: The following use cases describe the intended long-term functionality. The current implementation only provides dummy interfaces.)*

### AI Agent as a Service Provider
- An AI agent offering services (content creation, analysis, coding) could receive Bitcoin payments directly.
- Payment verification could trigger service delivery automatically.
- Transaction history could provide a verifiable record of service provision.

### AI-Managed Financial Operations
- AI systems could monitor and manage Bitcoin holdings.
- Automated transfers could be based on predefined conditions or triggers.
- Portfolio management and threshold-based transactions could be enabled.

### Cross-System Value Transfer
- AI agents could transfer value between different systems or platforms.
- Microtransactions could be enabled for granular service billing.
- Support for tipping or rewarding other AI or human contributors could be added.

## Key Functionality (Current State: Dummy Interfaces)

The server currently exposes the following tool interfaces with placeholder (dummy) implementations:

### Wallet Address (`get_address` tool)
- **Intention:** Provide a Bitcoin address for receiving payments.
- **Current State:** Returns a hardcoded testnet address. Does not involve real key management or address generation.

### Transaction Sending (`send_transaction` tool)
- **Intention:** Send Bitcoin to a specified address.
- **Current State:** Accepts address and amount parameters, performs basic validation via schema, and returns a hardcoded dummy transaction ID. Does not perform balance checks, signing, or broadcasting.

### Balance Checking (`get_balance` tool)
- **Intention:** Check the current wallet balance.
- **Current State:** Returns a hardcoded dummy balance. Does not query the network or track UTXOs.

*(Note: Features like wallet creation/management, key recovery, fee estimation, transaction history, etc., are not yet implemented or exposed as tools.)*

## User Experience Goals

### For AI Developers
- Simple integration with existing AI systems
- Clear documentation and examples
- Predictable error handling and fallback mechanisms
- Minimal configuration requirements

### For AI Agents
- Reliable and consistent Bitcoin interaction
- Secure handling of sensitive operations
- Clear feedback on transaction status
- Appropriate levels of transaction control

## Constraints and Considerations (Future Implementation)

*(Note: These apply to the planned future implementation, not the current scaffold.)*

### Security
- Private key protection will be paramount (planned: encryption + keychain).
- Secure communication channels (handled by MCP transport).
- Authorization will rely on the client environment.
- Audit logging needs to be designed.

### Regulatory
- Compliance considerations will be addressed during implementation.

### Technical
- Performance, scalability, and reliability will be key factors during SPV/wallet implementation.
- Compatibility with testnet and mainnet will be configurable.

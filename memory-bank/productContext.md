# Product Context: Bitcoin Wallet MCP Server

## Problem Statement
As AI systems become more capable and autonomous, they increasingly need to interact with financial systems, particularly cryptocurrencies like Bitcoin. However, there's currently a gap in how AI agents can securely and standardly access Bitcoin functionality. This project addresses that gap by providing a Model Context Protocol (MCP) server specifically designed for Bitcoin wallet operations.

## Use Cases

### AI Agent as a Service Provider
- An AI agent offering services (content creation, analysis, coding) can receive Bitcoin payments directly
- Payment verification can trigger service delivery automatically
- Transaction history provides a verifiable record of service provision

### AI-Managed Financial Operations
- AI systems can monitor and manage Bitcoin holdings
- Automated transfers based on predefined conditions or triggers
- Portfolio management and threshold-based transactions

### Cross-System Value Transfer
- AI agents can transfer value between different systems or platforms
- Enable microtransactions for granular service billing
- Support for tipping or rewarding other AI or human contributors

## Key Functionality

### Wallet Management
- Creation of new Bitcoin wallets with proper key security
- Management of multiple wallets for different purposes or users
- Recovery mechanisms for wallet backup and restoration

### Transaction Handling
- Sending Bitcoin to any valid address
- Transaction fee estimation and management
- Transaction status monitoring and confirmation tracking

### Balance and History
- Real-time balance checking across wallets
- Transaction history retrieval and filtering
- Address monitoring for incoming payments

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

## Constraints and Considerations

### Security
- Private key protection is paramount
- All communications must be encrypted
- Authorization mechanisms to prevent unauthorized access
- Audit logging for all critical operations

### Regulatory
- The server should support compliance with relevant regulations
- Transaction monitoring and reporting capabilities
- Design should accommodate future regulatory requirements

### Technical
- Performance requirements for real-time operations
- Scalability for handling multiple concurrent requests
- Reliability requirements, especially for financial transactions
- Compatibility with both testnet and mainnet environments

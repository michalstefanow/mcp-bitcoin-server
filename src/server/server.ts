import { FastMCP } from 'fastmcp';
import { CONFIG } from '../config/index.js';
import { getAddressTool } from '../tools/get-address.js';
import { getBalanceTool } from '../tools/get-balance.js';
import { sendTransactionTool } from '../tools/send-transaction.js';

// Initialize the MCP server
const server = new FastMCP({
  name: CONFIG.SERVER_NAME,
  version: CONFIG.SERVER_VERSION,
});

// Add tools
server.addTool(getAddressTool);
server.addTool(getBalanceTool);
server.addTool(sendTransactionTool);

// Start the server
server.start({
  transportType: 'stdio',
});

console.error('Bitcoin Wallet MCP server running on stdio');

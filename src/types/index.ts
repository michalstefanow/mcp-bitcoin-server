import { z } from 'zod';

// Tool parameter schemas
export const GetAddressParams = z.object({});
export const GetBalanceParams = z.object({});

export const SendTransactionParams = z.object({
  address: z.string().describe('Bitcoin address to send funds to'),
  amount: z.number().positive().describe('Amount in BTC to send'),
  fee: z.number().positive().optional().describe('Transaction fee in satoshis per byte')
});

// Infer types from schemas
export type GetAddressParams = z.infer<typeof GetAddressParams>;
export type GetBalanceParams = z.infer<typeof GetBalanceParams>;
export type SendTransactionParams = z.infer<typeof SendTransactionParams>;

// Common types
export type ToolResponse = {
  content: Array<{
    type: 'text';
    text: string;
  }>;
};

/**
 * Sanctum API utilities for anzSOL integration
 * API docs: https://learn.sanctum.so/docs/for-developers/sanctum-api
 */

const SANCTUM_API_BASE = 'https://sanctum-api.ironforge.network';
const SANCTUM_API_KEY = process.env.NEXT_PUBLIC_SANCTUM_API_KEY || '01KH924CWGBKHRGGVXDF9CAPY7';
const ANZSOL_MINT = 'ANZvHuXQh5DnBMzJ55MUyMtPxkdphgBwiPeYji2B3kxS';
const SOL_MINT = 'So11111111111111111111111111111111111111112';

export interface AnzSOLStats {
  name: string;
  symbol: string;
  tvl: number; // in lamports
  holders: number;
  solValue: number; // SOL value of 1 anzSOL
  avgApy: number;
  latestApy: number;
  managerFeeConfig: {
    dst: string;
    withholdRate: number;
  };
}

export interface SwapQuote {
  inp: string;
  out: string;
  mode: string;
  inpAmt: string;
  outAmt: string;
  swapSrcData: {
    swapSrc: string;
    data: {
      fees: Array<{
        code: string;
        amount: string;
        mint: string;
        rate: number;
      }>;
    };
  };
  tx?: string; // unsigned transaction (if signer provided)
}

/**
 * Get anzSOL statistics from Sanctum API
 */
export async function getAnzSOLStats(): Promise<AnzSOLStats | null> {
  try {
    const response = await fetch(
      `${SANCTUM_API_BASE}/lsts/${ANZSOL_MINT}?apiKey=${SANCTUM_API_KEY}`,
      { next: { revalidate: 60 } } // Cache for 1 minute
    );

    if (!response.ok) {
      throw new Error(`Sanctum API error: ${response.status}`);
    }

    const data = await response.json();
    return data.data?.[0] || null;
  } catch (error) {
    console.error('Failed to fetch anzSOL stats:', error);
    return null;
  }
}

/**
 * Get swap quote for SOL → anzSOL
 */
export async function getSwapQuote(
  amountLamports: string,
  signer?: string
): Promise<SwapQuote | null> {
  try {
    const params = new URLSearchParams({
      apiKey: SANCTUM_API_KEY,
      inp: SOL_MINT,
      out: ANZSOL_MINT,
      amt: amountLamports,
      mode: 'ExactIn',
    });

    if (signer) {
      params.append('signer', signer);
    }

    const response = await fetch(
      `${SANCTUM_API_BASE}/swap/token/order?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error(`Sanctum swap quote error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch swap quote:', error);
    return null;
  }
}

/**
 * Execute a swap transaction
 */
export async function executeSwap(signedTx: string): Promise<{ txid: string } | null> {
  try {
    const response = await fetch(
      `${SANCTUM_API_BASE}/swap/token/execute?apiKey=${SANCTUM_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ signedTx }),
      }
    );

    if (!response.ok) {
      throw new Error(`Sanctum execute error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to execute swap:', error);
    return null;
  }
}

/**
 * Format lamports to SOL with decimals
 */
export function lamportsToSOL(lamports: number | string): number {
  return Number(lamports) / 1e9;
}

/**
 * Format SOL to lamports
 */
export function solToLamports(sol: number): string {
  return Math.floor(sol * 1e9).toString();
}

/**
 * Format APY percentage
 */
export function formatAPY(apy: number): string {
  return (apy * 100).toFixed(2);
}

'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAnzSOLStats, getSwapQuote, lamportsToSOL, formatAPY, solToLamports, type AnzSOLStats, type SwapQuote } from '@/lib/sanctum';
import { ArrowDown, TrendingUp, Users, Wallet, ExternalLink } from 'lucide-react';

export default function SwapPageClient() {
  const [stats, setStats] = useState<AnzSOLStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState('1');
  const [quote, setQuote] = useState<SwapQuote | null>(null);
  const [quoteLoading, setQuoteLoading] = useState(false);

  // Fetch live stats on mount
  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    setLoading(true);
    const data = await getAnzSOLStats();
    setStats(data);
    setLoading(false);
  }

  // Fetch quote when amount changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (amount && parseFloat(amount) > 0) {
        fetchQuote();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [amount]);

  async function fetchQuote() {
    if (!amount || parseFloat(amount) <= 0) return;
    
    setQuoteLoading(true);
    const lamports = solToLamports(parseFloat(amount));
    const quoteData = await getSwapQuote(lamports);
    setQuote(quoteData);
    setQuoteLoading(false);
  }

  const tvlSOL = stats ? lamportsToSOL(stats.tvl).toFixed(2) : '—';
  const avgApyFormatted = stats ? formatAPY(stats.avgApy) : '—';
  const outputAmount = quote ? lamportsToSOL(quote.outAmt).toFixed(6) : '—';

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent">
            Get anzSOL
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stake SOL and support the ANZ Solana community while earning rewards
          </p>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">Total Value Locked</span>
              <Wallet className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {loading ? '...' : `${tvlSOL} SOL`}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              ${loading ? '...' : (parseFloat(tvlSOL) * 200).toFixed(0)}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">Average APY</span>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {loading ? '...' : `${avgApyFormatted}%`}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Staking rewards
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">Holders</span>
              <Users className="w-5 h-5 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {loading ? '...' : stats?.holders || 0}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Community members
            </div>
          </Card>
        </div>

        {/* Swap Widget */}
        <Card className="max-w-md mx-auto p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Swap SOL → anzSOL</h2>
          
          {/* Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              You pay
            </label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 pr-16 text-lg font-semibold bg-gray-100 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0.0"
                step="0.01"
                min="0"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                SOL
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center my-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
              <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div>
          </div>

          {/* Output */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              You receive
            </label>
            <div className="relative">
              <div className="w-full px-4 py-3 pr-20 text-lg font-semibold bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white">
                {quoteLoading ? '...' : outputAmount}
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                anzSOL
              </div>
            </div>
          </div>

          {/* Exchange Rate */}
          {quote && (
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-center">
              1 SOL = {(parseFloat(quote.outAmt) / parseFloat(quote.inpAmt)).toFixed(6)} anzSOL
            </div>
          )}

          {/* Connect Wallet Button */}
          <Button className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500">
            Connect Wallet
          </Button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Manager fee: {stats?.managerFeeConfig.withholdRate ? (stats.managerFeeConfig.withholdRate * 100).toFixed(1) : 2.5}%
          </p>
        </Card>

        {/* Info Section */}
        <div className="max-w-2xl mx-auto mt-12">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Why anzSOL?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Stay liquid:</strong> Use anzSOL in DeFi while earning staking rewards
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Support community:</strong> Fees fund ANZ Solana events and initiatives
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Instant swap:</strong> No waiting for epoch boundaries
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Powered by Sanctum:</strong> Battle-tested LST infrastructure
                </span>
              </li>
            </ul>
          </Card>

          <div className="mt-6 text-center">
            <a
              href="https://solscan.io/token/ANZvHuXQh5DnBMzJ55MUyMtPxkdphgBwiPeYji2B3kxS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View anzSOL on Solscan
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

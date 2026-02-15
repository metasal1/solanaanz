'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAnzSOLStats, getSwapQuote, lamportsToSOL, solToLamports, type AnzSOLStats, type SwapQuote } from '@/lib/sanctum';
import { ArrowDown, Users, Wallet, ExternalLink } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
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

          {/* Wallet Connection Buttons */}
          <div id="wallets" className="space-y-3">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center mb-3">
              Connect wallet to swap
            </p>
            
            {/* Phantom */}
            <button
              onClick={() => {
                const url = encodeURIComponent('https://solanaanz.org/lst');
                const ref = encodeURIComponent('https://solanaanz.org');
                window.open(`https://phantom.app/ul/browse/${url}?ref=${ref}`, '_blank');
              }}
              className="w-full py-4 px-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center gap-3 transition-all"
            >
              <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
                <path d="M93.937 47.592c-5.87-7.548-16.82-8.996-24.367-3.127L50.125 60.27c-1.81 1.405-4.367 1.083-5.772-.725-1.405-1.81-1.083-4.368.725-5.773l19.445-15.805c10.695-8.33 26.165-6.48 34.495 4.215 8.33 10.695 6.48 26.166-4.215 34.496L62.168 103.77c-10.695 8.33-26.166 6.48-34.496-4.215-8.33-10.695-6.48-26.165 4.215-34.495l8.33-6.48" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
              </svg>
              Open in Phantom
            </button>

            {/* Solflare */}
            <button
              onClick={() => {
                const url = encodeURIComponent('https://solanaanz.org/lst');
                const ref = encodeURIComponent('https://solanaanz.org');
                window.open(`https://solflare.com/ul/v1/browse/${url}?ref=${ref}`, '_blank');
              }}
              className="w-full py-4 px-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-lg font-semibold flex items-center justify-center gap-3 transition-all"
            >
              <svg className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor">
                <path d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256zm-79.69-357.03c3.688-4.188 8.875-6.595 14.376-6.595h158.628c10.406 0 15.938 12.5 9.063 20.469l-79.69 90.625c-3.688 4.188-8.875 6.594-14.375 6.594H105.684c-10.406 0-15.938-12.5-9.063-20.469l79.69-90.624zm0 191.374c3.688-4.187 8.875-6.594 14.376-6.594h158.628c10.406 0 15.938 12.5 9.063 20.469l-79.69 90.625c-3.688 4.188-8.875 6.594-14.375 6.594H105.684c-10.406 0-15.938-12.5-9.063-20.469l79.69-90.625z"/>
              </svg>
              Open in Solflare
            </button>

            {/* Backpack */}
            <button
              onClick={() => {
                const url = encodeURIComponent('https://solanaanz.org/lst');
                const ref = encodeURIComponent('https://solanaanz.org');
                window.open(`https://backpack.app/ul/v1/browse/${url}?ref=${ref}`, '_blank');
              }}
              className="w-full py-4 px-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-lg font-semibold flex items-center justify-center gap-3 transition-all"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
              Open in Backpack
            </button>

            {/* Jupiter */}
            <button
              onClick={() => window.open('https://jup.ag/swap/SOL-ANZvHuXQh5DnBMzJ55MUyMtPxkdphgBwiPeYji2B3kxS', '_blank')}
              className="w-full py-4 px-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-lg font-semibold flex items-center justify-center gap-3 transition-all"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Swap on Jupiter
            </button>
          </div>

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

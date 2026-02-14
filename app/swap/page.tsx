import { Metadata } from 'next';
import SwapPageClient from './SwapPageClient';

export const metadata: Metadata = {
  title: 'Swap SOL for anzSOL | Solana ANZ',
  description: 'Get anzSOL liquid staking tokens directly. Support the ANZ Solana community while earning staking rewards.',
};

export default function SwapPage() {
  return <SwapPageClient />;
}

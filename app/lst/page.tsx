import { Metadata } from 'next';
import SwapPageClient from './SwapPageClient';

export const metadata: Metadata = {
  title: 'Get anzSOL LST | Solana ANZ',
  description: 'Get anzSOL liquid staking tokens directly. Support the ANZ Solana community while earning staking rewards.',
};

export default function LSTPage() {
  return <SwapPageClient />;
}

"use client"

import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton as SolanaWalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useEffect, useState } from "react"

export function WalletMultiButton() {
  const { publicKey, wallet, disconnect } = useWallet()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Custom styling for the Solana wallet button
  return (
    <div className="wallet-adapter-button-wrapper">
      <style jsx global>{`
        .wallet-adapter-button {
          background-color: #7c3aed !important;
          border-radius: 0.375rem !important;
          height: 40px !important;
          color: white !important;
          font-family: inherit !important;
          font-size: 14px !important;
          font-weight: 500 !important;
        }
        .wallet-adapter-button:hover {
          background-color: #6d28d9 !important;
        }
        .wallet-adapter-button-trigger {
          background-color: #7c3aed !important;
        }
        .wallet-adapter-dropdown-list {
          border-radius: 0.375rem !important;
        }
        .wallet-adapter-dropdown-list-item {
          font-family: inherit !important;
          font-size: 14px !important;
        }
      `}</style>
      <SolanaWalletMultiButton />
    </div>
  )
}

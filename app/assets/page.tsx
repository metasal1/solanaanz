import type { Metadata } from "next"
import AssetsPageClient from "./AssetsPageClient"

export const metadata: Metadata = {
  title: "Brand Assets | Solana ANZ",
  description: "Official Solana ANZ brand assets, logos, and media kit",
}

export default function AssetsPage() {
  return <AssetsPageClient />
}

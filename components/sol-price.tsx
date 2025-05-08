"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

type PriceData = {
  usd: string
  aud: string
  nzd: string
  usd_change: string
  aud_change: string
  nzd_change: string
}

export default function SolPrice() {
  const [prices, setPrices] = useState<PriceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        setLoading(true)
        // Fetch SOL price in multiple currencies
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd,aud,nzd&include_24hr_change=true",
          { cache: "no-store" },
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch price: ${response.status}`)
        }

        const data = await response.json()

        if (data && data.solana && data.solana.usd && data.solana.aud && data.solana.nzd) {
          const usdPrice = data.solana.usd.toFixed(2)
          const audPrice = data.solana.aud.toFixed(2)
          const nzdPrice = data.solana.nzd.toFixed(2)

          const usdChange = data.solana.usd_24h_change ? data.solana.usd_24h_change.toFixed(2) : "0.00"
          const audChange = data.solana.aud_24h_change ? data.solana.aud_24h_change.toFixed(2) : "0.00"
          const nzdChange = data.solana.nzd_24h_change ? data.solana.nzd_24h_change.toFixed(2) : "0.00"

          setPrices({
            usd: `$${usdPrice}`,
            aud: `$${audPrice}`,
            nzd: `$${nzdPrice}`,
            usd_change: usdChange,
            aud_change: audChange,
            nzd_change: nzdChange,
          })
        } else {
          throw new Error("Invalid response format")
        }

        setError(null)
      } catch (error) {
        console.error("Error fetching SOL price:", error)
        setError("Error")
        // Fallback to static prices if fetch fails
        setPrices({
          usd: "$240.44",
          aud: "$365.22",
          nzd: "$390.15",
          usd_change: "0.00",
          aud_change: "0.00",
          nzd_change: "0.00",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchPrice()
    const interval = setInterval(fetchPrice, 120000) // Update every 2 minutes
    return () => clearInterval(interval)
  }, [])

  const renderPriceWithChange = (price: string, change: string, flag: string) => {
    const changeNum = Number.parseFloat(change)
    const changeDirection = changeNum >= 0 ? "+" : ""
    const changeClass = changeNum >= 0 ? "text-green-500" : "text-red-500"

    return (
      <div className="flex items-center gap-2">
        <span className="text-lg">{flag}</span>
        <span className="font-medium">{price}</span>
        <span className={`text-xs ${changeClass}`}>
          {changeDirection}
          {change}%
        </span>
      </div>
    )
  }

  return (
    <section className="py-4 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex justify-center">
          <Card className="border-0 shadow-sm">
            <CardContent className="flex items-center p-3">
              {loading ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">SOL</span>
                  <Loader2 className="h-4 w-4 animate-spin text-[#800080]" />
                </div>
              ) : error ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">SOL</span>
                  <span>{prices?.usd}</span>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                  <span className="text-sm font-medium logo-gradient-text">SOL</span>
                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-6">
                    {prices && renderPriceWithChange(prices.usd, prices.usd_change, "🇺🇸")}
                    {prices && renderPriceWithChange(prices.aud, prices.aud_change, "🇦🇺")}
                    {prices && renderPriceWithChange(prices.nzd, prices.nzd_change, "🇳🇿")}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

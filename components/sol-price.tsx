"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function SolPrice() {
  const [price, setPrice] = useState("$240.44")

  // In a real app, you would fetch the current SOL price
  // useEffect(() => {
  //   const fetchPrice = async () => {
  //     try {
  //       const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd')
  //       const data = await response.json()
  //       setPrice(`$${data.solana.usd.toFixed(2)}`)
  //     } catch (error) {
  //       console.error('Error fetching SOL price:', error)
  //     }
  //   }
  //
  //   fetchPrice()
  //   const interval = setInterval(fetchPrice, 60000) // Update every minute
  //
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <section className="py-8 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex justify-center">
          <Card className="border-0 shadow-sm">
            <CardContent className="flex items-center p-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Current SOL Price</p>
                <p className="text-2xl font-bold text-purple-600">{price}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

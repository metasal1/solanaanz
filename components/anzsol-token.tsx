"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy } from "lucide-react"
import { useState } from "react"

export default function AnzSolToken() {
  const [copied, setCopied] = useState(false)
  const tokenAddress = "ANZvHuXQh5DnBMzJ55MUyMtPxkdphgBwiPeYji2B3kxS"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
              Support Solana ANZ
            </h2>
            <p className="max-w-[900px] text-muted-foreground dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Help us grow the Solana ecosystem in Australia and New Zealand by purchasing anzSOL
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="border-0 shadow-md dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="text-2xl logo-gradient-text">anzSOL Token</CardTitle>
              <CardDescription>The Liquid Staking Token for the Australia / New Zealand Community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col space-y-2">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Token Address</p>
                <div className="flex items-center space-x-2">
                  <code className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md text-sm flex-1 overflow-x-auto">
                    {tokenAddress}
                  </code>
                  <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={copyToClipboard}>
                    <Copy className="h-4 w-4" />
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Benefits</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Support Aussies in the Solana ecosystem</li>
                  <li>Support Kiwis in the Solana ecosystem</li>
                  <li>Support Downunder Solana projects</li>
                </ul>
              </div>

              <div className="pt-4">
                <Button
                  className="w-full bg-[#800080] hover:bg-[#6a006a] dark:bg-[#a64ca6] dark:hover:bg-[#bf7fbf]"
                  asChild
                >
                  <a href="https://app.sanctum.so/anzSOL" target="_blank" rel="noopener noreferrer">
                    Buy anzSOL on Sanctum
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

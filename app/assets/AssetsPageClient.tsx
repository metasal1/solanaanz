"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Download } from "lucide-react"
import { useState } from "react"

export default function AssetsPageClient() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main>
        <div className="py-20 md:py-28 text-center dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl dark:text-white">
                Brand <span className="logo-gradient-text">Assets</span>
              </h1>
              <p className="max-w-[800px] text-muted-foreground dark:text-gray-400 md:text-xl">
                Official Solana ANZ brand assets, logos, and media kit for community use
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            {/* Color Palette */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Brand Colors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <ColorCard color="#2400FF" name="Primary Blue" />
                <ColorCard color="#FF0000" name="Primary Red" />
              </div>
            </div>

            {/* Logo Variations */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Logo Variations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <AssetCard
                  title="Circular Logo"
                  description="Primary circular logo with gradient"
                  imageSrc="/assets/logo.png"
                  downloadName="solana-anz-logo-circular.png"
                />
                <AssetCard
                  title="Square Logo"
                  description="Square version for social media"
                  imageSrc="/assets/logo-square.png"
                  downloadName="solana-anz-logo-square.png"
                />
                <AssetCard
                  title="Logo with Name"
                  description="Logo with SolanaANZ text"
                  imageSrc="/assets/logo-name.png"
                  downloadName="solana-anz-logo-with-name.png"
                />
                <AssetCard
                  title="LinkedIn Banner"
                  description="LinkedIn header format"
                  imageSrc="/assets/linkedin.png"
                  downloadName="solana-anz-linkedin-banner.png"
                />
              </div>
            </div>

            {/* Event Banners */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Event Banners</h2>
              <div className="max-w-4xl mx-auto">
                <AssetCard
                  title="Luma Event Banner"
                  description="Wide banner for event platforms and social media"
                  imageSrc="/assets/luma.png"
                  downloadName="solana-anz-luma-banner.png"
                  wide={true}
                />
              </div>
            </div>

            {/* Merchandise Designs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Merchandise Designs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <AssetCard
                  title="anzSOL T-Shirt Design (PNG)"
                  description="High-resolution PNG for merchandise printing"
                  imageSrc="/assets/anzsol-tshirt.png"
                  downloadName="anzsol-tshirt-design.png"
                />
                <AssetCard
                  title="anzSOL T-Shirt Design (SVG)"
                  description="Vector format for scalable merchandise"
                  imageSrc="/assets/anzsol-tshirt.svg"
                  downloadName="anzsol-tshirt-design.svg"
                />
              </div>
              <div className="text-center mt-6">
                <p className="text-muted-foreground dark:text-gray-400 text-sm">
                  Perfect for t-shirts, hoodies, and other apparel featuring the anzSOL brand
                </p>
              </div>
            </div>

            {/* Usage Guidelines */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Usage Guidelines</h2>
              <div className="max-w-4xl mx-auto">
                <Card className="border-0 shadow-md dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle>Brand Guidelines</CardTitle>
                    <CardDescription>Please follow these guidelines when using Solana ANZ assets</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 dark:text-white">✅ Do:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground dark:text-gray-300">
                        <li>Use the official logos provided on this page</li>
                        <li>Maintain the original aspect ratio and proportions</li>
                        <li>Use on backgrounds that provide sufficient contrast</li>
                        <li>Credit Solana ANZ when using our assets</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 dark:text-white">❌ Don't:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground dark:text-gray-300">
                        <li>Modify, distort, or alter the logos</li>
                        <li>Change the colors or gradient</li>
                        <li>Use low-resolution or pixelated versions</li>
                        <li>Use for commercial purposes without permission</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Need Custom Assets?</h2>
              <p className="text-muted-foreground dark:text-gray-400 mb-6">
                Contact us if you need custom variations or have questions about brand usage
              </p>
              <Button className="bg-[#800080] hover:bg-[#6a006a] dark:bg-[#a64ca6] dark:hover:bg-[#bf7fbf]" asChild>
                <a href="mailto:gm@metasal.xyz?subject=Solana%20ANZ%20Brand%20Assets">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function ColorCard({ color, name }: { color: string; name: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="border-0 shadow-md dark:bg-gray-800">
      <CardContent className="p-6">
        <div className="w-full h-24 rounded-lg mb-4" style={{ backgroundColor: color }} />
        <h3 className="font-semibold mb-2 dark:text-white">{name}</h3>
        <div className="flex items-center justify-between">
          <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{color}</code>
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className="flex items-center gap-1 bg-transparent"
          >
            <Copy className="h-3 w-3" />
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function AssetCard({
  title,
  description,
  imageSrc,
  downloadName,
  wide = false,
}: {
  title: string
  description: string
  imageSrc: string
  downloadName: string
  wide?: boolean
}) {
  return (
    <Card className={`border-0 shadow-md dark:bg-gray-800 ${wide ? "col-span-full" : ""}`}>
      <CardContent className="p-6">
        <div
          className={`relative ${wide ? "h-32" : "h-24"} mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden`}
        >
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-contain p-2" />
        </div>
        <h3 className="font-semibold mb-2 dark:text-white">{title}</h3>
        <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">{description}</p>
        <Button variant="outline" size="sm" className="w-full flex items-center gap-2 bg-transparent" asChild>
          <a href={imageSrc} download={downloadName}>
            <Download className="h-3 w-3" />
            Download
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

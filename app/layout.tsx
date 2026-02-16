import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import { WalletContextProvider } from "@/components/wallet-provider"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Solana ANZ - Australia & New Zealand",
  description: "Your Australian and New Zealand hub for all things Solana",
  metadataBase: new URL("https://solanaANZ.org"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://solanaANZ.org",
    title: "Solana ANZ - Australia & New Zealand",
    description: "Your Australian and New Zealand hub for all things Solana",
    siteName: "Solana ANZ",
    images: [
      {
        url: "/anz-opengraph.png",
        width: 1200,
        height: 630,
        alt: "Solana Australia & New Zealand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana ANZ - Australia & New Zealand",
    description: "Your Australian and New Zealand hub for all things Solana",
    images: ["/anz-opengraph.png"],
    creator: "@solanaanz",
  },
  icons: {
    icon: "/anz-logo.png",
    apple: "/anz-logo.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          <WalletContextProvider>
            <Suspense>{children}</Suspense>
          </WalletContextProvider>
        </ThemeProvider>
        <Analytics />
        <Script
          src="https://stats.sal.fun/script.js"
          data-website-id="060c5fef-26c7-4c92-89e4-a4bbf3d1d96d"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, ExternalLink } from "lucide-react"

export default function HackarooBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem("hackaroo-banner-dismissed")
    if (!dismissed) {
      setIsVisible(true)
    }
  }, [])

  const dismissBanner = () => {
    setIsVisible(false)
    localStorage.setItem("hackaroo-banner-dismissed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-blue-500 py-3 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold text-sm md:text-base">🚀 Hackaroo.xyz</span>
              <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">COMING SOON</span>
            </div>
            <p className="text-white/90 text-sm hidden sm:block">
              The ultimate hackathon platform for the Solana ecosystem
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              href="https://hackaroo.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-200 transition-colors duration-300 flex items-center gap-1 text-sm"
            >
              <span className="hidden sm:inline">Learn More</span>
              <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
            </Link>
            <button
              onClick={dismissBanner}
              className="text-white/80 hover:text-white transition-colors duration-300 p-1"
              aria-label="Dismiss banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

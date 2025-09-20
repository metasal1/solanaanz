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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4 bg-black border-2 border-white rounded-lg shadow-2xl">
        <button
          onClick={dismissBanner}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors duration-300 p-1 z-10"
          aria-label="Dismiss banner"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="px-6 py-8 md:px-12 md:py-12 text-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-bold text-white">🚀 HACKAROO</h1>
              <div className="inline-block bg-white text-black px-4 py-2 rounded-lg text-lg md:text-xl font-bold">
                ONLINE HACKATHON NOW ON!
              </div>
            </div>

            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Join developers from around the world in building the future on Solana. Prizes, mentorship, and glory
              await!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://hackaroo.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black hover:bg-gray-200 transition-colors duration-300 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 shadow-lg"
              >
                Jump In Now
                <ExternalLink className="h-5 w-5" />
              </Link>

              <div className="text-white/70 text-sm">hackaroo.xyz</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

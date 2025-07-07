"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CongratulationsPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Check if popup has been shown before (using localStorage)
    const hasSeenPopup = localStorage.getItem("solana-anz-congratulations-popup")

    if (!hasSeenPopup) {
      // Show popup after a short delay
      const showTimer = setTimeout(() => {
        setIsVisible(true)
        setIsAnimating(true)
      }, 1000)

      // Auto-hide after 8 seconds
      const hideTimer = setTimeout(() => {
        handleClose()
      }, 9000) // 1 second delay + 8 seconds display

      return () => {
        clearTimeout(showTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
      // Mark as seen so it doesn't show again
      localStorage.setItem("solana-anz-congratulations-popup", "true")
    }, 300) // Wait for animation to complete
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Popup Content */}
      <div
        className={`relative max-w-4xl w-full transform transition-all duration-300 ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full"
          onClick={handleClose}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>

        {/* Congratulations Banner */}
        <div className="relative w-full rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/congratulations-banner.png"
            alt="Congratulations to Solana ANZ teams on Colosseum 2025 Breakout Hackathon placement"
            width={1200}
            height={675}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Additional Info */}
        <div className="mt-4 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
            <p className="text-sm text-muted-foreground dark:text-gray-300">
              🎉 Celebrating our amazing Solana ANZ community projects in the Colosseum 2025 Breakout Hackathon!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-3 text-xs">
              <a
                href="https://scrim.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#800080] hover:text-[#6a006a] dark:text-[#a64ca6] dark:hover:text-[#bf7fbf] font-medium"
              >
                scrim.fun
              </a>
              <a
                href="https://www.obeliskprotocol.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#800080] hover:text-[#6a006a] dark:text-[#a64ca6] dark:hover:text-[#bf7fbf] font-medium"
              >
                ObeliskProtocol.io
              </a>
              <a
                href="https://www.casinoroyalesol.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#800080] hover:text-[#6a006a] dark:text-[#a64ca6] dark:hover:text-[#bf7fbf] font-medium"
              >
                Casino Royale
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function Events() {
  const [iframeHeight, setIframeHeight] = useState(450)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Adjust iframe height based on screen size
  useEffect(() => {
    setMounted(true)

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIframeHeight(600)
      } else {
        setIframeHeight(450)
      }
    }

    // Set initial height
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) {
    return null
  }

  const isDarkMode = theme === "dark" || resolvedTheme === "dark"

  return (
    <section id="events" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
              Upcoming Events
            </h2>
            <p className="max-w-[900px] text-muted-foreground dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join us at our upcoming Solana events across Australia and New Zealand
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="w-full">
            <iframe
              src={`https://lu.ma/embed/calendar/cal-5AwelwAyyUTWlbS/events${isDarkMode ? "?dark=1" : ""}`}
              width="100%"
              height={iframeHeight}
              frameBorder="0"
              style={{
                border: isDarkMode ? "1px solid rgba(75, 85, 99, 0.5)" : "1px solid #bfcbda88",
                borderRadius: "4px",
                boxShadow: isDarkMode
                  ? "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)"
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="Solana ANZ Events Calendar"
            />
          </div>

          <div className="w-full">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/sal-presenting.webp" alt="Solana ANZ community presentation" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">Community Workshops</h3>
                <p className="text-white/90 mt-2">
                  Our events feature expert presentations, hands-on workshops, and networking opportunities for
                  developers and enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[#800080] text-[#800080] hover:bg-[#800080]/10 dark:border-[#a64ca6] dark:text-[#a64ca6] dark:hover:bg-[#a64ca6]/10"
            asChild
          >
            <a href="https://lu.ma/solanaanz" target="_blank" rel="noopener noreferrer">
              View All Events
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

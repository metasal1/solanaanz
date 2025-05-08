"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Events() {
  const [iframeHeight, setIframeHeight] = useState(450)

  // Adjust iframe height based on screen size
  useEffect(() => {
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

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join us at our upcoming Solana events across Australia and New Zealand
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-4xl">
            <iframe
              src="https://lu.ma/embed/calendar/cal-5AwelwAyyUTWlbS/events"
              width="100%"
              height={iframeHeight}
              frameBorder="0"
              style={{
                border: "1px solid #bfcbda88",
                borderRadius: "4px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="Solana ANZ Events Calendar"
            />
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="border-[#800080] text-[#800080] hover:bg-[#800080]/10" asChild>
            <a href="https://lu.ma/solanaanz" target="_blank" rel="noopener noreferrer">
              View All Events
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

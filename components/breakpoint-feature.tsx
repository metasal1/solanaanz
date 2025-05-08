import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BreakpointFeature() {
  return (
    <section className="py-8 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative w-full md:w-1/2 h-[200px] md:h-[250px] rounded-lg overflow-hidden">
            <Image src="/breakpoint-banner.jpeg" alt="Breakpoint 2025 in Abu Dhabi" fill className="object-cover" />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <div className="relative h-12 w-48 md:h-16 md:w-64 mb-2">
              <Image src="/breakpoint-logo.png" alt="Breakpoint Logo" fill className="object-contain" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white">ABU DHABI • DECEMBER 11-13, 2025</h2>
            <p className="text-white text-sm md:text-base">
              Join the Aussie & Kiwi delegation at Solana's biggest global event in Abu Dhabi from December 11-13, 2025.
              Connect with fellow ANZ community members, showcase your projects, and represent our region on the global
              stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                asChild
              >
                <a href="https://bp.solanaanz.org" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10" asChild>
                <a href="https://bp.solanaanz.org" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function BreakpointBanner() {
  return (
    <div className="w-full bg-black py-2 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <Link
          href="https://bp.solanaanz.org"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full border-2 border-purple-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-400 to-teal-300 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs md:text-sm font-bold text-white">BP</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-white">
                <span className="bg-gradient-to-r from-purple-500 via-blue-400 to-teal-300 bg-clip-text text-transparent">
                  BREAKPOINT 2025
                </span>
                <span className="hidden md:inline"> • ABU DHABI • 11-13 DEC</span>
              </h3>
              <p className="text-xs text-gray-300 hidden sm:block">Join Aussies & Kiwis at Solana's biggest event</p>
            </div>
          </div>
          <div className="flex items-center text-white group-hover:text-purple-400 transition-colors duration-300">
            <span className="text-xs md:text-sm mr-1">View</span>
            <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </Link>
      </div>
    </div>
  )
}

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function EventBanner() {
  return (
    <div className="w-full bg-black py-2 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <Link
          href="https://lu.ma/solanaANZ"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-sm md:text-base font-bold text-white">
                <span className="text-white">Upcoming Solana ANZ Event</span>
              </h3>
              <p className="text-xs text-gray-300 hidden sm:block">Join the community for our next meetup</p>
            </div>
          </div>
          <div className="flex items-center text-white group-hover:text-purple-400 transition-colors duration-300">
            <span className="text-xs md:text-sm mr-1">Register</span>
            <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </Link>
      </div>
    </div>
  )
}

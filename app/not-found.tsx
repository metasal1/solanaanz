import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center space-y-8 py-16">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative h-24 w-24 md:h-32 md:w-32">
              <Image
                src="/anz-logo.png"
                alt="Solana ANZ Logo"
                fill
                className="object-contain opacity-80"
              />
            </div>
          </div>

          {/* 404 Message */}
          <div className="space-y-4">
            <h1 className="text-8xl md:text-9xl font-bold">
              <span className="bg-gradient-to-r from-[#2400FF] via-[#800080] to-[#FF0000] bg-clip-text text-transparent">
                404
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Page Not Found
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Looks like this page went down under... permanently. Let's get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#2400FF] to-[#800080] hover:from-[#1a00cc] hover:to-[#660066] text-white font-semibold px-8"
              >
                Go Home
              </Button>
            </Link>
            <Link href="/projects">
              <Button 
                size="lg"
                variant="outline"
                className="border-[#2400FF] text-[#2400FF] hover:bg-[#2400FF] hover:text-white dark:border-[#800080] dark:text-[#800080] dark:hover:bg-[#800080] font-semibold px-8"
              >
                Browse Projects
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Quick links:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                href="/#events" 
                className="text-[#2400FF] hover:text-[#800080] dark:text-[#a64ca6] dark:hover:text-[#FF0000] transition-colors font-medium"
              >
                Events
              </Link>
              <Link 
                href="/lst#wallets" 
                className="text-[#2400FF] hover:text-[#800080] dark:text-[#a64ca6] dark:hover:text-[#FF0000] transition-colors font-medium"
              >
                anzSOL
              </Link>
              <Link 
                href="/#team" 
                className="text-[#2400FF] hover:text-[#800080] dark:text-[#a64ca6] dark:hover:text-[#FF0000] transition-colors font-medium"
              >
                Team
              </Link>
              <Link 
                href="/#sponsors" 
                className="text-[#2400FF] hover:text-[#800080] dark:text-[#a64ca6] dark:hover:text-[#FF0000] transition-colors font-medium"
              >
                Sponsors
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

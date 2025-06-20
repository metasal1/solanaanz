"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Airdrops", href: isHomePage ? "#airdrops" : "/#airdrops" },
    { name: "Partners", href: isHomePage ? "#partners" : "/#partners" },
    { name: "Team", href: isHomePage ? "#team" : "/#team" },
    { name: "Merch", href: isHomePage ? "#merch" : "/#merch" },
    { name: "FAQs", href: isHomePage ? "#faqs" : "/#faqs" },
    { name: "Events", href: isHomePage ? "#events" : "/#events" },
    { name: "Sponsors", href: isHomePage ? "#sponsors" : "/#sponsors" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full clean-nav">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <Image src="/anz-logo.png" alt="Solana ANZ Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold logo-gradient-text">Solana A/NZ</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-[#800080] dark:text-gray-200 dark:hover:text-[#a64ca6] transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6 bg-white dark:bg-gray-950">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-[#800080] dark:text-gray-200 dark:hover:text-[#a64ca6] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

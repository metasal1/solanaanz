import Link from "next/link"
import { Twitter, Send, Phone, Mail, Globe, Linkedin, Facebook, Youtube, TicketIcon as Tiktok } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 dark:bg-gray-950 dark:text-gray-300">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Solana A/NZ</h3>
            <p className="text-gray-400">Your Australian and New Zealand hub for all things Solana.</p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/solanaanz" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://t.me/solanaANZ" className="text-gray-400 hover:text-white">
                <Send className="h-5 w-5" />
                <span className="sr-only">Telegram</span>
              </Link>
              <Link href="https://github.com/solana-labs" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/company/solanaanz" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.facebook.com/solanaanz" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.tiktok.com/@solanaanz" className="text-gray-400 hover:text-white">
                <Tiktok className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Link>
              <Link href="https://www.youtube.com/@solanaANZ" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/assets" className="text-gray-400 hover:text-white">
                  Brand Assets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Airdrops
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Merch
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="https://hackaroo.xyz"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hackaroo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ecosystem</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://solana.com" className="text-gray-400 hover:text-white">
                  Solana.com
                </Link>
              </li>
              <li>
                <Link href="https://solana.org" className="text-gray-400 hover:text-white">
                  Solana Foundation
                </Link>
              </li>
              <li>
                <Link href="https://solana.stackexchange.com" className="text-gray-400 hover:text-white">
                  Solana Developers
                </Link>
              </li>
              <li>
                <Link href="https://solana.org/grants" className="text-gray-400 hover:text-white">
                  Grants Program
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-gray-400">1800 SOLANA</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <a href="mailto:info@solanaanz.org" className="text-gray-400 hover:text-white">
                  info@solanaanz.org
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-gray-400" />
                <a href="https://solanaANZ.org" className="text-gray-400 hover:text-white">
                  solanaANZ.org
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin className="h-4 w-4 mr-2 text-gray-400" />
                <a href="https://www.linkedin.com/company/solanaanz" className="text-gray-400 hover:text-white">
                  linkedin.com/company/solanaanz
                </a>
              </li>
              <li className="flex items-center">
                <Facebook className="h-4 w-4 mr-2 text-gray-400" />
                <a href="https://www.facebook.com/solanaanz" className="text-gray-400 hover:text-white">
                  facebook.com/solanaanz
                </a>
              </li>
              <li className="flex items-center">
                <Tiktok className="h-4 w-4 mr-2 text-gray-400" />
                <a href="https://www.tiktok.com/@solanaanz" className="text-gray-400 hover:text-white">
                  tiktok.com/@solanaanz
                </a>
              </li>
              <li className="flex items-center">
                <Youtube className="h-4 w-4 mr-2 text-gray-400" />
                <a href="https://www.youtube.com/@solanaANZ" className="text-gray-400 hover:text-white">
                  youtube.com/@solanaANZ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Solana ANZ. All rights reserved.</p>
          <Link href="https://metasal.xyz" className="text-gray-400 hover:text-white mt-4 md:mt-0">
            metasal.xyz
          </Link>
        </div>
      </div>
    </footer>
  )
}

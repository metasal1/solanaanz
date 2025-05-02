import Link from "next/link"
import { Twitter, Send, Github, Phone, Mail, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
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
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
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
                <Link href="https://soldev.app" className="text-gray-400 hover:text-white">
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
                <Send className="h-4 w-4 mr-2 text-gray-400" />
                <a href="https://t.me/solanaANZ" className="text-gray-400 hover:text-white">
                  t.me/solanaANZ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Solana ANZ. All rights reserved.</p>
          <Link href="https://metasal.xyz" className="text-gray-400 hover:text-white mt-4 md:mt-0">
            metasal.xyz
          </Link>
        </div>
      </div>
    </footer>
  )
}

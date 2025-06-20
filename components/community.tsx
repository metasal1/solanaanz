import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Twitter, Send } from "lucide-react"

export default function Community() {
  return (
    <section className="py-16 modern-gradient text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join the Solana ANZ Community
              </h2>
              <p className="max-w-[600px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Come join the chatter on Telegram and connect with Solana enthusiasts across Australia and New Zealand
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-[#800080] hover:bg-gray-100 font-medium" asChild>
                <a
                  href="https://t.me/solanaANZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Join Telegram
                </a>
              </Button>
              <Button size="lg" className="bg-[#1DA1F2] text-white hover:bg-[#1a94da] border-0 font-medium" asChild>
                <a
                  href="https://twitter.com/solanaanz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Twitter className="h-5 w-5" />
                  Follow on Twitter
                </a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/event-google-melbourne.png"
                alt="Solana ANZ event at Google Melbourne"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Community Workshops & Events</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

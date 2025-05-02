import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Community() {
  return (
    <section className="py-16 bg-purple-600 text-white">
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
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
                <a href="https://t.me/solanaanz" target="_blank" rel="noopener noreferrer">
                  Join Telegram
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <a href="https://twitter.com/solanaanz" target="_blank" rel="noopener noreferrer">
                  Follow on Twitter
                </a>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
            <Image src="/community-image.png" alt="Solana ANZ Community" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

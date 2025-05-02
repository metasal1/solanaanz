import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Sponsors() {
  const sponsors = [
    {
      name: "Solana Foundation",
      logo: "/sponsors/solana-foundation.png",
      url: "https://solana.org",
    },
    {
      name: "Solana",
      logo: "/sponsors/solana.png",
      url: "https://solana.com",
    },
    {
      name: "Validator.com",
      logo: "/sponsors/validator.png",
      url: "https://validator.com",
    },
    {
      name: "Flash Trade",
      logo: "/sponsors/flash-trade.png",
      url: "https://flash.trade",
    },
    {
      name: "The Send Coin",
      logo: "/sponsors/send-coin.png",
      url: "https://thesendcoin.com",
    },
    {
      name: "Blinks.gg",
      logo: "/sponsors/blinks.png",
      url: "https://blinks.gg",
    },
    {
      name: "Supa Aggregator",
      logo: "/sponsors/supa.png",
      url: "https://supa.ag",
    },
    {
      name: "Hey Hal Wallet",
      logo: "/sponsors/hey-hal.png",
      url: "https://heyhal.xyz",
    },
    {
      name: "Legions",
      logo: "/sponsors/legions.png",
      url: "https://legions.cc",
    },
    {
      name: "Solana Name Service",
      logo: "/sponsors/sns.png",
      url: "https://sns.id",
    },
    {
      name: "Alldomains",
      logo: "/sponsors/alldomains.png",
      url: "https://all.domains",
    },
  ]

  return (
    <section id="sponsors" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Sponsors</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Solana ANZ is proudly supported by these amazing organizations
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-12 md:grid-cols-3 lg:grid-cols-4">
          {sponsors.map((sponsor) => (
            <Card key={sponsor.name} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <CardContent className="flex flex-col items-center justify-center p-6 h-[120px]">
                  <div className="relative h-12 w-full mb-3">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center">{sponsor.name}</p>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

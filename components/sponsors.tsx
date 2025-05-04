import { Card, CardContent } from "@/components/ui/card"

export default function Sponsors() {
  const sponsors = [
    {
      name: "Solana Foundation",
      url: "https://solana.org",
    },
    {
      name: "Validator.com",
      url: "https://validator.com",
    },
    {
      name: "Flash Trade",
      url: "https://flash.trade",
    },
    {
      name: "The Send Coin",
      url: "https://thesendcoin.com",
    },
    {
      name: "Blinks.gg",
      url: "https://blinks.gg",
    },
    {
      name: "Supa Aggregator",
      url: "https://supa.ag",
    },
    {
      name: "Hey Hal Wallet",
      url: "https://heyhal.xyz",
    },
    {
      name: "Legion",
      url: "https://legion.cc",
    },
    {
      name: "Solana Name Service",
      url: "https://sns.id",
    },
    {
      name: "AllDomains.id",
      url: "https://alldomains.id",
    },
    {
      name: "Aurascope.app",
      url: "https://aurascope.app",
    },
    {
      name: "Steak.net",
      url: "https://steak.net",
    },
    {
      name: "Mtn Capital",
      url: "https://mtncapital.xyz",
    },
    {
      name: "Menace Finance",
      url: "https://menace.finance",
    },
    {
      name: "DAO Under",
      url: "https://daounder.com",
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
                  <div className="flex items-center justify-center h-full w-full">
                    <p className="text-lg font-medium text-center text-purple-600 hover:text-purple-700">
                      {sponsor.name}
                    </p>
                  </div>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

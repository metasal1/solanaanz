import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Sponsors() {
  const sponsors = [
    {
      name: "Solana Foundation",
      url: "https://solana.org",
      logo: "/sponsors/solana.jpg",
    },
    {
      name: "Validator.com",
      url: "https://validator.com",
      logo: "/sponsors/validator.jpg",
    },
    {
      name: "Flash Trade",
      url: "https://www.flash.trade?referral=solanaanz",
      logo: "/sponsors/flashtrade.jpg",
      description:
        "The most advanced perpetual futures trading platform on Solana. Trade with up to 100x leverage on crypto, commodities, and forex pairs.",
      featured: true,
      screenshot: "/projects/flashtrade-screenshot.jpeg",
      tags: ["Perpetuals", "Trading", "DeFi", "Leverage"],
    },
    {
    },
    {
      name: "Klout",
      url: "https://klout.gg",
      logo: "/sponsors/klout.png",
    },
    {
      name: "Legion",
      url: "https://legion.cc",
      logo: "/sponsors/legion.jpg",
    },
    {
      name: "Solana Name Service",
      url: "https://www.sns.id/?affiliateRef=metasal",
      logo: "/sponsors/sns.jpg",
    },
    {
      name: "AllDomains.id",
      url: "https://alldomains.id",
      logo: "/sponsors/alldomains.jpg",
    },
    {
      name: "Aurascope.app",
      url: "https://aurascope.app",
      logo: "/sponsors/aurascope.jpg",
    },
    {
      name: "Steak.net",
      url: "https://steak.net",
      logo: "/sponsors/steaknet.jpg",
    },
    {
      name: "InStep",
      url: "https://instep.fit",
      logo: "/partners/instep.jpeg",
    },
    {
      name: "SeekerTracker",
      url: "https://seekertracker.com",
      logo: "/sponsors/seekertracker.jpg",
    },
  ]

  return (
    <section id="sponsors" className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
              Our Sponsors
            </h2>
            <p className="max-w-[900px] text-muted-foreground dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Solana ANZ is proudly supported by these amazing organizations
            </p>
          </div>
        </div>

        {/* Featured Major Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 dark:text-white">Major Sponsors</h3>
          <div className="max-w-4xl mx-auto">
            {sponsors
              .filter((sponsor) => sponsor.featured)
              .map((sponsor) => (
                <div key={sponsor.name} className="modern-card p-8 mb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                          <Image
                            src={sponsor.logo || "/placeholder.svg"}
                            alt={`${sponsor.name} logo`}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-[#800080] dark:text-[#a64ca6]">{sponsor.name}</h4>
                          <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Major Sponsor
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground dark:text-gray-300 mb-4 text-lg">{sponsor.description}</p>
                      {sponsor.tags && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {sponsor.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-sm font-medium rounded-full bg-[#800080]/10 text-[#800080] dark:bg-[#a64ca6]/20 dark:text-[#a64ca6]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <Button
                        className="bg-[#800080] hover:bg-[#6a006a] dark:bg-[#a64ca6] dark:hover:bg-[#bf7fbf] text-white"
                        asChild
                      >
                        <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                          Visit Platform
                        </a>
                      </Button>
                    </div>
                    {sponsor.screenshot && (
                      <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <Image
                          src={sponsor.screenshot || "/placeholder.svg"}
                          alt={`${sponsor.name} platform screenshot`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8 dark:text-white">Supporting Sponsors</h3>
        <div className="grid grid-cols-2 gap-8 mt-12 md:grid-cols-3 lg:grid-cols-5">
          {sponsors
            .filter((sponsor) => !sponsor.featured)
            .map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-6"
              >
                {sponsor.logo ? (
                  <div className="relative h-20 w-20 flex items-center justify-center mb-4 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:brightness-110"
                    />
                  </div>
                ) : (
                  <div className="relative h-20 w-20 flex items-center justify-center mb-4 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <div className="flex items-center justify-center h-full w-full">
                      <span className="text-xl font-bold text-[#800080] dark:text-[#a64ca6]">
                        {sponsor.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                )}
                <h3 className="text-sm font-medium text-center mt-2 text-[#0000FF] dark:text-[#4d4dff] group-hover:text-[#800080] dark:group-hover:text-[#a64ca6] transition-colors duration-300">
                  {sponsor.name}
                </h3>
              </a>
            ))}
        </div>
      </div>
    </section>
  )
}

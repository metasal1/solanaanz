import Image from "next/image"

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
      url: "https://flash.trade",
      logo: "/sponsors/flashtrade.jpg",
    },
    {
      name: "The Send Coin",
      url: "https://thesendcoin.com",
      logo: "/sponsors/thesendcoin.jpg",
    },
    {
      name: "Blinks.gg",
      url: "https://blinks.gg",
      logo: "/sponsors/blinksgg.jpg",
    },
    {
      name: "Supa Aggregator",
      url: "https://supa.ag",
      logo: "/sponsors/supa.jpeg",
    },
    {
      name: "Crypto Tax Calculator",
      url: "https://cryptotaxcalculator.io/sg/",
      logo: "/sponsors/cryptotaxcalculator.png",
      description: "Sort out your crypto tax nightmare with the most degen-friendly calculator in the space",
      deal: "20% off ALL CTC plans (first-year only). Use code ANZSOL at checkout!",
    },
    {
      name: "Orca",
      url: "https://orca.so",
      logo: "/sponsors/orca.png",
    },
    {
      name: "Hey Hal Wallet",
      url: "https://heyhal.xyz",
      logo: "/sponsors/heyhal.jpg",
    },
    {
      name: "Legion",
      url: "https://legion.cc",
      logo: "/sponsors/legion.jpg",
    },
    {
      name: "Solana Name Service",
      url: "https://sns.id",
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
      name: "Mtn Capital",
      url: "https://mtncapital.xyz",
      logo: "/partners/mtndao.jpg", // Using the same logo as MtnDAO
    },
    {
      name: "Menace Finance",
      url: "https://menace.finance",
      logo: "/sponsors/menace.jpg",
    },
    {
      name: "Paragon.gdn",
      url: "https://paragon.gdn",
      logo: "/sponsors/paragon.jpg",
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
        <div className="grid grid-cols-2 gap-8 mt-12 md:grid-cols-3 lg:grid-cols-5">
          {sponsors.map((sponsor) => (
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

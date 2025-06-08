import Image from "next/image"

export default function Partners() {
  const partners = [
    {
      name: "OnionDAO",
      url: "https://oniondao.org",
      logo: "/partners/oniondao.jpg",
    },
    {
      name: "MtnDAO",
      url: "https://mtndao.xyz",
      logo: "/partners/mtndao.jpg",
    },
    {
      name: "Colosseum",
      url: "https://colosseum.org",
      logo: "/partners/colosseum.jpg",
    },
    {
      name: "Solana Turbine",
      url: "https://solana.org/turbine",
      logo: "/partners/turbine.jpg",
    },
    {
      name: "Superteam",
      url: "https://superteam.fun",
      logo: "/partners/superteam.jpg",
    },
    {
      name: "DAOUNDER",
      url: "https://daounder.com",
      logo: "/partners/daounder.png",
    },
    {
      name: "Solana Summit",
      url: "https://solanasummit.org",
      logo: "/partners/summit.jpg",
    },
    {
      name: "Upside DAO",
      url: "https://upsidedao.com.au",
      logo: "/partners/upside.png",
    },
    {
      name: "Blueshift",
      url: "https://blueshift.gg",
      logo: "/partners/blueshift.jpeg",
    },
    {
      name: "InStep",
      url: "https://instep.fit",
      logo: "/partners/instep.png",
    },
  ]

  return (
    <section id="partners" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
              Our Partners
            </h2>
            <p className="max-w-[900px] text-muted-foreground dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Collaborating with these amazing organizations to grow the Solana ecosystem in ANZ
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-12 md:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <a key={partner.name} href={partner.url} target="_blank" rel="noopener noreferrer" className="group">
              {partner.logo ? (
                <div className="relative h-20 w-20 flex items-center justify-center mb-4 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:brightness-110"
                  />
                </div>
              ) : (
                <div className="relative h-20 w-20 flex items-center justify-center mb-4 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800 mx-auto">
                  <div className="flex items-center justify-center h-full w-full">
                    <span className="text-xl font-bold text-[#0000FF] dark:text-[#4d4dff]">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                </div>
              )}
              <h3 className="text-sm font-medium text-center mt-2 text-[#0000FF] dark:text-[#4d4dff] group-hover:text-[#800080] dark:group-hover:text-[#a64ca6] transition-colors duration-300">
                {partner.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

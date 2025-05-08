import { Card, CardContent } from "@/components/ui/card"

export default function Partners() {
  const partners = [
    {
      name: "OnionDAO",
      url: "https://oniondao.org",
    },
    {
      name: "MtnDAO",
      url: "https://mtndao.xyz",
    },
    {
      name: "Colosseum",
      url: "https://colosseum.org",
    },
    {
      name: "Solana Turbine",
      url: "https://solana.org/turbine",
    },
    {
      name: "Superteam",
      url: "https://superteam.fun",
    },
    {
      name: "DAOUNDER",
      url: "https://daounder.com",
    },
    {
      name: "Solana Summit",
      url: "https://solanasummit.org",
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
        <div className="grid grid-cols-2 gap-6 mt-12 md:grid-cols-3">
          {partners.map((partner) => (
            <Card
              key={partner.name}
              className="border-0 shadow-sm hover:shadow-md transition-shadow dark:bg-gray-900 dark:shadow-none dark:hover:bg-gray-800"
            >
              <a href={partner.url} target="_blank" rel="noopener noreferrer">
                <CardContent className="flex flex-col items-center justify-center p-6 h-[120px]">
                  <div className="flex items-center justify-center h-full w-full">
                    <p className="text-lg font-medium text-center text-[#0000FF] hover:text-[#0000cc] dark:text-[#4d4dff] dark:hover:text-[#8080ff]">
                      {partner.name}
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

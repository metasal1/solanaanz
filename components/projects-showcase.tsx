import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe } from "lucide-react"

type Project = {
  name: string
  description: string
  logo: string
  screenshot?: string
  website: string
  developer: {
    name: string
    website: string
    logo?: string
  }
  tags: string[]
  featured: boolean
}

export default function ProjectsShowcase() {
  const projects: Project[] = [
    {
      name: "Casino Royale",
      description:
        "A fully on-chain casino gaming platform built on Solana, featuring pixelated retro-style games including poker, blackjack, and roulette with provably fair gameplay.",
      logo: "/projects/casino-royale-logo.png",
      screenshot: "/projects/casino-royale-website.jpeg",
      website: "https://www.casinoroyalesol.io/",
      developer: {
        name: "Obelisk Protocol",
        website: "https://www.obeliskprotocol.io/",
        logo: "/projects/obelisk-team.webp",
      },
      tags: ["Gaming", "DeFi", "Casino"],
      featured: true,
    },
    {
      name: "Scrim.fun",
      description:
        "An esports platform that enables competitive gaming tournaments and matchmaking on Solana, with integrated token rewards and NFT prizes.",
      logo: "/projects/scrim-logo.png",
      website: "https://scrim.fun",
      developer: {
        name: "Plexzy",
        website: "https://plexzy.com",
      },
      tags: ["Gaming", "Esports", "Tournaments"],
      featured: true,
    },
    {
      name: "SupaPump.fun",
      description:
        "The ultimate Solana token creator platform featuring an automated pump bot. Create and launch tokens effortlessly with advanced tools and Telegram integration.",
      logo: "/sponsors/supa.png",
      screenshot: "/projects/supapump-screenshot.jpeg",
      website: "https://supapump.fun",
      developer: {
        name: "Supa Aggregator",
        website: "https://supa.ag",
      },
      tags: ["Token Creator", "DeFi", "Tools"],
      featured: false,
    },
    {
      name: "Aurascope",
      description:
        "A revolutionary social app that focuses on emotions and feelings rather than likes. Snap a selfie to find your aura and connect with others based on authentic emotional experiences.",
      logo: "/sponsors/aurascope.jpg",
      screenshot: "/projects/aurascope-screenshot.jpeg",
      website: "https://aurascopeapp.com",
      developer: {
        name: "Aurascope Team",
        website: "https://aurascopeapp.com",
      },
      tags: ["Social", "AI", "Mobile App"],
      featured: false,
    },
    {
      name: "Zeak Navigator",
      description:
        "Power up your wallet and unlock the future with cutting-edge zkCompression technology. Manage compressed tokens effortlessly with fast, secure, and cost-effective solutions.",
      logo: "/zn-logo-green-tech.png",
      screenshot: "/projects/zeaknavigator-screenshot.jpeg",
      website: "https://zeaknavigator.com",
      developer: {
        name: "Zeak Team",
        website: "https://zeaknavigator.com",
      },
      tags: ["Wallet", "zkCompression", "Tools"],
      featured: false,
    },
    {
      name: "Stables.fun",
      description:
        "A comprehensive stablecoin platform on Solana providing easy access to stable digital assets with advanced trading and management features for the ANZ market.",
      logo: "/stables-finance-logo.png",
      website: "https://stables.fun",
      developer: {
        name: "Stables Team",
        website: "https://stables.fun",
      },
      tags: ["Stablecoins", "DeFi", "Trading"],
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        {featuredProjects.length > 0 && (
          <>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Featured Projects
              </h2>
              <p className="max-w-[900px] text-muted-foreground dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Highlighting exceptional Solana projects from Australia and New Zealand
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 mb-16">
              {featuredProjects.map((project) => (
                <Card key={project.name} className="overflow-hidden border-0 shadow-lg dark:bg-gray-800">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                            <Image
                              src={project.logo || "/placeholder.svg"}
                              alt={`${project.name} logo`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-bold">{project.name}</CardTitle>
                            <CardDescription className="text-sm">
                              by{" "}
                              <a
                                href={project.developer.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#800080] dark:text-[#a64ca6] hover:underline"
                              >
                                {project.developer.name}
                              </a>
                            </CardDescription>
                          </div>
                        </div>
                        <p className="text-muted-foreground dark:text-gray-300 mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-[#800080]/10 text-[#800080] dark:bg-[#a64ca6]/20 dark:text-[#a64ca6]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          className="bg-[#800080] hover:bg-[#6a006a] dark:bg-[#a64ca6] dark:hover:bg-[#bf7fbf]"
                          asChild
                        >
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Globe className="h-4 w-4" />
                            Visit Project
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-[#800080] text-[#800080] hover:bg-[#800080]/10 dark:border-[#a64ca6] dark:text-[#a64ca6] dark:hover:bg-[#a64ca6]/10"
                          asChild
                        >
                          <a
                            href={project.developer.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Developer
                          </a>
                        </Button>
                      </div>
                    </div>
                    {project.screenshot && (
                      <div className="relative h-64 md:h-auto overflow-hidden bg-gray-100 dark:bg-gray-700">
                        <Image
                          src={project.screenshot || "/placeholder.svg"}
                          alt={`${project.name} screenshot`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {otherProjects.length > 0 && (
          <>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                More Projects
              </h2>
              <p className="max-w-[900px] text-muted-foreground dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover other innovative Solana projects from the ANZ region
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <Card key={project.name} className="overflow-hidden border-0 shadow-md dark:bg-gray-800 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                        <Image
                          src={project.logo || "/placeholder.svg"}
                          alt={`${project.name} logo`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
                        <CardDescription className="text-xs">
                          by{" "}
                          <a
                            href={project.developer.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#800080] dark:text-[#a64ca6] hover:underline"
                          >
                            {project.developer.name}
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-[#800080]/10 text-[#800080] dark:bg-[#a64ca6]/20 dark:text-[#a64ca6]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-2 w-full">
                      <Button
                        size="sm"
                        className="bg-[#800080] hover:bg-[#6a006a] dark:bg-[#a64ca6] dark:hover:bg-[#bf7fbf] w-full"
                        asChild
                      >
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Globe className="h-3 w-3" />
                          Visit
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </>
        )}

        <div className="mt-16 text-center">
          <p className="text-muted-foreground dark:text-gray-400 mb-6">
            Are you building a Solana project in Australia or New Zealand? We'd love to feature it here!
          </p>
          <Button className="bg-[#800080] hover:bg-[#6a006a] dark:bg-[#a64ca6] dark:hover:bg-[#bf7fbf]" asChild>
            <a href="mailto:gm@metasal.xyz?subject=solana%20anz%20project" className="flex items-center gap-2">
              Submit Your Project
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

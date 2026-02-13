import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, Twitter, TrendingUp } from "lucide-react"

type Project = {
  name: string
  description: string
  logo?: string
  website: string
  developer: {
    name: string
    website: string
    logo?: string
  }
  socialLinks?: {
    twitter?: string
    telegram?: string
    discord?: string
  }
  tags: string[]
  featured: boolean
  successStory?: boolean
}

export default function ProjectsShowcase() {
  const projects: Project[] = [
    // Success Stories
    {
      name: "Legion",
      description:
        "The place where the best projects go to raise capital from the highest value community members at all stages of a project. Proudly built on Solana.",
      logo: "/sponsors/legion.jpg",
      website: "https://legion.cc",
      developer: {
        name: "Legion Team",
        website: "https://legion.cc",
      },
      tags: ["Capital Raising", "Community", "Investment", "Platform"],
      featured: false,
      successStory: true,
    },
    {
      name: "Maple Finance",
      description:
        "A leading institutional DeFi lending platform providing secure, expert-led financial products for individuals and institutions. Maple offers undercollateralized loans and asset management solutions with a focus on institutional-grade risk management.",
      website: "https://maple.finance",
      developer: {
        name: "Maple Finance Team",
        website: "https://maple.finance",
      },
      tags: ["DeFi", "Lending", "Institutional", "Asset Management"],
      featured: false,
      successStory: true,
    },
    {
      name: "Magic Eden",
      description:
        "The leading NFT marketplace on Solana, facilitating billions in trading volume. Magic Eden has become the go-to platform for discovering, buying, and selling NFTs across multiple blockchains.",
      website: "https://magiceden.io",
      developer: {
        name: "Magic Eden Team",
        website: "https://magiceden.io",
      },
      tags: ["NFT Marketplace", "Multi-chain", "Trading"],
      featured: false,
      successStory: true,
    },
    {
      name: "Drift Protocol",
      description:
        "A decentralized perpetual futures exchange built on Solana, offering leveraged trading with deep liquidity and minimal slippage. One of the most successful DeFi protocols in the ecosystem.",
      website: "https://drift.trade",
      developer: {
        name: "Drift Protocol Team",
        website: "https://drift.trade",
      },
      tags: ["DeFi", "Perpetuals", "Trading", "Derivatives"],
      featured: false,
      successStory: true,
    },
    {
      name: "Step Finance",
      description:
        "A comprehensive portfolio management and analytics platform for Solana DeFi. Step Finance provides users with a unified dashboard to track and manage their DeFi positions across the ecosystem.",
      website: "https://step.finance",
      developer: {
        name: "Step Finance Team",
        website: "https://step.finance",
      },
      tags: ["DeFi", "Portfolio Management", "Analytics", "Dashboard"],
      featured: false,
      successStory: true,
    },
    {
      name: "Bullet.xyz",
      description:
        "Solana's trading layer (formerly Zeta Markets) - a leading derivatives platform offering options and futures trading. Bullet provides institutional-grade derivatives trading with advanced risk management tools and harnesses the power and security of the Solana network.",
      website: "https://bullet.xyz",
      developer: {
        name: "Bullet Team",
        website: "https://bullet.xyz",
      },
      tags: ["DeFi", "Derivatives", "Options", "Futures", "Trading Layer"],
      featured: false,
      successStory: true,
    },
    // Featured Projects
    {
      name: "InStep",
      description:
        "A mobile app that transforms everyday walking into an engaging adventure. InStep is a fitness platform fused with game mechanics, where you enter challenges with a small buy-in, contribute to a collective prize pool, and compete to earn your share simply by staying active.",
      logo: "/partners/instep.jpeg",
      website: "https://instep.fit",
      developer: {
        name: "InStep Team",
        website: "https://instep.fit",
      },
      tags: ["Fitness", "Gaming", "Mobile App", "Health"],
      featured: true,
    },
    {
      name: "Casino Royale",
      description:
        "A fully on-chain casino gaming platform built on Solana, featuring pixelated retro-style games including poker, blackjack, and roulette with provably fair gameplay.",
      logo: "/projects/casino-royale-logo.png",
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
      logo: "/projects/scrim-logo-actual.jpeg",
      website: "https://scrim.fun",
      developer: {
        name: "Scrim Team",
        website: "https://x.com/scrimdotfun",
      },
      socialLinks: {
        twitter: "https://x.com/scrimdotfun",
      },
      tags: ["Gaming", "Esports", "Tournaments"],
      featured: true,
    },
    {
      name: "Klout",
      description:
        "A social platform built on Solana that connects users through Twitter/X integration. Klout provides a seamless social experience with crypto-native features and community engagement tools.",
      logo: "/sponsors/klout.png",
      website: "https://klout.gg",
      developer: {
        name: "Klout Team",
        website: "https://klout.gg",
      },
      tags: ["Social", "Twitter Integration", "Community", "Platform"],
      featured: true,
    },
    // Other Projects
    {
      name: "Aurascope",
      description:
        "A revolutionary social app that focuses on emotions and feelings rather than likes. Snap a selfie to find your aura and connect with others based on authentic emotional experiences.",
      logo: "/sponsors/aurascope.jpg",
      website: "https://aurascopeapp.com",
      developer: {
        name: "Aurascope Team",
        website: "https://aurascopeapp.com",
      },
      tags: ["Social", "AI", "Mobile App"],
      featured: false,
    },
    {
      name: "SeekerTracker",
      description:
        "Track and search Solana Mobile Seeker devices and .skr SeekerIDs. Real-time data on the Seeker ecosystem with integrated $TRACKER token.",
      logo: "/sponsors/seekertracker.jpg",
      website: "https://seekertracker.com",
      developer: {
        name: "SeekerTracker Team",
        website: "https://seekertracker.com",
      },
      tags: ["Mobile", "Seeker", "Tools"],
      featured: false,
    },
    {
      name: "film.fun",
      description:
        "AI film creation platform where creators compete, create and earn. Features brackets, community-driven storytelling, and crypto-native rewards.",
      logo: "/projects/film-fun-logo.jpg",
      website: "https://film.fun",
      developer: {
        name: "film.fun Team",
        website: "https://film.fun",
      },
      tags: ["AI", "Film", "Creator Economy"],
      featured: false,
    },
    {
      name: "HaveMore",
      description:
        "Building the web2.5 bridge to onchain tokenized finance. Simplifies institutional access to digital assets and yield.",
      logo: "/projects/havemore-logo.png",
      website: "https://havemore.fi",
      developer: {
        name: "HaveMore Team",
        website: "https://havemore.fi",
      },
      tags: ["Institutional", "DeFi", "Yield"],
      featured: false,
    },
    {
      name: "Chest",
      description:
        "Gamify your Telegram group: pool, vote, and trade together. A social trading platform built on Solana.",
      logo: "/projects/chest-logo.png",
      website: "https://chest.chat",
      developer: {
        name: "Chest Team",
        website: "https://chest.chat",
      },
      tags: ["Social", "Trading", "Telegram"],
      featured: false,
    },
    {
      name: "Watchtower",
      description:
        "Security monitoring and analytics platform for the Solana ecosystem. Stay informed and protect your assets.",
      logo: "/projects/watchtower-logo.png",
      website: "https://www.watchtower.world",
      developer: {
        name: "Watchtower Team",
        website: "https://www.watchtower.world",
      },
      tags: ["Security", "Analytics", "Tools"],
      featured: false,
    },
    {
      name: "EVO",
      description:
        "Health and fitness app powered by Solana. Track your fitness journey with crypto-native rewards and community challenges.",
      logo: "/projects/evoapp-logo.png",
      website: "https://evoapp.xyz",
      developer: {
        name: "EVO Team",
        website: "https://evoapp.xyz",
      },
      tags: ["Health", "Fitness", "Move-to-Earn"],
      featured: false,
    },
    {
      name: "SeekerNova",
      description:
        "A decentralized application built for the Solana Mobile Seeker ecosystem.",
      website: "https://seekernova.com",
      developer: {
        name: "SeekerNova Team",
        website: "https://seekernova.com",
      },
      tags: ["Mobile", "Seeker", "DApp"],
      featured: false,
    },
    {
      name: "CargoEscrow",
      description:
        "Decentralized escrow solution for cargo and logistics on Solana. Secure, transparent trade settlements.",
      website: "https://cargoescrow.com",
      developer: {
        name: "CargoEscrow Team",
        website: "https://cargoescrow.com",
      },
      tags: ["Logistics", "Escrow", "Trade"],
      featured: false,
    },
    {
      name: "SolAIBot",
      description:
        "AI-powered trading and analytics bot for the Solana ecosystem.",
      website: "https://solaibot.com",
      developer: {
        name: "Quantailz",
        website: "https://solaibot.com",
      },
      tags: ["AI", "Trading", "Bot"],
      featured: false,
    },
    {
      name: "Vau1t",
      description:
        "Secure vault and asset management solution built on Solana.",
      website: "https://vau1t.com",
      developer: {
        name: "Vau1t Team",
        website: "https://vau1t.com",
      },
      tags: ["Security", "Vault", "Asset Management"],
      featured: false,
    },
    {
      name: "Nextgame",
      description:
        "Next-generation gaming platform on Solana. Discover and play blockchain games.",
      website: "https://nextgame.com",
      developer: {
        name: "Nextgame Team",
        website: "https://nextgame.com",
      },
      tags: ["Gaming", "Platform"],
      featured: false,
    },
  ]

  const successStories = projects.filter((project) => project.successStory)
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured && !project.successStory)

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        {successStories.length > 0 && (
          <>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-8 w-8 text-green-500" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                  Success Stories
                </h2>
              </div>
              <p className="max-w-[900px] text-muted-foreground dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Major Solana protocols and platforms built by Australian teams that have achieved global success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {successStories.map((project) => (
                <Card key={project.name} className="overflow-hidden border-0 shadow-lg dark:bg-gray-800 relative">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Success Story
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          {project.logo && (
                            <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                              <Image
                                src={project.logo || "/placeholder.svg"}
                                alt={`${project.name} logo`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
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
                              className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        {project.socialLinks && (
                          <div className="flex gap-2">
                            {project.socialLinks.twitter && (
                              <a
                                href={project.socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#1DA1F2] hover:text-[#1a94da] transition-colors"
                                aria-label={`${project.name} on Twitter`}
                              >
                                <Twitter className="h-5 w-5" />
                              </a>
                            )}
                          </div>
                        )}
                        <div className="flex gap-3">
                          <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
                            <a
                              href={project.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Globe className="h-4 w-4" />
                              Visit Platform
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            className="border-green-600 text-green-600 hover:bg-green-600/10 bg-transparent"
                            asChild
                          >
                            <a
                              href={project.developer.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Learn More
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {featuredProjects.length > 0 && (
          <>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Featured Projects
              </h2>
              <p className="max-w-[900px] text-muted-foreground dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Highlighting exceptional emerging Solana projects from Australia and New Zealand
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
                      <div className="flex flex-col gap-4">
                        {project.socialLinks && (
                          <div className="flex gap-2">
                            {project.socialLinks.twitter && (
                              <a
                                href={project.socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#1DA1F2] hover:text-[#1a94da] transition-colors"
                                aria-label={`${project.name} on Twitter`}
                              >
                                <Twitter className="h-5 w-5" />
                              </a>
                            )}
                          </div>
                        )}
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
                            className="border-[#800080] text-[#800080] hover:bg-[#800080]/10 dark:border-[#a64ca6] dark:text-[#a64ca6] dark:hover:bg-[#a64ca6]/10 bg-transparent"
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
          <a href="mailto:gm@metasal.xyz?subject=solana%20anz%20project" className="inline-block">
            <Button className="bg-[#800080] hover:bg-[#6a006a] dark:bg-[#a64ca6] dark:hover:bg-[#bf7fbf]">
              Submit Your Project
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

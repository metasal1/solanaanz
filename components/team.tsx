import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { MapPin, Twitter, Send, Globe } from "lucide-react"
import Link from "next/link"

type TeamMember = {
  name: string
  role?: string
  location: string
  image?: string
  twitter?: string
  telegram?: string
  website?: string
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Metasal",
      location: "Melbourne",
      image: "/metasal-profile.jpeg",
      twitter: "https://x.com/metasal_",
      telegram: "https://t.me/metasal",
      website: "https://metasal.xyz",
    },
    {
      name: "Adrian",
      location: "Sydney",
      image: "/adrian-profile.jpeg",
      twitter: "https://x.com/redactedadrian",
      telegram: "https://t.me/redactedadrian",
    },
    {
      name: "Craig",
      location: "Auckland",
      image: "/craig-profile.jpeg",
      twitter: "https://x.com/craigmccoll_nz",
      telegram: "https://t.me/super_nz",
    },
    {
      name: "Darren",
      location: "Gold Coast",
      image: "/darren-profile.jpeg",
      twitter: "https://x.com/darrenrogan",
      telegram: "https://t.me/darrenrogan",
    },
    {
      name: "Nissan",
      location: "Brisbane",
      image: "/nissan-profile.jpeg",
      twitter: "https://twitter.com/redditech",
      telegram: "https://t.me/redditech",
    },
    {
      name: "Ariel",
      location: "Solana University",
      image: "/ariel-profile.jpeg",
      twitter: "https://x.com/ariel__sol",
      telegram: "https://t.me/ariel_jf",
    },
  ]

  return (
    <section id="team" className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">Our Team</h2>
            <p className="max-w-[900px] text-muted-foreground dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the passionate individuals behind Solana ANZ
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-12 md:grid-cols-3 lg:grid-cols-5">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="border-0 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 dark:bg-gray-900 dark:shadow-none dark:hover:bg-gray-800 h-full transform hover:scale-105"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800 ring-2 ring-purple-500 dark:ring-purple-400">
                  {member.image ? (
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name}'s profile`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-purple-100 dark:bg-purple-900">
                      <span className="text-2xl font-bold text-purple-500 dark:text-purple-300">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-center logo-gradient-text">{member.name}</h3>
                {member.role && <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1">{member.role}</p>}
                <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{member.location}</span>
                </div>

                {/* Social links */}
                <div className="flex space-x-3 mt-3">
                  {member.twitter && (
                    <Link
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#1DA1F2] dark:text-gray-400 dark:hover:text-[#1DA1F2] transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  )}
                  {member.telegram && (
                    <Link
                      href={member.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#0088cc] dark:text-gray-400 dark:hover:text-[#0088cc] transition-colors"
                    >
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Telegram</span>
                    </Link>
                  )}
                  {member.website && (
                    <Link
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#800080] dark:text-gray-400 dark:hover:text-[#a64ca6] transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                      <span className="sr-only">Website</span>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"

export default function Events() {
  const events = [
    {
      title: "Solana 101 for New Devs",
      date: "May 6, 2024",
      time: "10:00 AM",
      location: "Virtual",
      description: "An introductory session for developers new to the Solana ecosystem.",
      organizer: "By Metasal",
      image: "/event-solana101.png",
      url: "https://lu.ma/solanaanz",
    },
    {
      title: "Solana Co-Hack Melbourne",
      date: "May 13, 2024",
      time: "10:00 AM",
      location: "Melbourne, Australia (To Be Announced)",
      description: "Join fellow developers for a collaborative hackathon in Melbourne.",
      organizer: "By Metasal",
      image: "/event-cohack.png",
      url: "https://lu.ma/solanaanz",
    },
  ]

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join us at our upcoming Solana events across Australia and New Zealand
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          {events.map((event, index) => (
            <Card key={index} className="border-0 shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  {event.date} • {event.location}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {event.time} • {event.organizer}
                </p>
                <Button className="w-full bg-[#800080] hover:bg-[#6a006a]" asChild>
                  <a href={event.url} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="border-[#800080] text-[#800080] hover:bg-[#800080]/10" asChild>
            <a href="https://lu.ma/solanaanz" target="_blank" rel="noopener noreferrer">
              View All Events
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

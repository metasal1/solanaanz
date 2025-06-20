import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Gift, ShoppingBag } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-[#0000FF] dark:text-[#4d4dff]" />,
      title: "Community",
      description: "Join the growing Solana community in Australia and New Zealand.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-[#800080] dark:text-[#a64ca6]" />,
      title: "Events",
      description: "Regular meetups, hackathons, and educational events across ANZ.",
    },
    {
      icon: <Gift className="h-10 w-10 text-[#FF0000] dark:text-[#ff4d4d]" />,
      title: "Airdrops",
      description: "Stay updated on the latest Solana ecosystem airdrops.",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-[#800080] dark:text-[#a64ca6]" />,
      title: "Merchandise",
      description: "Exclusive Solana ANZ merchandise for community members.",
    },
  ]

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
              About Solana ANZ
            </h2>
            <p className="max-w-[900px] text-muted-foreground dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Solana ANZ is your Australian and New Zealand hub for all things Solana
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="modern-card border-0">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                {feature.icon}
                <h3 className="text-xl font-bold dark:text-white">{feature.title}</h3>
                <p className="text-muted-foreground dark:text-gray-400 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

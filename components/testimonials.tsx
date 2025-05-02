import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner, Sydney",
      content:
        "Solana ANZ has transformed how I manage my business finances. The transaction speeds are incredible, and the fees are minimal compared to traditional banking.",
      avatar: "SJ",
    },
    {
      name: "David Chen",
      role: "Investor, Melbourne",
      content:
        "As someone who regularly invests in crypto, having a banking solution that bridges traditional finance with blockchain is invaluable. Solana ANZ delivers exactly that.",
      avatar: "DC",
    },
    {
      name: "Emma Williams",
      role: "Tech Entrepreneur, Auckland",
      content:
        "The integration with the Solana ecosystem has opened up new possibilities for my startup. We're now able to accept payments globally without the usual headaches.",
      avatar: "EW",
    },
  ]

  return (
    <section id="testimonials" className="py-16 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from businesses and individuals across Australia and New Zealand
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={`/thoughtful-artist.png?height=40&width=40&query=portrait of ${testimonial.name}`}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

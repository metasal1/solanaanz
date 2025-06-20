import { Button } from "@/components/ui/button"

export default function EventFeature() {
  return (
    <section className="py-8 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="w-full space-y-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white">Join Our Next Community Event</h2>
            <p className="text-white text-sm md:text-base max-w-2xl mx-auto">
              Connect with fellow Solana enthusiasts, developers, and builders in the Australia and New Zealand
              community. Network, learn, and discover the latest in the Solana ecosystem at our upcoming meetup.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                asChild
              >
                <a href="https://lu.ma/dj3lcvjr" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10" asChild>
                <a href="https://lu.ma/solanaanz" target="_blank" rel="noopener noreferrer">
                  View All Events
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

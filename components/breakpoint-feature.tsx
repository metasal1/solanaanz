import { Button } from "@/components/ui/button"

export default function BreakpointFeature() {
  return (
    <section className="py-8 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="w-full space-y-4 text-center">
            <div className="relative h-12 w-48 md:h-16 md:w-64 mx-auto mb-2">
              <img src="/breakpoint-logo.png" alt="Breakpoint Logo" className="object-contain h-full w-full" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white">ABU DHABI • DECEMBER 11-13, 2025</h2>
            <p className="text-white text-sm md:text-base max-w-2xl mx-auto">
              Join the Aussie & Kiwi delegation at Solana's biggest global event in Abu Dhabi from December 11-13, 2025.
              Connect with fellow ANZ community members, showcase your projects, and represent our region on the global
              stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                asChild
              >
                <a href="https://bp.solanaanz.org" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10" asChild>
                <a href="https://bp.solanaanz.org" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 md:py-28 text-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Solana
            <br />
            <span className="logo-gradient-text">Australia & New Zealand</span>
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Your Australian and New Zealand hub for all things Solana
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="bg-[#800080] hover:bg-[#6a006a]" asChild>
              <a href="https://t.me/solanaANZ" target="_blank" rel="noopener noreferrer">
                Join Telegram
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#800080] text-[#800080] hover:bg-[#800080]/10"
              asChild
            >
              <a href="https://lu.ma/solanaanz" target="_blank" rel="noopener noreferrer">
                Upcoming Events
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

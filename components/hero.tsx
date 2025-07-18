import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 md:py-28 text-center relative overflow-hidden min-h-[600px]">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/event-google-melbourne.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 hero-gradient opacity-60" />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-lg">
            Solana
            <br />
            <span className="logo-gradient-text drop-shadow-lg">Australia & New Zealand</span>
          </h1>
          <p className="max-w-[600px] text-white/90 md:text-xl drop-shadow-md">
            Your Australian and New Zealand hub for all things Solana
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="modern-button text-white shadow-lg" asChild>
              <a href="https://t.me/solanaANZ" target="_blank" rel="noopener noreferrer">
                Join Telegram
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/80 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm shadow-lg"
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

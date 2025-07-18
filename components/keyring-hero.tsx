import { Button } from "@/components/ui/button"

export default function KeyringHero() {
  return (
    <section className="py-20 md:py-28 text-center hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="mb-4">
            <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Welcome Keyring Users! 🔑
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl dark:text-white">
            Solana
            <br />
            <span className="logo-gradient-text">Australia & New Zealand</span>
          </h1>
          <p className="max-w-[600px] text-muted-foreground dark:text-gray-400 md:text-xl">
            Your Australian and New Zealand hub for all things Solana. Join our vibrant community of builders,
            developers, and enthusiasts.
          </p>
          <p className="max-w-[600px] text-sm text-[#800080] dark:text-[#a64ca6] font-medium">
            💎 Come back regularly to collect airdrops, gifts, and easter eggs from the Solana ANZ community!
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="modern-button text-white" asChild>
              <a href="https://t.me/solanaANZ" target="_blank" rel="noopener noreferrer">
                Join Telegram
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#800080] text-[#800080] hover:bg-[#800080]/10 dark:border-[#a64ca6] dark:text-[#a64ca6] dark:hover:bg-[#a64ca6]/10 bg-transparent"
              asChild
            >
              <a href="https://lu.ma/solanaanz" target="_blank" rel="noopener noreferrer">
                Upcoming Events
              </a>
            </Button>
          </div>
          <div className="mt-6 text-sm text-muted-foreground dark:text-gray-400">
            <p>
              Referred by <span className="font-semibold text-[#800080] dark:text-[#a64ca6]">Keyring</span> - Welcome to
              the Solana ANZ community! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

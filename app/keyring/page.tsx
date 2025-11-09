import About from "@/components/about"
import Events from "@/components/events"
import Community from "@/components/community"
import Footer from "@/components/footer"
import Header from "@/components/header"
import SolPrice from "@/components/sol-price"
import Sponsors from "@/components/sponsors"
import Partners from "@/components/partners"
import Team from "@/components/team"
import EventBanner from "@/components/breakpoint-banner"
import EventFeature from "@/components/breakpoint-feature"
import AnzSolToken from "@/components/anzsol-token"
import EventGallery from "@/components/event-gallery"
import KeyringHero from "@/components/keyring-hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Welcome Keyring Users | Solana ANZ",
  description: "Join the Solana ANZ community - Your Australian and New Zealand hub for all things Solana",
}

export default function KeyringPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <EventBanner />
      <Header />
      <main>
        <KeyringHero />
        <EventFeature />
        <SolPrice />
        <About />
        <AnzSolToken />
        <Events />
        <EventGallery />
        <Team />
        <Partners />
        <Sponsors />
        <Community />
      </main>
      <Footer />
    </div>
  )
}

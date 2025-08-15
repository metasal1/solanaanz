import Hero from "@/components/hero"
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
import HackarooBanner from "@/components/hackaroo-banner"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <HackarooBanner />
      <EventBanner />
      <Header />
      <main>
        <Hero />
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

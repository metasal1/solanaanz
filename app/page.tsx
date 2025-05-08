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
import BreakpointBanner from "@/components/breakpoint-banner"
import BreakpointFeature from "@/components/breakpoint-feature"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <BreakpointBanner />
      <Header />
      <main>
        <Hero />
        <BreakpointFeature />
        <SolPrice />
        <About />
        <Events />
        <Team />
        <Partners />
        <Sponsors />
        <Community />
      </main>
      <Footer />
    </div>
  )
}

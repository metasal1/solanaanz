import Hero from "@/components/hero"
import About from "@/components/about"
import Events from "@/components/events"
import Community from "@/components/community"
import Footer from "@/components/footer"
import Header from "@/components/header"
import SolPrice from "@/components/sol-price"
import Sponsors from "@/components/sponsors"
import Partners from "@/components/partners"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SolPrice />
        <About />
        <Events />
        <Partners />
        <Sponsors />
        <Community />
      </main>
      <Footer />
    </div>
  )
}

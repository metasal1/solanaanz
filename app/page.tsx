import Hero from "@/components/hero"
import About from "@/components/about"
import Events from "@/components/events"
import Community from "@/components/community"
import Footer from "@/components/footer"
import Header from "@/components/header"
import SolPrice from "@/components/sol-price"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SolPrice />
        <About />
        <Events />
        <Community />
      </main>
      <Footer />
    </div>
  )
}

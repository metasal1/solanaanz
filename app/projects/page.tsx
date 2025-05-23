import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectsShowcase from "@/components/projects-showcase"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects from Downunder | Solana ANZ",
  description: "Discover innovative Solana projects built in Australia and New Zealand",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main>
        <div className="py-20 md:py-28 text-center dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl dark:text-white">
                Projects from <span className="logo-gradient-text">Downunder</span>
              </h1>
              <p className="max-w-[800px] text-muted-foreground dark:text-gray-400 md:text-xl">
                Discover innovative Solana projects built by talented developers in Australia and New Zealand
              </p>
            </div>
          </div>
        </div>
        <ProjectsShowcase />
      </main>
      <Footer />
    </div>
  )
}

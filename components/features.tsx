import { ShieldCheck, Zap, Globe, CreditCard, BarChart, Lock } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-purple-500" />,
      title: "Secure Transactions",
      description: "Bank-grade security with the added protection of blockchain technology.",
    },
    {
      icon: <Zap className="h-10 w-10 text-purple-500" />,
      title: "Lightning Fast",
      description: "Experience Solana's blazing fast transaction speeds of 65,000 TPS.",
    },
    {
      icon: <Globe className="h-10 w-10 text-purple-500" />,
      title: "Global Access",
      description: "Access your finances from anywhere in Australia, New Zealand, or globally.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-purple-500" />,
      title: "Digital Payments",
      description: "Seamlessly pay with crypto or fiat using our integrated payment solutions.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-purple-500" />,
      title: "Investment Tools",
      description: "Advanced tools for tracking and managing your crypto investments.",
    },
    {
      icon: <Lock className="h-10 w-10 text-purple-500" />,
      title: "Self-Custody",
      description: "Maintain full control of your assets with non-custodial wallet options.",
    },
  ]

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blockchain Banking Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how Solana ANZ is revolutionizing banking in Australia and New Zealand
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              {feature.icon}
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

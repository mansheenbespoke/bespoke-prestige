import { 
  Wrench, 
  FileCheck, 
  Search, 
  Settings, 
  Shield,
  Clock,
  ArrowRight
} from "lucide-react"
import { Card, CardContent } from "@/components/css/card"

const services = [
  {
    icon: Settings,
    title: "General Service & Maintenance",
    description: "Comprehensive vehicle servicing by fully qualified mechanics with over 20 years of combined experience. Quality is never compromised.",
    href: "#contact",
  },
  {
    icon: FileCheck,
    title: "Roadworthy Certificate (RWC)",
    description: "Licensed VIC Roads approved vehicle tester. Required for vehicle transfers, re-registration, and ensuring road safety compliance.",
    href: "#rwc",
    price: "From $250",
  },
  {
    icon: Search,
    title: "RACV Pre-Purchase Inspection",
    description: "Don't let hidden problems ruin your dream car. Get expert insight with a comprehensive check and detailed report before you buy.",
    href: "#contact",
    price: "$440",
  },
  {
    icon: Wrench,
    title: "Quality Repairs",
    description: "Expert diagnostics and repairs for all vehicle makes and models. We fix problems right the first time with quality parts.",
    href: "#contact",
  },
  {
    icon: Shield,
    title: "Trusted Mechanics",
    description: "Our fully qualified mechanics are dedicated to providing efficient, reliable service. Real solutions for real problems.",
    href: "#about",
  },
  {
    icon: Clock,
    title: "After Hours Drop-Off",
    description: "Open Monday to Friday with emergency after-hours drop-off available. We're here when something goes wrong.",
    href: "#contact",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Comprehensive Car Care
            <br />
            <span className="text-primary">You Can Trust</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From routine maintenance to roadworthy certificates, we provide premium 
            automotive services with a commitment to quality and transparency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  {service.price && (
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a 
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

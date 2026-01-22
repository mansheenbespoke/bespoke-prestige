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
    description: "Bespoke Prestige can cater for all your general service and maintenance requirements. All our Mechanics are fully qualified and have over 20 years of experience combined and are dedicated to providing you with efficient and reliable service.",
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
    title: "RACV Pre-Purchase Vehicle Inspection",
    description: "Don't let hidden problems ruin your dream car. Get expert insight with a comprehensive check and detailed report before you buy.",
    href: "#racv",
    price: "$385",
  },
  {
    icon: Clock,
    title: "After Hours Drop-Off",
    description: "Open Monday to Friday with emergency after-hours drop-off available. We're here when something goes wrong.",
    href: "#contact",
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
  
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-med font-medium text-primary tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-balance">
            Quality Repairs, Trusted Mechanics
            <br />
            <span className="text-primary">And Real Solutions</span>
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

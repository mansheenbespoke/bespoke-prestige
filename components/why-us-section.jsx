import { Award, Wrench, Users, ThumbsUp } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Our team brings decades of automotive expertise to every job, ensuring your vehicle receives the best possible care.",
  },
  {
    icon: Wrench,
    title: "Quality Parts & Workmanship",
    description: "We use only premium parts and stand behind our work. Quality is never compromised at Bespoke Prestige.",
  },
  {
    icon: Users,
    title: "Dealer Alternative",
    description: "Get dealership-quality service without the dealership prices. We service all makes and models.",
  },
  {
    icon: ThumbsUp,
    title: "Customer-First Approach",
    description: "Transparent pricing, honest advice, and no unnecessary repairs. We treat your car like it's our own.",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The <span className="text-primary">Bespoke Prestige</span> Difference
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We're not just mechanics – we're automotive enthusiasts dedicated to 
            keeping your vehicle in peak condition.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                <reason.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
              {/* Index Number */}
              <div className="mt-4 text-4xl font-bold text-border/50">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

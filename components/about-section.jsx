import { CheckCircle2 } from "lucide-react"

const features = [
  "Over 20 years of combined experience",
  "Fully qualified and certified mechanics",
  "Quality parts and workmanship guaranteed",
  "Transparent pricing - no hidden costs",
  "RACV approved inspection center",
  "VIC Roads licensed vehicle tester",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=2070&auto=format&fit=crop"
                alt="Professional mechanic working on a car engine"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-2xl hidden md:block">
              <div className="text-center">
                <span className="text-4xl font-bold text-primary">20+</span>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
            </div>
            {/* Accent Line */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-32 bg-primary rounded-full hidden lg:block" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Quality Repairs, Trusted Mechanics,{" "}
              <span className="text-primary">Real Solutions</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Bespoke Prestige can cater for all your general service and maintenance 
                requirements. All our Mechanics are fully qualified and have over 20 years 
                of experience combined and are dedicated to providing you with efficient 
                and reliable service.
              </p>
              <p>
                Bespoke Prestige is not your cheapest service centre but as you might be 
                aware, you get what you pay for therefore quality is not compromised.
              </p>
              <p>
                The service centre is only open Monday to Friday, but in emergencies can 
                open for drop-offs after hours, making it easy when something does go wrong!
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

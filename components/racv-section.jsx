import { CheckCircle2 } from "lucide-react"

const features = [
  "Expert Insight: Comprehensive checks by experienced professionals",
  "Complete Transparency: Detailed report highlighting potential issues or hidden costs",
  "Save Money: Avoid costly repairs or risky purchases with informed decisions",
]

export function RacvSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/image.png"
                alt="Professional mechanic working on a car engine"
                className="w-full h-full"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-2xl hidden md:block">
              <div className="text-center">
                <span className="text-large font-medium text-primary">KNOW</span>
                <p className="text-sm text-muted-foreground mt-1">BEFORE YOU BUY</p>
              </div>
            </div>
            {/* Accent Line */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-32 bg-primary rounded-full hidden lg:block" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
              We offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              RACV Pre-Purchase  {" "}
              <span className="text-primary">Vehicle Inspection </span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p className="text-lg font-medium text-foreground">
                Don't let hidden problems ruin your dream car purchase!
              </p>
              <p>
                Our RACV Pre-Purchase Inspection ensures you get the full picture of the 
                car's condition before making a commitment. For just <span className="text-primary font-semibold">$385</span>, you'll gain:
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="relative bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <span className="text-sm font-semibold text-primary tracking-wide uppercase">Peace of Mind</span>
                </div>
                <p className="text-foreground leading-relaxed text-base">
                  Act now and make your investment worry-free. Our trusted service guarantees 
                  you peace of mind and value for every dollar spent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

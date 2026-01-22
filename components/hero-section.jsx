import { Phone, CheckCircle2, ArrowRight, Star, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  { icon: Shield, text: "Fully Qualified Mechanics" },
  { icon: Star, text: "5-Star Google Rating" },
  { icon: Clock, text: "Same Day Service Available" },
]

const marqueeServices = [
  "Roadworthy Certificates (RWC)",
  "RACV Pre-Purchase Inspections",
  "General Servicing",
  "Brake & Suspension",
  "Electrical Diagnostics",
  "Air Conditioning",
  "Engine Repairs",
  "Transmission Service",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Premium Service Centre</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-balance">
              <span className="text-foreground">Expert Car</span>
              <br />
              <span className="text-primary">Service &</span>
              <br />
              <span className="text-foreground">Maintenance</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Melbourne&apos;s trusted mechanics delivering reliable, quality-assured vehicle services 
              with <span className="text-foreground font-semibold">over 20 years of experience</span>.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {highlights.map((item) => (
                <div 
                  key={item.text} 
                  className="flex items-center gap-3 p-3 bg-card/50 border border-border/50 rounded-lg"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground leading-tight">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base font-semibold shadow-lg shadow-primary/25"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Book Your Service
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-border hover:bg-card hover:border-primary/50 text-foreground px-8 h-14 text-base font-semibold bg-transparent"
              >
                <a href="tel:0398947844" className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  03 9894 7844
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2074&auto=format&fit=crop"
                  alt="Professional mechanic working on car engine"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card - Top Right */}
              <div className="absolute -top-4 -right-4 lg:top-4 lg:-right-8 bg-card border border-border rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
                    <span className="text-xl font-bold text-primary-foreground">20+</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Years of</p>
                    <p className="text-sm font-semibold text-foreground">Experience</p>
                  </div>
                </div>
              </div>

              {/* Decorative ring */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeServices, ...marqueeServices].map((service, index) => (
            <div key={index} className="flex items-center mx-8">
              <CheckCircle2 className="w-4 h-4 text-primary-foreground mr-2" />
              <span className="text-sm font-medium text-primary-foreground">{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

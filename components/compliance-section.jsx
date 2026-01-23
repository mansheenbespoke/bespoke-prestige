import { Shield } from "lucide-react"
import { Button } from "./css/button"

export function ComplianceSection() {
  const handleEnquire = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="compliance" className="py-24 bg-background relative overflow-hidden">
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
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 flex items-center justify-center gap-4">
            <Shield className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            <span className="text-primary">COMPLIANCE</span>
          </h2>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Bespoke Prestige is a certified automotive compliance specialist, delivering vehicle certification and approval services in line with Australian import regulations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over 20 years of expertise in import vehicle compliance and automotive engineering, we proudly stand among Australia's leading vehicle compliance specialists.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Bespoke Prestige, customer satisfaction is at the core of everything we do, and our team is always available to assist with any vehicle compliance certificate enquiries.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <Button 
              size="lg" 
              onClick={handleEnquire}
              className="text-lg px-8 py-6"
            >
              ENQUIRE FOR PRICING
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

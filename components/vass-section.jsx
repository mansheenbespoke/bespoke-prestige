import { CheckCircle2, AlertCircle, ArrowRight, FileCheck, ClipboardCheck, ChevronDown } from "lucide-react"
import { Button } from "@/components/css/button"
import { Card, CardContent } from "@/components/css/card"
import { useState } from "react"

const inspectionStages = [
  "Inside vehicle checks",
  "Outside vehicle checks",
  "Lamps and signals",
  "Under bonnet checks",
  "Under body checks",
  "Road test",
]

const pricing = [
  {
    title: "25 Year Old Imported (Normal car)",
    code: "LO1",
    price: "$660",
  },
  {
    title: "25 Year Old Imported (Supercar)",
    code: "LO1",
    price: "$1100",
  },
  {
    title: "Personal Import (Normal car)",
    code: "LO3",
    price: "$660",
  },
  {
    title: "Personal Import (Supercar)",
    code: "LO3",
    price: "$1100",
  },
  {
    title: "Light Vehicle Seat & Seatbelt Installation",
    code: "LK1",
    price: "$440",
  },
  {
    title: "Light Vehicle CRA Installation",
    code: "LK6",
    price: "$440",
  },
  {
    title: "Motorhome Certification",
    code: "LH11",
    price: "$660",
  },
  {
    title: "Heavy Vehicle Seat & Seatbelt Installation",
    code: "K1",
    price: "$440",
  },
  {
    title: "Wheelchair & Occupant Restraint Installation",
    code: "K5",
    price: "$1100",
  },
  {
    title: "Heavy Vehicle CRA Installation",
    code: "K6",
    price: "$440",
  },
]

export function VASSSection() {
  const [showAllPricing, setShowAllPricing] = useState(false)
  const visiblePricing = showAllPricing ? pricing : pricing.slice(0, 4)
  
  return (
    <section id="rwc" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-md font-medium text-primary tracking-wider uppercase mb-4 block">
            we offer
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Vehicle Assessment Signatory Scheme (VASS) 
          </h2>
          <p className="text-muted-foreground text-md max-w-2xl mx-auto leading-relaxed">
            VASS is a Victorian Government scheme for the certification of modified, individually constructed vehicles and certain types of imported vehicles to ensure they meet standards for registration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div>
            <Card className="bg-card border-border mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">VASS Certification Services</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">At Bespoke Prestige, we work in collaboration with an accredited VASS engineer to provide Vehicle Assessment Signatory Scheme (VASS) certification services.</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">We assist both private customers and automotive trade partners with VASS certificates for modified and/or imported vehicles, ensuring the vehicle meets Victorian road safety and compliance requirements. This allows the vehicle to be registered for road use in Victoria.</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">Our experience and engineering support allow us to streamline the certification process, offering clear guidance, efficient assessments, and reliable documentation for road registration and compliance purposes.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Pricing */}
          <div>
            <Card className="bg-card border-primary/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <FileCheck className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">VASS Pricing</h3>
                    <p className="text-sm text-muted-foreground">Certification fees by modification type</p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {visiblePricing.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">Modification Code: {item.code}</p>
                      </div>
                      <span className="text-lg font-bold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>

                {pricing.length > 4 && (
                  <Button
                    variant="outline"
                    onClick={() => setShowAllPricing(!showAllPricing)}
                    className="w-full mb-4 border-primary/30 hover:bg-primary/5"
                  >
                    {showAllPricing ? 'View Less' : 'View More Pricing Options'}
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showAllPricing ? 'rotate-180' : ''}`} />
                  </Button>
                )}

                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Get VASS Certificate
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>

                <p className="text-sm text-muted-foreground text-center mt-4">
                  Or call us at <a href="tel:0398947844" className="text-primary hover:underline">03 9894 7844</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

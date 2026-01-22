import { CheckCircle2, AlertCircle, ArrowRight, FileCheck } from "lucide-react"
import { Button } from "@/components/css/button"
import { Card, CardContent } from "@/components/css/card"

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
    title: "RWC Inspection",
    price: "$250",
    description: "Pre-booked RWC inspections",
  },
  {
    title: "Off-Road Vehicles",
    price: "+$99",
    description: "Surcharge for off-road vehicles (must be cleaned)",
  },
  {
    title: "Reinspection",
    price: "$110",
    description: "Discounted fee if applicable within 7 days",
  },
]

export function RWCSection() {
  return (
    <section id="rwc" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Roadworthy Certificate
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            VIC Roads <span className="text-primary">Approved Tester</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            A Certificate of Roadworthiness certifies that your vehicle has been inspected 
            and meets the roadworthiness requirements as set out by VIC Roads.
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
                    <h3 className="font-semibold text-foreground mb-2">When is a RWC Required?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      In Victoria, a Roadworthy Certificate is required when a vehicle is 
                      transferred from one owner to another, or if a vehicle is unregistered 
                      or has its registration cancelled by VIC Roads.
                    </p>
                  </div>
                </div>

                <h4 className="font-semibold text-foreground mb-4">How is a RWC Conducted?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Your vehicle will go through an inspection by an approved tester using 
                  VIC Roads guidelines:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {inspectionStages.map((stage, index) => (
                    <div key={stage} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary">
                        {index + 1}
                      </span>
                      <span className="text-sm text-foreground">{stage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What happens after inspection */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">After Inspection</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Pass:</strong> Certificate emailed to presenter with hard copy available on request.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Fail:</strong> List of items that need to be fixed within 7 days for reinspection.
                    </p>
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
                    <h3 className="text-xl font-semibold text-foreground">RWC Pricing</h3>
                    <p className="text-sm text-muted-foreground">Based on vehicle age and type</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {pricing.map((item) => (
                    <div 
                      key={item.title}
                      className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  asChild 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Book RWC Inspection
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Or call us at <a href="tel:0398947844" className="text-primary hover:underline">03 9894 7844</a>
                </p>
              </CardContent>
            </Card>

            {/* RACV Box */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">RACV Pre-Purchase Inspection</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Know Before You Buy. Drive With Confidence. Get the full picture of 
                  a car's condition before making a commitment.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">$440</span>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <a href="#contact">Book Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

import { CheckCircle2, AlertCircle, ArrowRight, FileCheck, ClipboardCheck } from "lucide-react"
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
    title: "Re-inspection",
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
          <span className="text-md font-medium text-primary tracking-wider uppercase mb-4 block">
            we offer
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Roadworthy Certificate (RWC)
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            In Victoria, Roadworthy Certificates (RWCs) are required for registration of a vehicle at VicRoads or the transfer of vehicle registration between two individuals.
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
                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">The purpose of a RWC is to ensure safety standards of all vehicles on Victorian roads. A Certificate of Roadworthiness is an official document issued by a licensed vehicle tester confirming that a vehicle has been inspected and complies with the roadworthiness standards prescribed by VicRoads at the time of inspection. The certificate verifies that the vehicle meets the required safety criteria and is considered suitable for legal use on public roads.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What is the Roadworthy Certificate Process?</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      When presented, your vehicle will go through an inspection by a Licenced Vehicle Tester as per VicRoads guidelines. The Roadworthy procedure includes inspection of:
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>Drive test</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>Exterior of vehicle</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>Interior of vehicle</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>Mechanical inspection (engine bay and underbody)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>Wheels and brakes</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>Lamps, Signals and Electronics</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClipboardCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">After Inspection</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      At the conclusion of the Roadworthy inspection, the possible outcomes are as follows:
                    </p>
                    <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">The vehicle passes</p>
                      <p className="text-sm text-muted-foreground">
                        A Roadworthy Certificate will be emailed to the presenter; hard copy can be supplied on request.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">The vehicle fails</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        If a vehicle fails the inspection, a list of items that did not meet VicRoads roadworthy standards will be presented. These items are required to be fixed within 7 days.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        A reinspection must also be conducted within 7 days. In such cases, a discounted re-inspection fee of <span className="font-semibold text-primary">$110</span> will be applied.
                      </p>
                    </div>
                  </li>
                </ul>
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
                      <span className="text-xl font-bold text-primary">{item.price}</span>
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

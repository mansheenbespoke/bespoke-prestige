import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/css/accordion"

const faqs = [
  {
    question: "Where are we located?",
    answer: "We are located at 28 Havelock Road, Bayswater, VIC 3153.",
  },
  {
    question: "What are our hours of operation?",
    answer: "We are open Monday to Friday, 8:30 AM to 5:00 PM during business hours. In emergencies, we can arrange after-hours drop-offs to make it convenient when something goes wrong with your vehicle.",
  },
  {
    question: "Do we offer free diagnostics?",
    answer: "We offer comprehensive diagnostic services to identify issues with your vehicle. While there may be a diagnostic fee, this is often waived if you proceed with the recommended repairs. Contact us for more details.",
  },
  {
    question: "How long does a Roadworthy Certificate (RWC) take?",
    answer: "A standard RWC inspection typically takes 2-3 hours depending on the vehicle. If any issues are found, we'll provide a list of required repairs. Re-inspection must be conducted within 7 days.",
  },
  {
    question: "What's included in the RACV Pre-Purchase Inspection?",
    answer: "Our $385 RACV Pre-Purchase Inspection includes comprehensive checks by experienced professionals, a detailed report highlighting potential issues or hidden costs, and expert insight to help you make an informed decision before purchasing a vehicle.",
  },
  {
    question: "Do we work on all car brands?",
    answer: "Yes, our fully qualified mechanics have over 20 years of combined experience working on all makes and models. Whether you drive a luxury vehicle or an everyday sedan, we can service it.",
  },
  {
    question: "What payment methods do we accept?",
    answer: "We accept all major credit cards, debit cards, and bank transfers. Payment is due upon completion of service. Contact us if you have specific payment inquiries.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-lg font-medium text-primary tracking-wider uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our services. Can't find what 
            you're looking for? Feel free to contact us directly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="text-foreground font-medium pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

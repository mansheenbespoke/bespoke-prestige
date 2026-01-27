import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { RacvSection } from "@/components/racv-section"
import { ComplianceSection } from "@/components/compliance-section"
import { RWCSection } from "@/components/rwc-section"
import { VASSSection } from "@/components/vass-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <RacvSection />
      <RWCSection />
      <ComplianceSection />
      <VASSSection />
      <ContactSection />
      <FAQSection/>
    </>
  )
}

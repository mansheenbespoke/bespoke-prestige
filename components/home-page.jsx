import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { RacvSection } from "@/components/racv-section"
import { ComplianceSection } from "@/components/compliance-section"
import { RWCSection } from "@/components/rwc-section"

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <RacvSection />
      <RWCSection />
      <ComplianceSection />
    </>
  )
}

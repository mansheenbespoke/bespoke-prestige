import { Header } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { RacvSection } from "@/components/racv-section"
import { ComplianceSection } from "@/components/compliance-section"
import { RWCSection } from "@/components/rwc-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

function App() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <RacvSection />
      <RWCSection />
      <ComplianceSection />
      {/* <FAQSection />
      <ContactSection />
      <Footer /> */}
    </main>
  )
}

export default App

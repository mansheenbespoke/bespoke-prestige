import { Header } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { RacvSection } from "@/components/racv-section"
import { WhyUsSection } from "@/components/why-us-section"
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
      {/* <WhyUsSection />
      <RWCSection />
      <FAQSection />
      <ContactSection />
      <Footer /> */}
    </main>
  )
}

export default App

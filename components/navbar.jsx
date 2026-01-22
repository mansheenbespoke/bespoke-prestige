import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/css/button"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#rwc", label: "RWC" },
  { href: "#racv", label: "RACV" },
  { href: "#pricing", label: "Pricing" },
  { href: "#compliance", label: "Compliance" },
  { href: "#vass", label: "VASS" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src="/bespoke-prestige-logo.png" alt="Bespoke Prestige" className="h-12 w-auto invert" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0398947844"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              03 9894 7844
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contact">Book Service</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a
                  href="tel:0398947844"
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  03 9894 7844
                </a>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                  <a href="#contact">Book Service</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

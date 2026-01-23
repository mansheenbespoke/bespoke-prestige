import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#racv", label: "RACV" },
  { href: "#rwc", label: "RWC" },
  { href: "#compliance", label: "Compliance" },
  { href: "#vass", label: "VASS" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "General Service",
  "RACV Pre-Purchase Vehicle Inspection",
  "Roadworthy Certificate (RWC)",
  "Compliance",
  "Vehicle Assessment Signatory Scheme (VASS)",
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <img src="/bespoke-prestige-logo.png" alt="Bespoke Prestige" className="h-12 w-auto invert" />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Quality repairs, trusted mechanics, real solutions. Over 20 years of 
              experience serving Melbourne with premium automotive services.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:0398947844"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                03 9894 7844
              </a>
              <a 
                href="mailto:email@bespokeprestige.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                email@bespokeprestige.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                26 Havelock Road, Bayswater, VIC 3153
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Business Hours</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="text-foreground">8:30am-5pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span className="text-foreground">Closed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span className="text-foreground">Closed</span>
              </div>
              <p className="text-muted-foreground pt-3 border-t border-border">
                Emergency after-hours drop-offs available
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Bespoke Prestige. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

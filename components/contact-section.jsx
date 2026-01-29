import React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/css/button"
import { Input } from "@/components/css/input"
import { Textarea } from "@/components/css/textarea"
import { Label } from "@/components/css/label"
import { Card, CardContent } from "@/components/css/card"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "03 9894 7844",
    href: "tel:0398947844",
  },
  {
    icon: Mail,
    title: "Email",
    value: "enquiries@bespokeprestige.com",
    href: "mailto:enquiries@bespokeprestige.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "28 Havelock Rd, Bayswater, VIC 3153",
    href: "#",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon–Fri: 8:30 AM – 5:00 PM",
    href: "#",
  },
]

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get In Touch <span className="text-primary">With Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to book your service? Fill out the form below or give us a call. 
            We'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
            
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.title}</p>
                  <p className="font-medium text-foreground">{info.value}</p>
                </div>
              </a>
            ))}

            {/* Map Placeholder */}
            <div className="aspect-video bg-card border border-border rounded-lg overflow-hidden mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.2487906845676!2d145.26245037641824!3d-37.84387437195156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63e9f4e5f5555%3A0x5045675218ce6e0!2s28%20Havelock%20Rd%2C%20Bayswater%20VIC%203153!5e0!3m2!1sen!2sau!4v1640000000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bespoke Prestige Location"
              />
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-3">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Book Your Service</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Booking Request Sent!</h4>
                    <p className="text-muted-foreground mb-6">
                      Thank you for your enquiry. We'll contact you shortly to confirm your booking.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Submit Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-foreground">Choose Your Service *</Label>
                      <select 
                        id="service"
                        required
                        className="flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground ring-offset-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a service...</option>
                        <option value="general">General Services</option>
                        <option value="racv">RACV</option>
                        <option value="rwc">RWC</option>
                        <option value="compliance">Compliance</option>
                        <option value="vass">VASS</option>
                        <option value="others">Others</option>
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">Name *</Label>
                        <Input 
                          id="name"
                          placeholder="Enter Your name"
                          required
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground">Phone *</Label>
                        <Input 
                          id="phone"
                          type="tel"
                          placeholder="Enter Your phone number"
                          required
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="Enter Your email"
                        required
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="make" className="text-foreground">Vehicle Make *</Label>
                        <Input 
                          id="make"
                          placeholder="e.g. Toyota"
                          required
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="model" className="text-foreground">Vehicle Model *</Label>
                        <Input 
                          id="model"
                          placeholder="e.g. Camry"
                          required
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="kilometers" className="text-foreground">Vehicle Kilometers *</Label>
                        <Input 
                          id="kilometers"
                          placeholder="e.g. 50,000"
                          required
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rego" className="text-foreground">Registration</Label>
                        <Input 
                          id="rego"
                          placeholder="e.g. ABC123 (optional)"
                          required
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date" className="text-foreground">Booking Date *</Label>
                        <Input 
                          id="date"
                          type="date"
                          required
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time" className="text-foreground">Booking Time *</Label>
                        <Input 
                          id="time"
                          type="time"
                          required
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Additional Information</Label>
                      <Textarea 
                        id="message"
                        placeholder="Tell us about the service you need..."
                        rows={4}
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Book Now
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

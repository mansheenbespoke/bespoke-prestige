import { Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./css/button"
import { useState, useEffect } from "react"

export function ComplianceSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const images = [
    { src: "/vass-1.jpg", alt: "Compliance Workshop 1" },
    { src: "/vass-2.jpg", alt: "Compliance Workshop 2" },
    { src: "/vass-3.jpg", alt: "Compliance Workshop 3" },
    { src: "/vass-4.jpg", alt: "Compliance Workshop 4" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  // Auto-scroll carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)
  }, [currentSlide])
  const handleEnquire = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="compliance" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>


      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-md font-medium text-primary tracking-wider uppercase mb-4 block">
            we offer
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 flex items-center justify-center gap-4">
            <span className="text-white">COMPLIANCE</span>
          </h2>
          <p className="text-muted-foreground text-md max-w-2xl mx-auto leading-relaxed">
            Vehicle compliance certification and approval services for imported vehicles, ensuring you meet all Australian regulations with confidence and ease.
          </p>
        </div>

        {/* Content and Carousel Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Bespoke Prestige is a certified automotive compliance specialist, delivering vehicle certification and approval services in line with Australian import regulations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over 20 years of expertise in import vehicle compliance and automotive engineering, we proudly stand among Australia's leading vehicle compliance specialists.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Bespoke Prestige, customer satisfaction is at the core of everything we do, and our team is always available to assist with any vehicle compliance certificate enquiries.
            </p>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <div className="relative h-[350px] md:h-[400px]">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button - Centered at Bottom */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={handleEnquire}
            className="text-lg px-8 py-6"
          >
            ENQUIRE FOR PRICING
          </Button>
        </div>
      </div>
    </section>
  )
}

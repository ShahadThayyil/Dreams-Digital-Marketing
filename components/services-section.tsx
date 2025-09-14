"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Share2, Palette, Megaphone, BarChart3, Globe } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search rankings with our comprehensive SEO strategies and technical optimization.",
    color: "text-blue-500",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engage your audience across all platforms with compelling content and strategic campaigns.",
    color: "text-pink-500",
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Create a memorable brand identity that resonates with your target audience.",
    color: "text-purple-500",
  },
  {
    icon: Megaphone,
    title: "Digital Advertising",
    description: "Maximize ROI with targeted ad campaigns across Google, Facebook, and other platforms.",
    color: "text-orange-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Track performance and optimize campaigns with detailed analytics and insights.",
    color: "text-green-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Build fast, responsive websites that convert visitors into customers.",
    color: "text-cyan-500",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-balance">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comprehensive digital marketing solutions designed to elevate your brand and drive measurable business
              growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`card-3d transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <service.icon className={`h-10 w-10 ${service.color} mr-4`} />
                    <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

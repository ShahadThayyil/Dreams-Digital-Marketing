"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Zap, Users } from "lucide-react"

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 px-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-balance">
              About <span className="text-gradient">Dreams</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We're a team of passionate digital marketing experts dedicated to helping businesses thrive in the digital
              landscape through innovative strategies and data-driven results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
            >
              <h3 className="text-3xl font-bold font-playfair mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower businesses of all sizes with cutting-edge digital marketing solutions that drive growth,
                increase brand visibility, and create lasting customer relationships.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since our founding, we've helped over 500+ companies achieve their digital goals through strategic
                planning, creative execution, and continuous optimization.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="card-3d">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-primary mr-3" />
                    <h4 className="text-xl font-semibold">Strategic Focus</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Every campaign is built on data-driven insights and tailored to your unique business goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-3d">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-accent mr-3" />
                    <h4 className="text-xl font-semibold">Innovation First</h4>
                  </div>
                  <p className="text-muted-foreground">
                    We stay ahead of digital trends to ensure your brand always leads the competition.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-3d">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-primary mr-3" />
                    <h4 className="text-xl font-semibold">Client Partnership</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Your success is our success. We work as an extension of your team.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

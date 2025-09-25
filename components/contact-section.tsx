"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-balance">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ready to transform your digital presence? Let's discuss how we can help your business grow and succeed
              online.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="card-3d">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-12 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-3d">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">Email Us</h3>
                  </div>
                  <p className="text-muted-foreground">9s3dreams@gmail.com</p>
                  <p className="text-muted-foreground">9s3dreams@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="card-3d">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">Call Us</h3>
                  </div>
                  <p className="text-muted-foreground">+91 7510213873</p>
                  <p className="text-muted-foreground">+91 7510213873</p>
                </CardContent>
              </Card>

              <Card className="card-3d">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">Visit Us</h3>
                  </div>
                  <p className="text-muted-foreground">
                    123 Digital Avenue
                    <br />
                    Tech District, CA 90210
                    <br />
                    United States
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
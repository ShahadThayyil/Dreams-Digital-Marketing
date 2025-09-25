"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Anas",
    role: "CEO & Founder",
    image: "/Anas.jpeg",
    initials: "SJ",
    bio: "Visionary leader with 15+ years in digital marketing and business strategy.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Abhimanyu",
    role: "COO",
    image: "/Abhimanyu.jpeg",
    initials: "MC",
    bio: "Operations expert ensuring seamless project delivery and client satisfaction.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Swalih",
    role: "Creative Director",
    image: "/Swalih.jpeg",
    initials: "ER",
    bio: "Award-winning designer crafting compelling visual stories for brands.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Rilwan",
    role: "Marketing Head",
    image: "/Rilwan.jpeg",
    initials: "DK",
    bio: "Strategic marketer with expertise in multi-channel campaign optimization.",
    social: { linkedin: "#", twitter: "#" },
  },
  // {
  //   name: "Lisa Thompson",
  //   role: "Lead Developer",
  //   image: "/female-developer.png",
  //   initials: "LT",
  //   bio: "Full-stack developer building high-performance web solutions.",
  //   social: { linkedin: "#", twitter: "#" },
  // },
  // {
  //   name: "Alex Martinez",
  //   role: "SEO Specialist",
  //   image: "/placeholder-mhynu.png",
  //   initials: "AM",
  //   bio: "SEO expert driving organic growth through technical and content optimization.",
  //   social: { linkedin: "#", twitter: "#" },
  // },
]

export function TeamSection() {
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
    <section id="team" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-balance">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Talented professionals passionate about delivering exceptional results and driving your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className={`card-3d transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
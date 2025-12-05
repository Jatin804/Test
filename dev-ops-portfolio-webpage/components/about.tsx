"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Calendar, Award } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-sm font-mono text-foreground mb-2 uppercase tracking-wider">{">"} About Me</h2>
          <div className="glow-line w-24 mb-8" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                I'm a passionate Cloud DevOps Engineer with <span className="font-semibold">8+ years</span> of
                experience building and maintaining enterprise-scale cloud infrastructure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey began as a system administrator, where I discovered the power of automation and
                infrastructure as code. Today, I architect cloud solutions that enable teams to ship faster while
                maintaining security and reliability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not optimizing deployment pipelines or debugging distributed systems, you'll find me
                contributing to open-source projects, writing technical articles, or exploring the latest in
                cloud-native technologies.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="bg-card border border-border rounded-xl p-6 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">San Francisco, CA</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="text-foreground">8+ Years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center">
                    <Award className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Certifications</p>
                    <p className="text-foreground">AWS, GCP, Kubernetes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

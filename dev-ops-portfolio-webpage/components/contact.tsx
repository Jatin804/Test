"use client"

import { useEffect, useRef, useState } from "react"
import { Send, Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-sm font-mono text-foreground mb-2 uppercase tracking-wider">{">"} Get In Touch</h2>
          <div className="glow-line w-24 mx-auto mb-8" />

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {"Let's Build Something Together"}
          </h3>

          <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto">
            I'm currently open to new opportunities and interesting projects. Whether you have a question or just want
            to say hi, my inbox is always open!
          </p>

          <a
            href="mailto:alex@example.com"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-xl hover:shadow-xl hover:shadow-foreground/10 transition-all duration-300 hover:scale-105"
          >
            <span>Say Hello</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 hover:shadow-md transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 hover:shadow-md transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 hover:shadow-md transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 hover:shadow-md transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 text-center">
          <p className="text-sm text-muted-foreground font-mono">Designed & Built by Alex Chen</p>
          <p className="text-xs text-muted-foreground/60 mt-2">© 2025 All Rights Reserved</p>
        </div>
      </div>
    </section>
  )
}
